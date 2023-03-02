$(function() {
  // your code
  var window = $(window);

$("#cart").on("click", function() {
  $(".shopping-cart").fadeToggle( "fast");
});

$('.btn-minuse').on('click', function(){            
  $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
})

$('.btn-pluss').on('click', function(){            
  $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
})


/*$(".btn-wish").click(function() {
  $('.heart.fa').toggleClass('red');
  $('.heart.fa').toggleClass("fa-heart fa-heart-o");
});*/

$('.recent-product-slider .btn-wish.active img').attr('src', 'assets/images/wishactive.png');

var count = 0;
$( ".btn-wish" ).each(function() {
  var $wishbtn = $( this );
  var count = 0;
  $wishbtn.click(function() {
    count++;
    $wishbtn.toggleClass( "red" );
    $($wishbtn).children().toggleClass("fa-heart fa-heart-o");
  });
});

$('.btn-wish.addfavbtn').click(function(){
  $('.product-carousel .slick-slide .btn-wish').toggleClass("red");
  $('.slidefavbtn').children().toggleClass("fa-heart fa-heart-o");
});
 
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
          slidesToShow: 1,
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
          slidesToShow: 1,
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
          slidesToShow: 1,
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




$(function() { 
    $('.product-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      asNavFor: '.product-carousel-thumbs',
    });
    $('.product-carousel-thumbs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.product-carousel',
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      infinite: false,
    });   
    
    $(".product-carousel-thumbs .slick-list").height( $(".product-carousel span").height() );

    // Share Button

    $('.favourite-share ul li:last-child a').click(function(){
      $('#shareBlock').fadeToggle();
    });

});


function readmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("morebtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less"; 
    moreText.style.display = "inline";
  }
}

 


$(function(){
    
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  
  $(".next").on("click", function(){
      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show(); 
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              next_fs.css({'opacity': opacity});
          }, 
          duration: 600
      });
  });
  
  $(".previous").on("click", function(){
      
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show();
  
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              previous_fs.css({'opacity': opacity});
          }, 
          duration: 600
      });
  });
  
  $('.radio-group .radio').on("click", function(){
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
  });
  
  $(".submit").on("click", function(){
      return false;
      //window.location.href = "http://stackoverflow.com";
  })
      
  });