!(function(e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function(e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function() {
  const modalBtn = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeBtn = document.querySelectorAll(".js-close-modal");

  const wrapper = document.querySelector(".wrapper");
  const body = document.querySelector(".body");

  modalBtn.forEach(item => {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      let modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );
      modalElem.classList.add("active");
      overlay.classList.add("active");
      body.classList.add("modal-open");
    });
  });

  closeBtn.forEach(item => {
    item.addEventListener("click", function(e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("modal-open");
    });
  });

  document.body.addEventListener(
    "keyup",
    function(e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
        body.classList.remove("modal-open");
      }
    },
    false
  );

  overlay.addEventListener("click", function(e) {
    if (e.target == document.querySelector(".modal-overlay")) {
      document.querySelector(".modal.active").classList.remove("active");
      document.querySelector(".modal-overlay").classList.remove("active");
      body.classList.remove("modal-open");
    }
  });
});
