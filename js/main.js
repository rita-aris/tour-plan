$(document).ready(function () {
  const hotelSwiper = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });

  const reviewsSwiper = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  modalButton.on("click", openModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass(".modal__overlay--visible");
    modalDialog.addClass(".modal__dialog--visible");
  }
});
