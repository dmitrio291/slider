document.addEventListener('DOMContentLoaded', () => {
  // Переменные для работы слайдера
  const slider = document.querySelector('.slider');
  const demoBtn = document.querySelector('.demo-btn');
  const sliderPreview = document.querySelectorAll('.slider__thumbs-item');

  // Ф-ия коллбек для добавления или удаления активного класса у превью
  const sliderPreviewCallback = () => {
    const index = swiper.activeIndex;

    sliderPreview.forEach(preview => {
      preview.classList.remove('active');
    });

    sliderPreview[index].classList.add('active');;
  };

  // При клике на превью переключает слайд, который соотвествует его индексу
  sliderPreview.forEach((preview, index) => {
    preview.addEventListener('click', () => {
      swiper.slideTo(index);
    });
  });

  // При клике на кнопку Начать демонстрацию показывает слайдер и прячет эту кнопку
  demoBtn.addEventListener('click', () => {
    setTimeout(() => {
      slider.classList.remove('slider--show');
      demoBtn.classList.add('demo-btn--hide')
    }, 5000);
  });

  // Инициализация слайдера
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

  // Вызов ф-ии sliderPreviewCallback() для добавления класса active у превью по умолчанию
  sliderPreviewCallback();
});
