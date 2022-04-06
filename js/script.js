document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const demoBtn = document.querySelector('.demo-btn');
  const sliderPreview = document.querySelectorAll('.slider__thumbs-item');

  const sliderPreviewCallback = () => {
    const index = swiper.activeIndex;

    sliderPreview.forEach(preview => {
      preview.classList.remove('active');
    });

    sliderPreview[index].classList.add('active');;
  };

  sliderPreview.forEach((preview, index) => {
    preview.addEventListener('click', () => {
      swiper.slideTo(index);
    });
  });

  demoBtn.addEventListener('click', () => {
    setTimeout(() => {
      slider.classList.remove('slider--show');
      demoBtn.classList.add('demo-btn--hide')
    }, 5000);
  });

  const swiper = new Swiper(slider, {
    pagination: {
      el: '.slider__pagination',
      clickable: true
    },

    on: {
      slideChange: sliderPreviewCallback
    },

    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
  });

  sliderPreviewCallback();
});
