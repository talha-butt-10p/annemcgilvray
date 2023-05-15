var $jQ = jQuery.noConflict();

$jQ(function(){

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

  $jQ('#profile-items a[href^="#"]').on('click', function(){
    $jQ(this).addClass('active');
    $jQ(this).parent().siblings().find('a').removeClass('active');

    var the_id = $(this).attr("href");
    if (the_id === '#') {
      return;
    }  
  });

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
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
     
  $jQ('.radio-group .radio').on("click", function(){
    $jQ(this).parent().find('.radio').removeClass('selected');
    $jQ(this).addClass('selected');
  });
  
  });
 
  