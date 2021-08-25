$(document).ready(function() {

    if($('.slider').length) {
        $('.slider').slick({
            dots: true,
            arrows: false,            
            customPaging : function(slider, i) {
                return '<svg class="dots-svg" width="42" height="42" viewport="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle id="bar" r="20" cx="21" cy="21" fill="none" stroke-dasharray="140" stroke-dashoffset="140" stroke="white" stroke-width="2"></circle></svg><span>'+ (i + 1) +'</span>';
            },
            autoplay: true,
            autoplaySpeed: 6000,
            appendDots: $('.slider-pag').find('.dots'),
        });
    }

    //карта на странице О нас
    if($('.contacts').length) {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                center: [54.22239007041141,45.159485999999916],
                controls: [],                
                zoom: 17
            });

            var myPlacemark = new ymaps.Placemark([54.22239007041141,45.159485999999916], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/map.png',
                iconImageSize: [48, 57],
                iconImageOffset: [-30, -40]
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    }

    //Открытие/скрытие городов в шапке
    

    //десктопное меню
    // $('.header__menu .header__menu-drop').click(function () {
    //     $(this).toggleClass('active').next().slideToggle();
    // });

    //Мобильное меню

    // if (window.innerWidth <= 992) {
    //     let desktopMenu = $('.header__menu');
    //     let headerIcons = $('.header__wrap .icons');
    //     let mobileMenuClose = document.createElement('div');
    //     let mobileMenuCloseSvg = $('.header__wrap .form.small .form__close svg');
    //     let mobileMenu = document.createElement('div');
    //     let mobileMenuContent = document.createElement('div');
        
    //     $(mobileMenu).addClass('mobile-menu').appendTo('.header__wrap');
    //     $(mobileMenuContent).addClass('mobile-menu__content').appendTo('.mobile-menu');
    //     $(mobileMenuClose).addClass('mobile-menu__close').appendTo('.mobile-menu__content');
    //     mobileMenuCloseSvg.clone().appendTo('.mobile-menu__close')
    //     desktopMenu.detach().appendTo('.mobile-menu__content');
    //     headerIcons.detach().appendTo('.mobile-menu__content');
        
    // }

    //Открытие/закрытие мобильного меню
    // $('.burger').click(function() {
    //     $('body').addClass('opacity-layer no-scroll');
    //     $('.mobile-menu').show("slide", { direction: "right" }, 500);
    // });

    // $('.mobile-menu__close').click(function() {
    //     $('body').removeClass('opacity-layer');
    //     $('.mobile-menu').hide("slide", { direction: "right" }, 500);
    // })

    
    //одинаковая высота новостей
    // if($('.news').length) {
    //     $('.news .news__item .news__item-content').matchHeight();
    // };

    // if($('.opportunities').length) {
    //     $('.opportunities .opportunities__item .opportunities__item-name').matchHeight();
    // };

    // if($('#map').length) {
    //     ymaps.ready(init);
    //     function init(){
    //         // Создание карты.
    //         var myMap = new ymaps.Map("map", {
    //             center: [59.85120307488966,30.30813975396727],
    //             controls: ['geolocationControl'],                
    //             zoom: 16
    //         });

    //         var myPlacemark = new ymaps.Placemark([59.85120307488966,30.30813975396727], {}, {
    //             iconLayout: 'default#image',
    //             iconImageHref: 'img/icons/map-marker.png',
    //             iconImageSize: [55, 57],
    //             iconImageOffset: [-28, -45]
    //         });

    //         myMap.geoObjects.add(myPlacemark);
    //     }
    // };

    

    //прикрепление файла
    // $('.form__file input').on('change', function(e) {
    //     let filename = $(this)[0].files[0].name;

    //     $(this).siblings('.name').text(filename);
        
    //   })
});
