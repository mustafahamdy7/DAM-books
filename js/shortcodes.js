$(function($) {
    'use strict'
    

	var carouselOwl = function() {
		if ( $().owlCarousel ) {
			$('.wprt-carousel-box').each(function() {
			 	var $this = $(this),
			 	auto = $this.data('auto'),
			 	item = $this.data('column'),
			 	item2 = $this.data('column2'),
			 	item3 = $this.data('column3'),
			 	gap = Number($this.data("gap"));

			 	$this.find('.owl-carousel').owlCarousel({
				    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    dots: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
				    }
				});

			});
		}
	};

    var projectOwl = function() {
        if ( $().owlCarousel ) {
            $('.wprt-project').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var partnerOwl = function() {
        if ( $().owlCarousel ) {
            $('.wprt-partner').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                loop = $this.data("loop"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: loop,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var progressBar = function() {
        if ( $().waypoint ) {
            $('.progress-bar').on('on-appear', function() {
                $(this).each(function() {
                    var percent = parseInt($(this).data('percent'));

                    $(this).find('.progress-animate').animate({
                        "width": percent + '%'
                    },1000, "easeInCirc");

                    $(this).parent('.wprt-progress').find('.perc').addClass('show').animate({
                        "width": percent + '%'
                    },1000, "easeInCirc");
                });
            });
        }
    };

    var counter = function() {
        if ( $().countTo ) {
            $('.wprt-counter').on('on-appear', function() {
                $(this).find('.numb-count').each(function() {
                    var to = parseInt( $(this).data('to'), 10 ),
                        speed = parseInt( $(this).data('speed'), 10 );
                        
                    $(this).countTo({
                        to: to,
                        speen: speed
                    });
                });
            });
        }
    };

    var parrallax = function() {
        var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
        /*
         * Please note that background attachment fixed doesn't work on iOS
         */ 
        if (!iOS) {
            $('.parallax').css({backgroundAttachment:'fixed'});
        } else {
            $('.parallax').css({backgroundAttachment:'scroll'});
        }

        if ( $().parallax && matchMedia( 'only screen and (min-width: 867px)' ).matches ) {
            $('.facts').parallax("50%", 0.6);  
            $('.row-project-1').parallax("50%", 0.6);               
        }
    };

    var popupImage = function() {
        if ( $().magnificPopup ) {
            $('.row-project-1, .wprt-galleries, .wprt-project, .wprt-project-grid, .wprt-portfolio-slider, .wprt-image-slider').each(function () {
                $(this).find('.zoom-popup').magnificPopup({
                      type: 'image',
                      gallery:{
                        enabled: true
                    },
                      removalDelay: 500, //delay removal by X to allow out-animation
                      callbacks: {
                        beforeOpen: function() {
                          // just a hack that adds mfp-anim class to markup 
                           this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                           this.st.mainClass = this.st.el.attr('data-effect');
                        }
                      },
                      closeOnContentClick: true,
                      midClick: true 
                });
            });
        };
    };

    var popupVideo = function() {
        if ( $().magnificPopup ) {
            $('.popup-video').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">'+
                            '<div class="mfp-close"></div>'+
                            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                          '</div>',

                    srcAction: 'iframe_src',
                }
            });
        };
    };


    var animation = function() {
        $('.wprt-animation-block').each( function() {
            var el = $(this),
            animate = el.data('animate'),
            duration = el.data('duration'),
            delay = el.data('delay'),
            position = el.data('position');

            el.css({
                '-webkit-animation-delay':      delay,
                'animation-delay':              delay,
                '-webkit-animation-duration':   duration,
                'animation-duration':           duration
            });
        
            el.waypoint(function() {
                el.addClass('animated').addClass(animate);
                },{
                    triggerOnce: true,
                    offset: position
            });
        });
    };

    var portfolioCube = function() {
        $('.wprt-project-grid').each(function() {
            var $this = $(this),
                item  = $this.data('column'),
                item2  = $this.data('column2'),
                item3  = $this.data('column3'),
                item4  = $this.data('column4'),
                layout = $this.data("layout"),
                gapH = Number($this.data("gaph")),
                gapV = Number($this.data("gapv"));

                $(this).find('#projects').cubeportfolio({
                    filters: '#project-filter',
                    layoutMode: layout,
                    defaultFilter: '*',
                    animationType: 'quicksand',
                    gapHorizontal: gapH,
                    gapVertical: gapV,
                    showNavigation: true,
                    showPagination: true,
                    gridAdjustment: 'responsive',
                    rewindNav: false,
                    auto: false,
                    mediaQueries: [{
                        width: 1500,
                        cols: item
                    }, {
                        width: 1100,
                        cols: item
                    }, {
                        width: 800,
                        cols: item2
                    }, {
                        width: 550,
                        cols: item3
                    }, {
                        width: 320,
                        cols: item4
                    }],
                    caption: ' ',
                    displayType: 'bottomToTop',
                    displayTypeSpeed: 100
                });
        });
    }

    var galleriesFlex = function() {
        if ( $().flexslider ) {
            $('.wprt-galleries').each(function(){
                var iw = $(this).data("width");
                var im = $(this).data("margin");

                $(this).children('#wprt-carousel').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: iw,
                    itemMargin: im,
                    asNavFor: $(this).children('#wprt-slider')
                });
                $(this).children('#wprt-slider').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    sync: $(this).children('#wprt-carousel')
                });
            });
        }
    };

    var imagesOwl = function() {
        if ( $().owlCarousel ) {
            $('.wprt-portfolio-slider').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var portfolioOwl = function() {
        if ( $().owlCarousel ) {
            $('.wprt-image-slider').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var toggles = function() {
        var args = {easing:'easeOutExpo', duration:300};

        $('.toggle-item.active').find('.toggle-content').show();
        $('.toggle-heading').on('click', function () {
            if ( !$(this).parent().is('.active') ) {
                $(this).parent().toggleClass('active')
                    .children('.toggle-content').slideToggle(args)
                .parent().siblings('.active').removeClass('active')
                    .children('.toggle-content').slideToggle(args);
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var tabs = function() {
        $('.wprt-tabs').each(function() {

            $(this).find('ul li').first().addClass('active');
            $(this).children('.tab-content').first().addClass('active').show();

            $(this).find('ul li').on('click',function() {
                
                var tabNavIndex = $(this).index();
                var conIndex = $(this).parents('.wprt-tabs').children('.tab-content').eq(tabNavIndex);

                $(this).addClass('active').siblings().removeClass('active');
                conIndex.addClass('active').siblings('.tab-content').removeClass('active');
            });

        });
    };

    var googleMap =  function() {
        if ( $().gmap3 ) {
            $('.gmap').each(function() {
                var $this = $(this),
                lat = $this.data('lat'),
                lng = $this.data('lng'),
                icon = $this.data('icon'),
                zoom = $this.data('zoom'),
                scrollwheel = $this.data('scrollwheel'),
                center = [lat, lng];

                $this.gmap3({
                    center: center,
                    zoom: zoom,
                    scrollwheel: scrollwheel
                })
                .marker({
                    position: center,
                    icon: icon
                });
            });
        }
    };


    var hereSection =  function() {
        $(window).on('load resize', function(){
            var
            topBarHeight = 0,
            contentTopMargin = 0,
            heroHeight = 0,
            topBar = $('#top-bar'),
            hero = $('.hero-section'),
            windowHeight = $(window).height(),
            headerHeight = $('#site-header').height(),
            heroContent = hero.find('.hero-content'),
            contentHeight = heroContent.height();

            if ( topBar.length )
                topBarHeight = topBar.height();

            if ( $('body').hasClass('header-style-2') ) {
                headerHeight = 0;
                topBarHeight = 0;
            }

            heroHeight = windowHeight - headerHeight - topBarHeight;
            hero.css({ height: heroHeight + "px" });
            
            contentTopMargin = (windowHeight - contentHeight - headerHeight - topBarHeight) / 2;
            heroContent.css("padding-top", contentTopMargin + "px");
        })

        if ( $().vegas ) {
            $(".hero-section.slideshow").each(function() {
                var
                $this = $(this),
                count = $this.data('count'),
                count = parseInt(count,10),
                effect = $this.data('effect'),
                images = $this.data('image'),
                cOverlay = $this.data('overlay'),
                pOverlay = $this.data('poverlay'),
                i = 0,
                slides = [],
                imgs = images.split('|');

                while ( i < count ) {
                    slides.push( {src:imgs[i]} );
                    i++;
                }

                $this.vegas({
                    slides: slides,
                    overlay: true,
                    transition: effect
                });

                var overlay = $('<div />', {
                    class: 'overlay',
                    style: 'background:' + cOverlay
                });

                $(this).append(overlay)
                    .find('.vegas-overlay')
                    .addClass(pOverlay);
            });
        }

        if ( $('.wprt-fancy-text').is('.scroll') ) {
            $('.wprt-fancy-text.scroll').each(function() {
                var
                $this = $(this),
                current = 1,
                height = $this.height(),
                numberDivs = $this.children().length,
                first = $this.children('.heading:nth-child(1)');

                setInterval(function() {
                    var number = current * -height;
                    
                    first.css('margin-top', number + 'px');
                    if ( current === numberDivs ) {
                        first.css('margin-top', '0px');
                        current = 1;
                    } else current++;
                }, 2500);
            });
        }    

        if ( $('.wprt-fancy-text').is('.typing') ) {
            $('.wprt-fancy-text').find('h1 span').typed({
                strings: ["WELCOME", "CONSTRUCTION", "YOUR DREAM HOUSE"],
                typeSpeed: 10,
                loop:true,
                backDelay: 2000
            });
        }  

        if ( $().YTPlayer ) {
            $(".hero-section.video").each(function() {
                var
                $this = $(this),
                cOverlay = $this.data('overlay'),
                overlay = $('<div />', {
                    class: 'overlay',
                    style: 'background:' + cOverlay
                });

                $this.YTPlayer().append(overlay);
            });
        } 
    };

    var fitText =  function() {
        if ( $().fitText ) {
            $('.wprt-fancy-text').each(function(){
                var min = $(this).data("min");
                var max = $(this).data("max");

                $(this).children('.heading').fitText(1.8, {
                    minFontSize: min,
                    maxFontSize: max
                });
            });
        }
    };

    var bgVideo =  function() {
        if ( $().YTPlayer ) {
            $(".hero-section.video").each(function() {
                var
                $this = $(this),
                cOverlay = $this.data('overlay'),
                overlay = $('<div />', {
                    class: 'overlay',
                    style: 'background:' + cOverlay
                });

                $this.YTPlayer().append(overlay);
            });
        }
    };

    var spacer = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 959px)' ).matches )
                mode = 'mobile';

            if ( matchMedia( 'only screen and (max-width: 767px)' ).matches )
                mode = 'smobile';

            $('.wprt-spacer').each(function(){
                if ( mode == 'desktop' ) {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if ( mode == 'mobile' ) {
                    $(this).attr('style', 'height:' + $(this).data('mobi') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobi') + 'px')
                }
            })

        });
    };

    var inViewport =  function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    // Dome Ready
   $(function() {
        carouselOwl();
        projectOwl();
        partnerOwl();
        progressBar();
        counter();
        parrallax();
        popupImage();
        popupVideo();
        animation();
        portfolioCube();
        galleriesFlex(); 
        portfolioOwl();
        imagesOwl();       
        toggles();
        tabs();
        googleMap();
        hereSection();
        fitText();
        bgVideo();
        spacer();
        inViewport();
   });
});