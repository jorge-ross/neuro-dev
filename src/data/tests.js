class Test {
  constructor(id, name, description, url) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
  }

  run() {
    try {
      this.testFunction();
      console.log(`Test "${this.name}" passed.`);
    } catch (error) {
      console.error(`Test "${this.name}" failed: ${error.message}`);
    }
  }
}

export const tests = [
  new Test(
    1,
    "BDI",
    "Inventario de Depresión de Beck",
    "https://neurodev-bdi.onrender.com/"
  ),
  new Test(2, "CDI", "Inventario de Depresión Infantil", "/"),
];
