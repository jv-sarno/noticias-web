(function () {
  stickySidebar();
  initCouponCounter('#couponCounter');
  initCouponCounter('#couponCounter2');
})();

function stickySidebar() {
  new StickySidebar('#sidebar', {
    topSpacing: 20,
    bottomSpacing: 20
  });
}

function initCouponCounter(selector) {
  var element = document.querySelector(selector);
  var initialNumber = parseInt(element.innerText);
  var finalNumber = 7;

  window[selector] = setInterval(function () {
    initialNumber--;

    element.innerText = initialNumber.toString();

    if (initialNumber === finalNumber) {
      clearInterval(window[selector]);
    }
  }, 1000 * 60);
}
