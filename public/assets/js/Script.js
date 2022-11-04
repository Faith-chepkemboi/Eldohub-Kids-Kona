// const slideContainerr = document.querySelector('.containerr');
// const slide = document.querySelector('.slides');
// const nextBtn = document.getElementById('next-btn');
// const prevBtn = document.getElementById('prev-btn');
// const interval = 1000;

// let slides = document.querySelectorAll('.slide');
// let index = 1;
// let slideId;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth;

// slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);

// const startSlide = () => {
//   slideId = setInterval(() => {
//     moveToNextSlide();
//   }, interval);
// };

// const getSlides = () => document.querySelectorAll('.slide');

// slide.addEventListener('transitionend', () => {
//   slides = getSlides();
//   if (slides[index].id === firstClone.id) {
//     slide.style.transition = 'none';
//     index = 1;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//   }

//   if (slides[index].id === lastClone.id) {
//     slide.style.transition = 'none';
//     index = slides.length - 2;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//   }
// });

// const moveToNextSlide = () => {
//   slides = getSlides();
//   if (index >= slides.length - 1) return;
//   index++;
//   slide.style.transition = '.7s ease-out';
//   slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// const moveToPreviousSlide = () => {
//   if (index <= 0) return;
//   index--;
//   slide.style.transition = '.7s ease-out';
//   slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// slideContainerr.addEventListener('mouseenter', () => {
//   clearInterval(slideId);
// });

// slideContainerr.addEventListener('mouseleave', startSlide);
// nextBtn.addEventListener('click', moveToNextSlide);
// prevBtn.addEventListener('click', moveToPreviousSlide);

// startSlide();

// //video
// var video=document.getElementById("bg-video");
// var btn=document.getElementById("myBtn");
// ///pause and play
// function myFunction(){
//   if(video.onpause){
//     video.onplay();
//     btn.innerHTML="Pause";
//   }else{
//     video.onpause();
//     btn.innerHTML="Play"
//   }
// }
// // counter
// $(document).ready(function(){
//   $(".counter").Counter-Up({
//     delay:10,
//     time:1200
//   });
  
// });
// $('.document').ready(function(){
//   $('.counter').counterUp({
//     delay:1,
//     time:1200

//   });

// });
// $('.count').each(function () {
//   $(this).prop('counter',0).animate({
//       Counter: $(this).text()
//   }, {
//       duration: 4000,
//       easing: 'swing',
//       step: function (now) {
//           $(this).text(Math.ceil(now));
//       }
//   });
// });

// // new js
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
