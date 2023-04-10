var $jQ = jQuery.noConflict();

$jQ(function() {

  // your code
  var window = $jQ(window);

  $jQ("#cart").on("click", function() {
    $jQ(".shopping-cart").fadeToggle( "fast");
  });

  $jQ('.btn-minuse').on('click', function(){            
    $jQ(this).parent().siblings('input').val(parseInt($jQ(this).parent().siblings('input').val()) - 1)
  });

  $jQ('.btn-pluss').on('click', function(){            
    $jQ(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
  });

  /*$(".btn-wish").click(function() {
    $('.heart.fa').toggleClass('red');
    $('.heart.fa').toggleClass("fa-heart fa-heart-o");
  });*/

  $jQ('#profile-items a[href^="#"]').on('click', function(){
    $jQ(this).addClass('active');
    $jQ(this).parent().siblings().find('a').removeClass('active');

    var the_id = $(this).attr("href");
    if (the_id === '#') {
      return;
    }  
  });

  //$jQ('.recent-product-slider .btn-wish.active img').attr('src', 'assets/images/wishactive.png');

  
// $(".hero-left").height( $(".hero-right").height() );

//Home Page Recent View Slider
  $jQ('.recent-product-slider').slick({
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

  $jQ('.product-cat-outer').slick({
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

  $jQ('.new-brands-wrapper').slick({
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

  $jQ('.brandforyou-wrapper').slick({
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

  $jQ('.brows-collect-wrapper').slick({
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

  $jQ('.career-slides').slick({
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

  $jQ('.about-slides').slick({
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

  /*var height = Math.max($jQ(".left-col").height(), $jQ(".right-col").height());
  $jQ(".left-col").height(height);
  $jQ(".right-col").height(height);*/

  $jQ('.mobile-filter-option a').on('click',function(e){
    $jQ('.brand-filters-cards .filter-group').slideToggle('slow');
  });
});


//Home Page Page wish btn active
$jQ(function() {
  $jQ(".recent-product-slider .btn-wish").on('click', function() {
     $jQ(this).toggleClass("active");
  });
});

$jQ(function() {
  $jQ("#btn.button_btn").on("click", function(e) {
    $jQ(".button_btn").toggleClass("active");
    $jQ(".sidebar-item").toggleClass("active");
    $jQ(".sidebar").toggleClass("side-bg animated fadeInRight");
    $jQ("html").toggleClass("html-y");
  });

  $jQ(".sidebar-item").on("click", function(e) {
  if ($jQ(e.target).is("#btn.button_btn, .sidebar") === false) {
    $jQ(".sidebar").removeClass("side-bg animated fadeInRight");
    $jQ("#btn.button_btn").removeClass("active");
    $jQ(".sidebar-item").removeClass("active");
  }
  });
});

$jQ(function() { 
    $jQ('.product-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      asNavFor: '.product-carousel-thumbs',
    });
    $jQ('.product-carousel-thumbs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.product-carousel',
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      infinite: false,
    });   
    
    $jQ(".product-carousel-thumbs .slick-list").height( $jQ(".product-carousel span").height() );

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

$jQ(function(){
    
  /*var current_fs, next_fs, previous_fs;
  var opacity;
  
  $jQ(".next").on("click", function(){
      
      current_fs = $jQ(this).parent();
      next_fs = $jQ(this).parent().next();
      
      $jQ("#progressbar li").eq($jQ("fieldset").index(next_fs)).addClass("active");
      
      next_fs.show(); 
      current_fs.animate({opacity: 0}, {
          step: function(now) {
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
  
  $jQ(".previous").on("click", function(){
      
      current_fs = $jQ(this).parent();
      previous_fs = $jQ(this).parent().prev();
      
      $jQ("#progressbar li").eq($jQ("fieldset").index(current_fs)).removeClass("active");
      
      previous_fs.show();
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              previous_fs.css({'opacity': opacity});
          }, 
          duration: 600
      });
  });*/
  
  $jQ('.radio-group .radio').on("click", function(){
    $jQ(this).parent().find('.radio').removeClass('selected');
    $jQ(this).addClass('selected');
  });
  
  /*$jQ(".submit").on("click", function(){
      return false;
  });*/

  /*$jQ('.datepicker').datepicker({
    language: "es",
    autoclose: true,
    format: "dd/mm/yyyy"
  });*/


  // Share Button

  /*$jQ('.favourite-share ul li.share-icon a').on('click', function(){
    $jQ('#shareBlock').fadeToggle();
  });*/
  

  });
 
  /*function signupthanks() {
    window.location.assign("http://localhost:3000/signup-thanks.html")
  }*/