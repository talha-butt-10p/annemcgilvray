$(document).ready(function() {
  // your code
  var window = $(window);

$('.btn-minuse').on('click', function(){            
  $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
})

$('.btn-pluss').on('click', function(){            
  $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
})
 
// $(".hero-left").height( $(".hero-right").height() );

//Home Page Recent View Slider
$('.recent-product-slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
});


// Slcik Slider for Product Category Section

$('.product-cat-outer').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
    
});

// New Brands Slider

$('.new-brands-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
    
});

// Slider Brands For you Section


$('.brandforyou-wrapper').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      
    ]
    
});


// Slider Browse collections for more inspiration  Section


$('.brows-collect-wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
    
});

// Career Page Carousal

$('.career-slides').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: false,
  arrows:true,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

// About page carousal

$('.about-slides').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: false,
  arrows:true,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});


//Home Page Page wish btn active
$(function() {
  $(".recent-product-slider .btn-wish").click(function() {
     // remove classes from all
    //  $(this).toggleClass("active");
    //  $(".recent-product-slider .btn-wish").removeClass("active");
     // add class to the one we clicked
     $(this).toggleClass("active");
  });
});

$('.recent-product-slider .btn-wish.active img').attr('src', 'assets/images/wishactive.png');

$(function() {
  $("#btn.button_btn").on("click", function(e) {
  $(".button_btn").toggleClass("active");
  $(".sidebar-item").toggleClass("active");
  $(".sidebar").toggleClass("side-bg animated fadeInRight");
  $("html").toggleClass("html-y");
  });
  $(".sidebar-item").on("click", function(e) {
  if ($(e.target).is("#btn.button_btn, .sidebar") === false) {
  $(".sidebar").removeClass("side-bg animated fadeInRight");
  $("#btn.button_btn").removeClass("active");
  $(".sidebar-item").removeClass("active");
  }
  });
  });

});