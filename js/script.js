var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
})

jQuery('.owl-carousel').owlCarousel({
   autoplay: {
      delay: 1000,
   },
   loop: true,
   margin: 10,
   rtl: true,
   nav: false,
   dots: true,
   responsiveClass: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      1000: {
         items: 2,

      }
   }
});
jQuery('.cat-slider-item ').owlCarousel({
   loop: true,
   rtl: true,
   nav: false,
   dots: true,
   responsiveClass: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 3,
      },
      1000: {
         items: 5,

      }
   }
});

$(function () {
   $('.timer').startTimer({
      onComplete: function (element) {
         $('html, body').addClass('bodyTimeoutBackground');
      }
   }).click(function () {
      location.reload()
   });
})


jQuery("footer span.scroltop").click(function () {
   jQuery('body,html').animate({
      scrollTop: 0
   }, 1000)
})


jQuery('.product-gallery').owlCarousel({
   loop: true,
   items: 5,
   margin: 10,
   rtl: true,
   nav: false,
   dots: true,
   responsiveClass: true,
   responsive: {
      0: {
         items: 4,
      },
      600: {
         items: 4,
      },
      1000: {
         items: 4,

      }
   }
});
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 50,
      },
   },
});

jQuery('#app-zoom').ezPlus({
   zoomType: 'inner',
   cursor: 'crosshair'
});

jQuery('[data-fancybox="gallery"]').fancybox({});

var swiper = new Swiper(".mySwiper1", {
   slidesPerView: 3,
   spaceBetween: 30,
   freeMode: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 50,
      },
   },
});

jQuery('.responsive-menu-container ul li').has('ul').append("<span class='res-menu-ul-show'><i class='bi bi-caret-down-fill'></i></span>");


jQuery('.responsive-menu-container ul li span.res-menu-ul-show').click(function(){
  jQuery(this).prev('ul').slideToggle();
  jQuery(this).find('i').toggleClass('bi-caret-up-fill');
  
})

jQuery('#responsive-menu-btn').click(function(){
  jQuery('.responsive-menu-container').toggleClass('responsive-menu-show');
  jQuery('body,html').toggleClass('overflow-hidden');
  
});
function get_window_width(){
  var win_width = jQuery(window).width();


if(win_width>768){
  jQuery('.responsive-menu-container').removeClass('responsive-menu-show');
  jQuery('body,html').removeClass('overflow-hidden');
}
}
get_window_width();


jQuery(window).resize(function(){
  get_window_width();
})