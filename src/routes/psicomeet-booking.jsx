import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Header from "../components/header";
import Terms from "../components/terms";

/* ---------------------------------------------------------
   Helpers
--------------------------------------------------------- */
const HOURS = [16, 17, 18, 19];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isoDate(d) {
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

function isSameDay(a, b) {
  return (
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isAvailableDay(d) {
  const dow = d.getDay(); // 0 Sun ... 6 Sat
  return dow >= 1 && dow <= 4; // Monday - Thursday
}

function occupiedIndexForDate(dateStr) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash += dateStr.charCodeAt(i);
  return hash % 5; // 0-3 => that slot occupied, 4 => none occupied
}

function getCalendarCells(viewDate, today, selectedDate) {
  const cells = [];
  const firstOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const jsDay = firstOfMonth.getDay();
  const leadingBlanks = (jsDay + 6) % 7; // Monday-first index
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

  for (let b = 0; b < leadingBlanks; b++) {
    cells.push({ blank: true, key: "b" + b });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const cellDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const available = isAvailableDay(cellDate) && cellDate.getTime() >= today.getTime();
    cells.push({
      blank: false,
      key: "d" + day,
      day,
      date: cellDate,
      available,
      isToday: isSameDay(cellDate, today),
      isSelected: selectedDate ? isSameDay(cellDate, selectedDate) : false,
    });
  }
  return cells;
}

/* ---------------------------------------------------------
   Small presentational pieces
--------------------------------------------------------- */
function Logo({ withTagline }) {
  return (
    <span className="pm-logo">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="12" cy="15" r="9" stroke="#EFF4EA" strokeWidth="1.6" />
        <circle cx="19" cy="13" r="9" stroke="#8FA184" strokeWidth="1.6" />
        <circle cx="15.2" cy="14" r="1.8" fill="#C99A3C" />
      </svg>
      {withTagline ? (
        <span className="pm-logo-text-col">
          Psico-meet
          <span className="pm-logo-tagline">Sesiones de psicología en línea</span>
        </span>
      ) : (
        <span>Psico-meet</span>
      )}
    </span>
  );
}

function StepIndicator({ step, submitted }) {
  const s1 = step >= 1 ? (step > 1 ? "is-complete" : "is-active") : "";
  const s2 = step >= 2 ? (step > 2 ? "is-complete" : "is-active") : "";
  const s3 = step >= 3 ? (submitted ? "is-complete" : "is-active") : "";
  return (
    <div className="pm-steps" aria-hidden="true">
      <div className={"pm-step " + s1}>
        <span>01</span>Fecha
      </div>
      <div className="pm-step-divider" />
      <div className={"pm-step " + s2}>
        <span>02</span>Horario
      </div>
      <div className="pm-step-divider" />
      <div className={"pm-step " + s3}>
        <span>03</span>Tus datos
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Main component
--------------------------------------------------------- */
export default function PsicoMeet() {
  const todayRef = useRef(
    (() => {
      const t = new Date();
      t.setHours(0, 0, 0, 0);
      return t;
    })()
  );
  const today = todayRef.current;

  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", note: "", consent: false });
  const [showModal, setShowModal] = useState(false);
  const [modalSummary, setModalSummary] = useState("");
  const [breathePhase, setBreathePhase] = useState("Inhala");
  const [reducedMotion, setReducedMotion] = useState(false);

  const rootRef = useRef(null);
  const formRef = useRef(null);

  /* Load brand fonts once */
  useEffect(() => {
    const created = [];
    const addLink = (rel, href, crossOrigin) => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      if (crossOrigin) link.crossOrigin = "anonymous";
      document.head.appendChild(link);
      created.push(link);
    };
    addLink("preconnect", "https://fonts.googleapis.com");
    addLink("preconnect", "https://fonts.gstatic.com", true);
    addLink(
      "stylesheet",
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
    );
    return () => created.forEach((el) => el.parentNode && el.parentNode.removeChild(el));
  }, []);

  /* Respect prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  /* Breathing label, synced to the CSS animation cycle */
  useEffect(() => {
    if (reducedMotion) {
      setBreathePhase("Respira con calma");
      return;
    }
    setBreathePhase("Inhala");
    const id = setInterval(() => {
      setBreathePhase((p) => (p === "Inhala" ? "Exhala" : "Inhala"));
    }, 4000);
    return () => clearInterval(id);
  }, [reducedMotion]);

  /* Reveal-on-scroll for section blocks */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Close modal on Escape */
  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showModal]);

  const scrollToSelector = useCallback((selector) => {
    const root = rootRef.current;
    const target = root ? root.querySelector(selector) : null;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleSelectDate = (d) => {
    setSelectedDate(d);
    setSelectedHour(null);
    setSubmitted(false);
  };

  const handleSelectHour = (hour) => {
    setSelectedHour(hour);
    setTimeout(() => {
      if (formRef.current) formRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 80);
  };

  const handlePrevMonth = () => setViewDate((v) => new Date(v.getFullYear(), v.getMonth() - 1, 1));
  const handleNextMonth = () => setViewDate((v) => new Date(v.getFullYear(), v.getMonth() + 1, 1));

  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedHour(null);
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", note: "", consent: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const name = formData.name.trim();
    const dateLabel = capitalize(
      selectedDate.toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    );
    const timeLabel = String(selectedHour).padStart(2, "0") + ":00";
    setModalSummary((name ? name + ", te" : "Te") + " esperamos el " + dateLabel + " a las " + timeLabel + " hrs.");
    setSubmitted(true);
    setShowModal(true);
  };

  const handleModalReset = () => {
    setShowModal(false);
    resetBooking();
    setTimeout(() => scrollToSelector(".pm-booking"), 60);
  };

  /* Derived data */
  const monthLabel = capitalize(viewDate.toLocaleDateString("es-MX", { month: "long", year: "numeric" }));
  const isCurrentMonth = viewDate.getFullYear() === today.getFullYear() && viewDate.getMonth() === today.getMonth();
  const calendarCells = useMemo(() => getCalendarCells(viewDate, today, selectedDate), [viewDate, today, selectedDate]);

  const slots = useMemo(() => {
    if (!selectedDate) return [];
    const occupiedIdx = occupiedIndexForDate(isoDate(selectedDate));
    return HOURS.map((hour, idx) => ({
      hour,
      label: String(hour).padStart(2, "0") + ":00",
      occupied: idx === occupiedIdx,
    }));
  }, [selectedDate]);

  const slotsDateLabel = selectedDate
    ? capitalize(selectedDate.toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long" }))
    : "";

  const step = !selectedDate ? 1 : selectedHour === null ? 2 : 3;

  return (
    <>
      <Header />
      <div className="pm-root" ref={rootRef}>
        <style>{CSS}</style>


        <main>
          {/* HERO */}
          <section className="pm-hero">
            <div className="pm-wrap pm-hero-inner">
              <div className="pm-hero-copy">
                <span className="pm-eyebrow">Tu espacio, tu tiempo</span>
                <h1>Date el permiso de sentirte mejor</h1>
                <p className="pm-hero-sub">
                  Agenda tu sesión en menos de dos minutos: elige el día, elige la hora, y Neuro-dev se
                  encarga del resto. Sin filas de espera ni llamadas incómodas.
                </p>
                <div className="pm-hero-actions">
                  <button className="pm-btn-primary" type="button" onClick={() => scrollToSelector(".pm-booking")}>
                    Agenda tu sesión
                  </button>
                  <span className="pm-hero-note">Confirmación inmediata, directo a tu correo.</span>
                </div>
                <ul className="pm-trust-chips">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="4" y="8" width="10" height="7" rx="1.5" stroke="#3E5C40" strokeWidth="1.4" />
                      <path d="M6 8V5.5a3 3 0 0 1 6 0V8" stroke="#3E5C40" strokeWidth="1.4" />
                    </svg>
                    100% confidencial
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2.5" y="3.5" width="13" height="12" rx="2" stroke="#3E5C40" strokeWidth="1.4" />
                      <path d="M2.5 7h13M6 2v3M12 2v3" stroke="#3E5C40" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    Horarios lun–vie
                  </li>
                </ul>
              </div>
              <div className="pm-hero-visual" aria-hidden="true">
                <div className="pm-breathing-wrap">
                  <div className="pm-breathing-ring" />
                  <div className="pm-breathing-circle" />
                  <span className="pm-breathing-label">{breathePhase}</span>
                </div>
              </div>
            </div>
          </section>

          {/* BOOKING */}
          <section className="pm-booking">
            <div className="pm-wrap">
              <div className="pm-section-head reveal">
                <span className="pm-eyebrow">Agenda tu sesión</span>
                <h2>Elige el día y la hora que mejor te acomoden</h2>
              </div>

              <div className="reveal">
                <StepIndicator step={step} submitted={submitted} />
              </div>

              <div className="pm-booking-grid reveal">
                <div className="pm-calendar-card">
                  <div className="pm-calendar-header">
                    <button className="pm-cal-nav" type="button" onClick={handlePrevMonth} disabled={isCurrentMonth} aria-label="Mes anterior">
                      ‹
                    </button>
                    <h3>{monthLabel}</h3>
                    <button className="pm-cal-nav" type="button" onClick={handleNextMonth} aria-label="Mes siguiente">
                      ›
                    </button>
                  </div>
                  <div className="pm-calendar-weekdays">
                    <span>L</span>
                    <span>M</span>
                    <span>M</span>
                    <span>J</span>
                    <span>V</span>
                    <span>S</span>
                    <span>D</span>
                  </div>
                  <div className="pm-calendar-grid">
                    {calendarCells.map((cell) =>
                      cell.blank ? (
                        <div className="pm-cal-cell-blank" key={cell.key} />
                      ) : (
                        <button
                          type="button"
                          key={cell.key}
                          disabled={!cell.available}
                          aria-disabled={!cell.available}
                          onClick={() => cell.available && handleSelectDate(cell.date)}
                          className={
                            "pm-cal-day " +
                            (cell.available ? "is-available" : "is-disabled") +
                            (cell.isToday ? " is-today" : "") +
                            (cell.isSelected ? " is-selected" : "")
                          }
                        >
                          {cell.day}
                        </button>
                      )
                    )}
                  </div>
                  <div className="pm-calendar-legend">
                    <span>
                      <i className="pm-dot pm-dot-available" />
                      Disponible
                    </span>
                    <span>
                      <i className="pm-dot pm-dot-selected" />
                      Seleccionado
                    </span>
                    <span>
                      <i className="pm-dot pm-dot-disabled" />
                      No disponible
                    </span>
                  </div>
                </div>

                <div className="pm-slots-card">
                  {!selectedDate ? (
                    <div className="pm-slots-empty">Selecciona una fecha en el calendario para ver los horarios disponibles.</div>
                  ) : (
                    <div className="pm-slots-content">
                      <h3>{slotsDateLabel}</h3>
                      <p className="pm-slots-caption">Horarios disponibles ese día:</p>
                      <div className="pm-slots-grid">
                        {slots.map((slot) => (
                          <button
                            type="button"
                            key={slot.hour}
                            disabled={slot.occupied}
                            onClick={() => !slot.occupied && handleSelectHour(slot.hour)}
                            className={"pm-slot-btn" + (selectedHour === slot.hour ? " is-selected" : "")}
                          >
                            <span>
                              <span className="pm-slot-time">{slot.label}</span>
                              <span className="pm-slot-status">{slot.occupied ? "Ocupado" : "Disponible"}</span>
                            </span>
                            <span className="pm-slot-divider" aria-hidden="true" />
                          </button>
                        ))}
                      </div>

                      {selectedHour !== null && (
                        <form className="pm-booking-form" ref={formRef} onSubmit={handleSubmit} noValidate>
                          <h4>Ya casi terminamos</h4>
                          <p>Estos datos son confidenciales y solo se usan para confirmar tu cita.</p>

                          <label htmlFor="pm-field-name">
                            Nombre completo
                            <input
                              type="text"
                              id="pm-field-name"
                              required
                              autoComplete="name"
                              value={formData.name}
                              onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                            />
                          </label>
                          <label htmlFor="pm-field-email">
                            Correo electrónico
                            <input
                              type="email"
                              id="pm-field-email"
                              required
                              autoComplete="email"
                              value={formData.email}
                              onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                            />
                          </label>
                          <label htmlFor="pm-field-phone">
                            Teléfono
                            <input
                              type="tel"
                              id="pm-field-phone"
                              required
                              autoComplete="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                            />
                          </label>
                          <label htmlFor="pm-field-note">
                            ¿Qué te gustaría trabajar en esta sesión? (opcional)
                            <textarea
                              id="pm-field-note"
                              value={formData.note}
                              onChange={(e) => setFormData((f) => ({ ...f, note: e.target.value }))}
                            />
                          </label>
                          <label className="pm-checkbox-row" htmlFor="pm-field-consent">
                            <input
                              type="checkbox"
                              id="pm-field-consent"
                              required
                              checked={formData.consent}
                              onChange={(e) => setFormData((f) => ({ ...f, consent: e.target.checked }))}
                            />
                            Entiendo que esta información es confidencial y acepto los términos de la consulta.
                          </label>

                          <button type="submit" className="pm-btn-primary pm-btn-block">
                            Confirmar cita
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="pm-faq">
            <div className="pm-wrap">
              <div className="pm-section-head reveal">
                <span className="pm-eyebrow">Antes de agendar</span>
                <h2>Preguntas frecuentes</h2>
              </div>
              <div className="pm-faq-layout reveal">

                <div className="pm-faq-list">
                  <details className="pm-faq-item">
                    <summary>
                      <span className="pm-faq-icon">+</span>
                      ¿Mis datos y lo que hablemos en sesión son confidenciales?
                    </summary>
                    <p>Sí. Todo lo que compartas, antes y durante tus sesiones, se maneja bajo estricta confidencialidad profesional.</p>
                  </details>
                  <details className="pm-faq-item">
                    <summary>
                      <span className="pm-faq-icon">+</span>
                      ¿Puedo cancelar o cambiar mi horario?
                    </summary>
                    <p>Claro. Puedes reagendar o cancelar tu cita hasta 24 horas antes, sin costo, desde el correo de confirmación.</p>
                  </details>
                  <details className="pm-faq-item">
                    <summary>
                      <span className="pm-faq-icon">+</span>
                      ¿Necesito un diagnóstico o referencia previa?
                    </summary>
                    <p>No. Puedes agendar tu primera sesión aunque no sepas exactamente qué te pasa; para eso estamos.</p>
                  </details>
                  <details className="pm-faq-item">
                    <summary>
                      <span className="pm-faq-icon">+</span>
                      ¿Las sesiones son en línea o presenciales?
                    </summary>
                    <p>Las sesiones se realizan en línea, por videollamada, desde donde te sientas más cómodo o cómoda.</p>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </main>



        {showModal && (
          <div
            className="pm-modal-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <div className="pm-modal-card" role="dialog" aria-modal="true" aria-labelledby="pm-modal-title">
              <div className="pm-modal-icon">✓</div>
              <h3 id="pm-modal-title">¡Tu cita está agendada!</h3>
              <p className="pm-modal-summary">{modalSummary}</p>
              <p className="pm-modal-note">
                Recibirás la confirmación en tu correo. Si necesitas reagendar, puedes hacerlo hasta 24 horas antes.
              </p>
              <div className="pm-modal-actions">
                <button className="pm-btn-secondary" type="button" onClick={handleModalReset}>
                  Agendar otra sesión
                </button>
                <button className="pm-btn-primary" type="button" onClick={() => setShowModal(false)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Terms />
    </>
  );
}

/* ---------------------------------------------------------
   Styles (scoped under .pm-root so this component can be
   dropped into an existing site without leaking global CSS)
--------------------------------------------------------- */
const CSS = `
.pm-root{
  --bg: #F3F6F0;
  --bg-soft: #EAF0E5;
  --card: #FFFFFF;
  --dark: #105A84;
  --dark-2: #1C2A22;
  --ink: #202B22;
  --ink-soft: #57634F;
  --sage: #5C7F5A;
  --sage-deep: #000000;
  --sage-pale: #DCE7D6;
  --sage-pale-2: #CDDDC6;
  --amber: #C99A3C;
  --amber-deep: #9C7526;
  --line: #DEE5D6;
  --occupied: #C97B6B;
  --shadow-lg: 0 24px 48px -24px rgba(20,31,25,0.28);
  --shadow-sm: 0 10px 20px -12px rgba(20,31,25,0.18);
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 10px;
  --font-display: Roboto, sans-serif;
  --font-body: 'Work Sans', -apple-system, sans-serif;
  --font-mono: 'Work Sans', -apple-system, sans-serif;

  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.pm-root *{ box-sizing: border-box; }
.pm-root img{ max-width:100%; display:block; }
.pm-root h1, .pm-root h2, .pm-root h3, .pm-root h4{ font-family: var(--font-display); color: var(--dark); margin:0 0 0.5em; font-weight:600; letter-spacing:-0.01em; }
.pm-root p{ margin:0 0 1em; color: var(--ink-soft); }
.pm-root ul{ margin:0; padding:0; list-style:none; }
.pm-root button{ font-family: inherit; cursor:pointer; }
.pm-root a{ color: inherit; }
.pm-root *:focus-visible{ outline: 2.5px solid var(--amber); outline-offset: 3px; border-radius: 4px; }

.pm-root .pm-eyebrow{
  display:inline-flex; align-items:center; gap:8px;
  font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--sage-deep); font-weight:600;
}
.pm-root .pm-eyebrow::before{ content:""; width:16px; height:1.5px; background: var(--amber); display:inline-block; }

.pm-root .pm-wrap{ max-width: 1180px; margin: 0 auto; padding: 0 28px; }

/* Buttons */
.pm-root .pm-btn-primary{
  background: var(--dark); color: var(--bg); border:none; padding: 15px 30px;
  border-radius: 999px; font-weight:600; font-size: 1rem;
  box-shadow: 0 14px 28px -14px rgba(156,117,38,0.65);
  transition: transform .2s ease, box-shadow .2s ease;
}
.pm-root .pm-btn-primary:hover{ transform: translateY(-2px); box-shadow: 0 18px 32px -14px rgba(156,117,38,0.7); }
.pm-root .pm-btn-primary:disabled{ opacity:0.45; cursor:not-allowed; transform:none; box-shadow:none; }
.pm-root .pm-btn-primary.pm-btn-block{ width:100%; }

.pm-root .pm-btn-secondary{
  background: transparent; border: 1.5px solid var(--sage-deep); color: var(--sage-deep);
  padding: 14px 28px; border-radius: 999px; font-weight:600;
  transition: background .2s ease, color .2s ease;
}
.pm-root .pm-btn-secondary:hover{ background: var(--sage-deep); color:#fff; }

.pm-root .pm-btn-cta-small{
  background: var(--amber); color: var(--dark); border:none; padding: 11px 20px;
  border-radius: 999px; font-weight:600; font-size: 0.88rem; white-space:nowrap;
  transition: transform .2s ease;
}
.pm-root .pm-btn-cta-small:hover{ transform: translateY(-1px); }

/* Header */
.pm-root .pm-header{ position: sticky; top:0; z-index: 40; background: var(--dark); border-bottom: 1px solid var(--dark-2); }
.pm-root .pm-header-inner{ padding: 16px 28px; display:flex; align-items:center; justify-content:space-between; gap: 16px; }
.pm-root .pm-logo{ display:flex; align-items:center; gap:10px; color:#EFF4EA; font-family: var(--font-display); font-weight:600; font-size: 1.25rem; }
.pm-root .pm-logo svg{ flex-shrink:0; }
.pm-root .pm-logo-tagline{ font-family: var(--font-body); font-weight:400; font-size:0.78rem; color: var(--sage-pale-2); display:block; margin-top: 1px; }
.pm-root .pm-logo-text-col{ display:flex; flex-direction:column; line-height:1.1; }

@media (max-width: 560px){
  .pm-root .pm-logo-tagline{ display:none; }
  .pm-root .pm-logo{ font-size: 1.08rem; }
}

/* Hero */
.pm-root .pm-hero{ padding: 76px 0 88px; overflow:hidden; margin-top: 70px;}
.pm-root .pm-hero-inner{ display:grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items:center; }
.pm-root .pm-hero h1{ font-size: clamp(2.2rem, 4.2vw, 3.35rem); line-height:1.08; margin-top: 14px; }
.pm-root .pm-hero-sub{ font-size: 1.08rem; max-width: 46ch; margin-top: 4px; }
.pm-root .pm-hero-actions{ display:flex; align-items:center; justify-content: center; flex-wrap:wrap; gap: 18px; margin: 28px 0 30px; }
.pm-root .pm-hero-note{ font-size: 0.88rem; color: var(--ink-soft); }

.pm-root .pm-trust-chips{ display:flex; justify-content: center; flex-wrap:wrap; gap: 12px 22px; }
.pm-root .pm-trust-chips li{ display:flex; align-items:center; gap:8px; font-size: 0.92rem; color: var(--sage-deep); font-weight:600; }
.pm-root .pm-trust-chips svg{ flex-shrink:0; }

.pm-root .pm-hero-visual{ display:flex; justify-content:center; align-items:center; }
.pm-root .pm-breathing-wrap{ position:relative; width: 320px; height: 320px; display:flex; align-items:center; justify-content:center; }
.pm-root .pm-breathing-ring{ position:absolute; inset:0; border-radius:50%; border: 1.5px dashed var(--sage-pale-2); }
.pm-root .pm-breathing-circle{
  width: 190px; height: 190px; border-radius:50%;
  background: radial-gradient(circle at 35% 30%, #7B9E78, var(--sage-deep) 72%);
  box-shadow: 0 30px 60px -20px #000000;
  animation: pm-breathe 8s ease-in-out infinite;
  display:flex; align-items:center; justify-content:center;
}
.pm-root .pm-breathing-circle::after{ content:""; width: 120px; height:120px; border-radius:50%; background: rgba(255,255,255,0.14); }
@keyframes pm-breathe{
  0%, 100%{ transform: scale(0.86); }
  50%{ transform: scale(1); }
}
.pm-root .pm-breathing-label{
  position:absolute; bottom: 6px; left:50%; transform: translateX(-50%);
  font-family: var(--font-mono); font-size: 0.85rem; letter-spacing:0.06em; color: var(--sage-deep);
  background: var(--card); padding: 6px 16px; border-radius: 999px; box-shadow: var(--shadow-sm);
}

@media (prefers-reduced-motion: reduce){
  .pm-root .pm-breathing-circle{ animation: none; }
}

@media (max-width: 900px){
  .pm-root .pm-hero-inner{ grid-template-columns: 1fr; gap: 40px; }
  .pm-root .pm-hero-visual{ order:-1; }
  .pm-root .pm-breathing-wrap{ width: 220px; height:220px; }
  .pm-root .pm-breathing-circle{ width:140px; height:140px; }
  .pm-root .pm-breathing-circle::after{ width:88px; height:88px; }
}

/* Sections */
.pm-root section{ padding: 70px 0; }
.pm-root .pm-section-head{ max-width: 620px; margin-bottom: 42px; }
.pm-root .pm-section-head h2{ font-size: clamp(1.7rem, 2.8vw, 2.3rem); margin-top:10px; }
.pm-root .pm-section-head p{ font-size:1.02rem; }

.pm-root .pm-booking{ background: var(--bg-soft); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }

/* Steps */
.pm-root .pm-steps{ display:flex; align-items:center; gap: 10px; margin-bottom: 36px; flex-wrap:wrap; }
.pm-root .pm-step{ display:flex; align-items:center; gap:10px; font-family: var(--font-mono); font-size:0.82rem; color: var(--ink-soft); font-weight:600; }
.pm-root .pm-step span{
  width:26px; height:26px; border-radius:50%; background: var(--card); border: 1.5px solid var(--line);
  display:flex; align-items:center; justify-content:center; font-size:0.72rem; color: var(--ink-soft);
  transition: all .25s ease;
}
.pm-root .pm-step.is-active span{ background: var(--sage-deep); border-color: var(--sage-deep); color:#fff; }
.pm-root .pm-step.is-active{ color: var(--sage-deep); }
.pm-root .pm-step.is-complete span{ background: var(--amber); border-color: var(--amber); color: var(--dark); }
.pm-root .pm-step.is-complete{ color: var(--amber-deep); }
.pm-root .pm-step-divider{ width: 30px; height:1px; background: var(--line); }

/* Booking grid */
.pm-root .pm-booking-grid{ display:grid; grid-template-columns: 0.92fr 1.08fr; gap: 26px; align-items:start; }
@media (max-width: 900px){ .pm-root .pm-booking-grid{ grid-template-columns: 1fr; } }

.pm-root .pm-calendar-card, .pm-root .pm-slots-card{ background: var(--card); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); padding: 26px; }

.pm-root .pm-calendar-header{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 18px; }
.pm-root .pm-calendar-header h3{ margin:0; font-size:1.08rem; text-transform:capitalize; }
.pm-root .pm-cal-nav{
  width:36px; height:36px; border-radius:50%; border:1.5px solid var(--line); background:transparent;
  color: var(--sage-deep); font-size:1.15rem; display:flex; align-items:center; justify-content:center;
  transition: background .2s ease, border-color .2s ease;
}
.pm-root .pm-cal-nav:hover:not(:disabled){ background: var(--sage-pale); border-color: var(--sage-pale-2); }
.pm-root .pm-cal-nav:disabled{ opacity:0.3; cursor:not-allowed; }

.pm-root .pm-calendar-weekdays{ display:grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 6px; }
.pm-root .pm-calendar-weekdays span{ text-align:center; font-family: var(--font-mono); font-size: 0.72rem; color: var(--ink-soft); text-transform:uppercase; }

.pm-root .pm-calendar-grid{ display:grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
.pm-root .pm-cal-cell-blank{ aspect-ratio:1; }
.pm-root .pm-cal-day{
  aspect-ratio:1; border-radius: 12px; border: none; background: transparent;
  font-family: var(--font-body); font-size: 0.92rem; font-weight:500; color: var(--ink);
  display:flex; align-items:center; justify-content:center; position:relative;
  transition: background .18s ease, color .18s ease, transform .12s ease;
}
.pm-root .pm-cal-day.is-available:hover{ background: var(--sage-pale); transform: translateY(-1px); }
.pm-root .pm-cal-day.is-available{ color: var(--sage-deep); font-weight:600; }
.pm-root .pm-cal-day.is-disabled{ color: #B9C2B1; cursor:not-allowed; }
.pm-root .pm-cal-day.is-selected{ background: var(--sage-deep); color:#fff; box-shadow: var(--shadow-sm); }
.pm-root .pm-cal-day.is-today::after{ content:""; position:absolute; bottom: 5px; width:4px; height:4px; border-radius:50%; background: var(--amber); }
.pm-root .pm-cal-day.is-selected.is-today::after{ background:#fff; }

.pm-root .pm-calendar-legend{ display:flex; gap:16px; flex-wrap:wrap; margin-top:18px; padding-top:16px; border-top:1px solid var(--line); }
.pm-root .pm-calendar-legend span{ display:flex; align-items:center; gap:6px; font-size:0.78rem; color: var(--ink-soft); }
.pm-root .pm-dot{ width:9px; height:9px; border-radius:50%; display:inline-block; }
.pm-root .pm-dot-available{ background: var(--sage-pale-2); border:1.5px solid var(--sage-deep); }
.pm-root .pm-dot-selected{ background: var(--sage-deep); }
.pm-root .pm-dot-disabled{ background: #E3E7DD; border:1.5px solid #C6CDBD; }

/* Slots */
.pm-root .pm-slots-empty{ display:flex; align-items:center; justify-content:center; text-align:center; min-height: 260px; color: var(--ink-soft); font-size: 0.98rem; padding: 20px; }
.pm-root .pm-slots-content h3{ font-size:1.12rem; text-transform:capitalize; margin-bottom: 4px; }
.pm-root .pm-slots-caption{ font-size:0.88rem; margin-bottom:20px; }

.pm-root .pm-slots-grid{ display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px; }
.pm-root .pm-slot-btn{
  position:relative; display:flex; align-items:center; gap: 12px; background: var(--sage-pale);
  border: 1.5px solid transparent; border-radius: var(--radius-sm); padding: 14px 16px 14px 22px; overflow:hidden;
  transition: background .18s ease, border-color .18s ease, transform .12s ease;
}
.pm-root .pm-slot-btn::before, .pm-root .pm-slot-btn::after{ content:""; position:absolute; left:-7px; width:14px; height:14px; border-radius:50%; background: var(--card); }
.pm-root .pm-slot-btn::before{ top:-7px; }
.pm-root .pm-slot-btn::after{ bottom:-7px; }
.pm-root .pm-slot-time{ font-family: var(--font-mono); font-size: 1.15rem; font-weight:600; color: var(--sage-deep); }
.pm-root .pm-slot-status{ font-size: 0.74rem; color: var(--sage-deep); opacity:0.85; display:block; margin-top:2px; }
.pm-root .pm-slot-divider{
  width:1px; align-self:stretch; background-image: linear-gradient(var(--sage-deep) 60%, transparent 0%);
  background-size: 1px 8px; background-repeat: repeat-y; opacity:0.35;
}
.pm-root .pm-slot-btn:hover:not(:disabled){ background: var(--sage-pale-2); transform: translateY(-1px); }
.pm-root .pm-slot-btn.is-selected{ background: var(--sage-deep); border-color: var(--sage-deep); }
.pm-root .pm-slot-btn.is-selected .pm-slot-time, .pm-root .pm-slot-btn.is-selected .pm-slot-status{ color:#fff; }
.pm-root .pm-slot-btn.is-selected .pm-slot-divider{ background-image: linear-gradient(#fff 60%, transparent 0%); opacity:0.5; }
.pm-root .pm-slot-btn:disabled{ background: #EEF1EA; cursor:not-allowed; }
.pm-root .pm-slot-btn:disabled .pm-slot-time{ color:#AEB6A5; }
.pm-root .pm-slot-btn:disabled .pm-slot-status{ color: var(--occupied); opacity:1; font-weight:600; }

/* Form */
.pm-root .pm-booking-form{ margin-top: 26px; padding-top: 24px; border-top: 1px solid var(--line); }
.pm-root .pm-booking-form h4{ font-size:1.02rem; margin-bottom:2px; }
.pm-root .pm-booking-form > p{ font-size:0.86rem; margin-bottom:18px; }
.pm-root .pm-booking-form label{ display:block; font-size:0.85rem; font-weight:600; color: var(--ink); margin-bottom:14px; }
.pm-root .pm-booking-form input, .pm-root .pm-booking-form textarea{
  display:block; width:100%; margin-top:6px; padding: 11px 13px; border-radius: var(--radius-sm);
  border: 1.5px solid var(--line); background: var(--bg); font-family: var(--font-body); font-size:0.95rem;
  font-weight:400; color: var(--ink); transition: border-color .18s ease, background .18s ease;
}
.pm-root .pm-booking-form input:focus, .pm-root .pm-booking-form textarea:focus{ border-color: var(--sage-deep); background: var(--card); outline:none; }
.pm-root .pm-booking-form textarea{ min-height: 78px; resize:vertical; }
.pm-root .pm-checkbox-row{ display:flex; align-items:flex-start; gap:10px; font-weight:400; font-size:0.82rem; color: var(--ink-soft); }
.pm-root .pm-checkbox-row input{ width:auto; margin-top:2px; flex-shrink:0; accent-color: var(--sage-deep); }

/* Reveal on scroll */
.pm-root .reveal{ opacity:0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
.pm-root .reveal.is-visible{ opacity:1; transform:none; }
@media (prefers-reduced-motion: reduce){
  .pm-root .reveal{ opacity:1; transform:none; transition:none; }
}

/* FAQ */
.pm-root .pm-faq-layout{ display:flex; gap: 48px; justify-content: start; }
@media (max-width: 900px){ .pm-root .pm-faq-layout{ grid-template-columns:1fr; gap:32px; } }

.pm-root .pm-testimonial{ background: var(--dark); color: #EFF4EA; border-radius: var(--radius-lg); padding: 30px 26px; }
.pm-root .pm-testimonial p{ color: #DCE7D6; font-family: var(--font-display); font-size:1.15rem; font-style:italic; line-height:1.5; }
.pm-root .pm-testimonial cite{ font-style:normal; font-family: var(--font-mono); font-size:0.78rem; color: var(--amber); letter-spacing:0.03em; }

.pm-root .pm-faq-item{ border-bottom: 1px solid var(--line); padding: 18px 0; }
.pm-root .pm-faq-item summary{ display:flex; align-items:center; gap: 16px; cursor:pointer; font-weight:600; color: var(--dark); font-size:1rem; list-style:none; }
.pm-root .pm-faq-item summary::-webkit-details-marker{ display:none; }
.pm-root .pm-faq-icon{
  flex-shrink:0; width:22px; height:22px; border-radius:50%; border: 1.5px solid var(--sage-deep);
  display:flex; align-items:center; justify-content:center; color: var(--sage-deep); font-size:0.9rem;
  transition: transform .25s ease, background .25s ease, color .25s ease;
}
.pm-root .pm-faq-item[open] .pm-faq-icon{ background: var(--sage-deep); color:#fff; transform: rotate(45deg); }
.pm-root .pm-faq-item p{ margin: 12px 0 0; font-size:0.94rem; }

/* Footer */
.pm-root .pm-footer{ background: var(--dark); color: #C7D2BF; padding: 26px 0; }
.pm-root .pm-footer-grid{ display:grid; grid-template-columns: 1.3fr 0.85fr 1fr; gap: 36px; padding-bottom: 34px; border-bottom: 1px solid var(--dark-2); }
@media (max-width:720px){ .pm-root .pm-footer-grid{ grid-template-columns:1fr; gap:28px; } }
.pm-root .pm-footer-brand .pm-logo{ margin-bottom:12px; }
.pm-root .pm-footer-brand p{ color:#9FAF95; font-size:0.92rem; max-width:34ch; }
.pm-root .pm-footer-col h5{ font-family: var(--font-mono); text-transform:uppercase; font-size:0.72rem; letter-spacing:0.08em; color:#8FA184; margin: 0 0 14px; }
.pm-root .pm-footer-col a{ display:block; color:#DDE7D5; text-decoration:none; font-size:0.92rem; margin-bottom:10px; transition: color .18s ease; }
.pm-root .pm-footer-col a:hover{ color: var(--amber); }
.pm-root .pm-footer-hours{ display:block; font-size:0.92rem; margin-bottom:10px; }
.pm-root .pm-footer-note{ font-size:0.82rem; color:#7E9074; line-height:1.6; }
.pm-root .pm-footer-bottom{ display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-size:0.8rem; color:#7E9074; }

/* Modal */
.pm-root .pm-modal-overlay{ position:fixed; inset:0; background: rgba(20,31,25,0.55); display:flex; align-items:center; justify-content:center; padding: 20px; z-index: 100; }
.pm-root .pm-modal-card{ background: var(--card); border-radius: var(--radius-lg); max-width: 420px; width:100%; padding: 34px 30px 30px; text-align:center; box-shadow: var(--shadow-lg); animation: pm-modal-in .3s ease; }
@keyframes pm-modal-in{
  from{ opacity:0; transform: translateY(12px) scale(0.98); }
  to{ opacity:1; transform:none; }
}
.pm-root .pm-modal-icon{ width:56px; height:56px; border-radius:50%; background: var(--sage-pale); color: var(--sage-deep); font-size:1.5rem; display:flex; align-items:center; justify-content:center; margin: 0 auto 18px; }
.pm-root .pm-modal-card h3{ font-size:1.35rem; }
.pm-root .pm-modal-card p{ font-size:0.94rem; }
.pm-root .pm-modal-summary{ color: var(--ink); font-weight:600; }
.pm-root .pm-modal-note{ font-size:0.85rem; }
.pm-root .pm-modal-actions{ display:flex; gap:12px; justify-content:center; margin-top: 22px; flex-wrap:wrap; }
.pm-root .pm-modal-actions button{ flex:1; min-width:150px; }

@media (max-width:560px){
  .pm-root .pm-wrap{ padding: 0 20px; }
  .pm-root .pm-hero{ padding: 52px 0 60px; }
  .pm-root section{ padding: 52px 0; }
  .pm-root .pm-slots-grid{ grid-template-columns: 1fr; }
  .pm-root .pm-calendar-card, .pm-root .pm-slots-card{ padding: 20px; }
}
`;
