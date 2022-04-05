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
    preview.addEventListener('click', function() {
      const indexItem = index;
      swiper.slideTo(index);
    });
  });

  demoBtn.addEventListener('click', () => {
    setTimeout(() => {
      slider.classList.remove('slider--show');
      demoBtn.classList.add('demo-btn--hide')
    }, 5000);
  });

  const slidesImg = [
    "background-image: url('img/icon-1.jpg');", 
    "background-image: url('img/icon-2.jpg');", 
    "background-image: url('img/icon-3.jpg');", 
    "background-image: url('img/icon-4.jpg');", 
  ]

  const slideText = [
    "Акция действует с 01.07.18",
    "Акция действует с 01.07.18",
    "Акция действует с 01.07.18",
    "Акция действует с 01.07.18",
  ]

  const slideDescription = [
    "Этот текст добавлен для демонстрации на страницe",
    "Этот текст добавлен для демонстрации на страницe",
    "Этот текст добавлен для демонстрации на страницe",
    "Этот текст добавлен для демонстрации на страницe",
  ]

  const swiper = new Swiper('.swiper', {
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

    // breakpoints: {
    //   1170: {
    //     pagination: {
    //       renderBullet: function (index, className) {
    //         return `
    //           <div class="${className}">
    //             <div class="slider__preview" style="${slidesImg[index]}"></div>
    //             <div>
    //               <p class="slider__actions">${slideText[index]}</p>
    //               <p class="slider__description">${slideDescription[index]}</p>
    //             </div>
    //           </div>
    //         `
    //       }
    //     },        
    //   }
    // }
  });

  sliderPreviewCallback();
});