$(document).ready(function() {

    if($('.slider').length) {
        $('.slider').slick({
            dots: true,
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,            
            customPaging : function(slider, i) {
                return '<svg class="dots-svg" width="42" height="42" viewport="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle id="bar" r="20" cx="21" cy="21" fill="none" stroke-dasharray="140" stroke-dashoffset="140" stroke="white" stroke-width="2"></circle></svg><span></span>';
            },
            autoplay: true,
            autoplaySpeed: 6000,
            appendDots: $('.slider-pag').find('.dots'),
        });

        $('.arrow.prev').click(function () {
            $('.slider').slick('slickPrev');
        })
          
        $('.arrow.next').click(function(){
            $('.slider').slick('slickNext');
        })
    }

    //карта на странице О нас
    if($('.contacts').length) {
        ymaps.ready(init);
        function init(){
            var map = $('#map');
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                center: [map.data("coordx"), map.data("coordy")],
                controls: [],                
                zoom: 17
            });

            var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/map.png',
                iconImageSize: [48, 57],
                iconImageOffset: [-30, -40]
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    }

    //десктопное меню
    $('.header__menu .header__menu-drop').click(function () {
        $('.header__menu .header__menu-drop').not($(this)).removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideToggle();
    });

    $('body').click(function(e) {
        let target = e.target;
        
        if ($(target).hasClass('opacity-layer') && $('.mobile-menu').css('display') == 'block') {
            $('body').removeClass('opacity-layer');
            $('.mobile-menu').hide("slide", { direction: "right" }, 500);
        }
       
        
        
    })

    //Мобильное меню
    if (window.innerWidth <= 992) {
        let desktopMenu = $('.header__menu');
        let headerContacts = $('.header__wrap .header__contacts');
        let mobileMenuClose = document.createElement('div');
        let mobileMenu = document.createElement('div');
        let mobileMenuContent = document.createElement('div');
        
        $(mobileMenu).addClass('mobile-menu').appendTo('.header__wrap');
        $(mobileMenuContent).addClass('mobile-menu__content').appendTo('.mobile-menu');
        $(mobileMenuClose).addClass('mobile-menu__close').appendTo('.mobile-menu__content');
        desktopMenu.detach().appendTo('.mobile-menu__content');
        headerContacts.detach().appendTo('.mobile-menu__content');
        
    }

    //Открытие/закрытие мобильного меню
    $('.burger').click(function() {
        $('body').addClass('opacity-layer no-scroll');
        $('.mobile-menu').show("slide", { direction: "right" }, 500);
    });

    $('.mobile-menu__close').click(function() {
        $('body').removeClass('opacity-layer no-scroll');
        $('.mobile-menu').hide("slide", { direction: "right" }, 500);
    });

    //слайдер партнеров
    if($('.partners').length) {
        $('.partners__slider').slick({
            slidesToShow: 6,
            arrows: true,
            infinite: true,

            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
});
