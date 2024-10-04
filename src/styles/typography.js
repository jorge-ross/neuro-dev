export const fonts = {
  primary: `'Ubuntu', sans-serif`,
  secondary: `'Cherry Bomb One', cursive`,
};

export const typography = {
  text: {
    xs: `
    font-size: 0.65rem;
    line-height: 0.55rem;
    `,
    xss: `
    font-size: 0.75rem;
    line-height: 0.55rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    font-style: normal;
    line-height: 1.26rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.4rem;
    `,
    xl: `
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,
    xt: `
    font-size: 0.875rem;
    line-height: normal;
    color: gray;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    xss: `
    font-size: 1.1rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.25rem;
    line-height: 3rem;
    `,
    lga: `
    font-size: 2.5rem;
    line-height: 3rem;
    `,
    lgx: `
    font-size: 3rem;
    line-height: 2rem;
    `,
    xl: `
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    line-height: 88px;
    `,
  },
};

for (const size in typography.text) {
  typography.text[size] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.head) {
  typography.head[size] += `
  font-family: ${fonts.primary};
  font-weight: 600;
  `;
}

export const typography2 = {
  text: {
    xs: `
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    font-style: normal;
    line-height: 1.26rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.41rem;
    `,
    lgx: `
    font-size: 3rem;
    line-height: 2.2rem;
    `,
    xl: `
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,
    xt: `
    font-size: 0.875rem;
    line-height: normal;
    color: gray;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    xss: `
    font-size: 1.4rem;
    line-height: 1.75rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.25rem;
    line-height: 2.5rem;
    `,
    lgx: `
    font-size: 3rem;
    line-height: 2.2rem;
    `,
    xl: `
    font-size: 4rem;
    line-height: 5rem;
    font-style: normal;
    letter-spacing: -0.5px;
    line-height: 88px;
    `,
    xxl: `
    font-size: 3rem;
    line-height: 3.75rem;
    `,
  },
};

for (const size in typography2.head) {
  typography2.head[size] += `
  font-family: ${fonts.secondary};
  font-weight: 600;
  `;
}

for (const size in typography2.text) {
  typography2.text[size] += `
  font-family: ${fonts.secondary};
  `;
}
