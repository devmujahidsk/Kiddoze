$(function () {

      preLoader();
      init();
      slickSliderInit();
      parallaxInit();
      setBackground($(".section"));
      moveAction($("#down-arrow"));
      moveActionUp($(".logo"));
      clickToOpen($('.slide-target'), $('.slide-btn'))
      
})

//set background
function setBackground(section) {
    section.each(function () {
    var getSectionAttr = $(this).data("bg");
    var getSectionAttrMobile = $(this).data("mobilebg");
    if ($(window).width() > 767) {
        getSectionAttr
        ? $(this).css("background-image", "url(" + getSectionAttr + ")")
        : null;
    } else if ($(window).width() < 767 && getSectionAttrMobile) {
        $(this).css("background-image", "url(" + getSectionAttrMobile + ")");
    }
    });
}

function moveAction(ele) {
  ele.click(function() {
    fullpage_api.moveSectionDown();
  })
}

function moveActionUp(ele) {
  ele.click(function() {
    fullpage_api.moveTo(1, 0);
  })
}

function clickToOpen(target, elem) {
  elem.click(function(e){
    var activeSectionIndex = $('.fp-section.active').index();

    e.preventDefault()
    elem.hide();
    fullpage_api.destroy('all');
   
    target.addClass('expand');
    $('.section').eq(activeSectionIndex).addClass('active');
    var top = $('.slider-bg').height()
    
    setTimeout(() => {
      $('#section4').find('.fp-scroller').css({
        'transform': ' translate(0px,'+ -top*1.7 +'px) translateZ(0px)'
      });
    }, 100);
    init();
    setBackground($(".section"));
  })
}

function init () {
  var kiddozeSlide = new fullpage("#sequence", {
    scrollBar: false,
    scrollingSpeed: 1000,
    easing: "easeInQuart",
    easingcss3: "cubic-bezier(.62,.07,.02,1.1)",
    scrollOverflow: true,
    scrollOverflowReset: true,
    licenseKey: '035F883D-42BA4861-91EB406D-54497C50',

    onLeave: function (origin, destination, direction) {
      
      // console.log('=====onleave=======')
      // console.log("destination", destination.index);
      // console.log("direction", direction);
      // console.log('=====onleave=======')
      
      if (destination.index === 1 && direction === "down") {
        $("main").css({ "background-color": "#ecb447" });
        $('#section0').addClass('transform-up');
        $('#section0').removeClass('animation-top');
        
      } else if (destination.index === 2 && direction === "down") {
        $("main").css({ "background-color": "#743d80" });
        $('#section1').addClass('transform-up');
        $('#section1').removeClass('animation-bottom');
        
      } else if (destination.index === 3 && direction === "down") {
        $("main").css({ "background-color": "#89c5cd" });
        
        
      } else if (destination.index === 0 && direction === "up") {
        $("main").css({ "background-color": "#4ed7d0" });
        
        $('#section1').removeClass('animation-top');
      } else if (destination.index === 1 && direction === "up") {
        $("main").css({ "background-color": "#ecb447" });
        
        $('#section2').removeClass('animation-bottom');
        $('#section2').addClass('transform-bottom');

        $('#section1').removeClass('transform-up');
        $('#section1').addClass('animation-top');

      } else if (destination.index === 2 && direction === "up") {
        $("main").css({ "background-color": "#743d80" });
          $('#section2').removeClass('transform-up');
          $('#section2').addClass('animation-top');
          
          $('#section3').removeClass('animation-bottom');
          $('#section3').addClass('transform-bottom');
      } else if (destination.index === 4 && direction === "down") {
        $("main").css({ "background-color": "#89c5cd" });
      } else if (destination.index === 3 && direction === "up") {
        $("main").css({ "background-color": "#89c5cd" });
        
      } 
    },
    afterLoad: function (origin, destination, direction) {
     
      // console.log("=====afterload====")
      // console.log("destination", destination.index);
      // console.log("direction", direction);
      // console.log("=====afterload====")

      if (destination.index === 1 && direction === "down") {
        $('#section0').removeClass('transform-bottom');
        $('#section1').removeClass('transform-bottom');
        $('#section1').addClass('animation-bottom');
        
      } else if (destination.index === 2 && direction === "down") {
        
        $('#section2').removeClass('transform-bottom');
        $('#section2').addClass('animation-bottom');
        
        $('#section1').removeClass('animation-top');
        $('#section1').addClass('transform-up');

      } else if (destination.index === 3 && direction === "down") {

        $('#section3').removeClass('transform-bottom');
        $('#section3').addClass('animation-bottom');
        
        $('#section2').removeClass('animation-top');
        $('#section2').removeClass('animation-bottom');
        $('#section2').addClass('transform-up');

      } else if (destination.index === 4 && direction === "down") { 
        $('#section3').removeClass('animation-bottom');
        $('#section3').addClass('transform-up');

      } else if (destination.index === 0 && direction === "up") { 
       // setTimeout(() => {
         $('#section0').removeClass('transform-up');
         $('#section0').addClass('animation-top');
         $('#section1').removeClass('animation-bottom');
         $('#section1').addClass('transform-bottom');
         
       // }, 300); 

      } else if (destination.index === 1 && direction === "up") {
        $('#section2').removeClass('animation-top');

      } else if (destination.index === 2 && direction === "up") {
        $('#section3').removeClass('animation-top');
        $('#section3').addClass('transform-bottom');

        $('#section2').removeClass('transform-up');
         $('#section2').addClass('animation-top');

      } else if (destination.index === 3 && direction === "up") {
        $('#section3').removeClass('transform-up');
        $('#section3').addClass('animation-top');

      } else if (destination.index === 0 && !direction) {
        $('#section0').addClass('transform-up');
       setTimeout(() => {
        $('#section0').addClass('animation-top');
        $('#section0').removeClass('transform-up');
       }, 2000); 
      }

      switch (destination.index) {
        case 0:
          $("main").css({ "background-color": "#4ed7d0" });
          break;
        case 1:
          $("main").css({ "background-color": "#ecb447" });
          break;
        case 2:
          $("main").css({ "background-color": "#743d80" });
          break;
        case 3:
          $("main").css({ "background-color": "#89c5cd" });
          break;
        case 4:
          $("main").css({ "background-color": "#89c5cd" });
          break;
        default:
          break;
      }
    },
  });
}

function slickSliderInit() {
  $('.why-kiddoze-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed:2000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows : false,
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          arrows : false,
        }
      },
    ]
  })

  
}

function parallaxInit() {
  $.parallaxify({
    positionProperty: 'transform',
    responsive: true,
    motionType: 'natural',
    mouseMotionType: 'gaussian',
    inputPriority: 'mouse',
    motionAngleX: 80,
    motionAngleY: 80,
    alphaFilter: 0.5,
    adjustBasePosition: true,
    alphaPosition: 0.025,
    useGyroscope: true,
  });
}

function preLoader() {
  setTimeout(() => {
    $(".preload").removeClass('show');
  }, 6000);
}