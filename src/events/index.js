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

const specialMoveEvent = (id) => {
  return new CustomEvent('specialMoveClick', {
    detail: { id },
  });
};

const extraMoveEvent = (values) => {
  return new CustomEvent('extraMoveChange', {
    detail: { values },
  });
};

export { tooltipEvent, languageEvent, specialMoveEvent, extraMoveEvent };
