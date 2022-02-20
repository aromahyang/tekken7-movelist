const tooltipEvent = (index) => {
  return new CustomEvent('tooltipChange', {
    detail: { index },
  });
};

const languageEvent = (index) => {
  return new CustomEvent('languageChange', {
    detail: { index },
  });
};

export { tooltipEvent, languageEvent };
