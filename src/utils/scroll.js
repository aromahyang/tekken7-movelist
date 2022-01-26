function isSmoothScrollSupported() {
  return (
    'scrollBehavior' in document.documentElement.style &&
    window.__forceSmoothScrollPolyfill__ !== true
  );
}

function SVS_B($target, eAmt, where) {
  if (where === 'center' || where === '') {
    $target.scrollBy(0, eAmt / 2);
  } else if (where === 'top') {
    $target.scrollBy(0, -eAmt);
  }
}

function smoothVerticalScrolling($target, time, where) {
  const eAmt = $target.scrollTop / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, $target, eAmt, where);
    curTime += time / 100;
  }
}

function smoothScrollTop($target) {
  if (isSmoothScrollSupported()) {
    $target.scroll({ top: 0, behavior: 'smooth' });
  } else {
    // Safari
    smoothVerticalScrolling($target, 500, 'top');
  }
}

export default smoothScrollTop;
