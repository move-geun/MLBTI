const size = {
  mobile: "480px",
  tablet: "830px",
  desktop: "1240px",
};

const flex = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tablet})`,
  desktop: `(max-width:${size.desktop})`,
};

const theme = {
  ...flex,
};

export default theme;
