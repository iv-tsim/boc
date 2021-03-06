$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

    let barWidth = 100;

    if ($(window).width() >= 1630) {
        barWidth = 800;
    } else if ($(window).width() >= 1400) {
        barWidth = $(window).width() / 2 - 15;
    } else {
        barWidth = $(window).width() - 30;
    }

    $('.fifty-price__input').jRange({
        from: 0,
        to: 100,
        step: 1,
        scale: [0, 25, 50, 75, 100],
        width: barWidth,
        showLabels: true,
        snap: true
    });

});

(function() {

    document.addEventListener('DOMContentLoaded', function() {
        let heroTextSlider = new Swiper('.hero-text', {

            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerGroup: 1,
            allowTouchMove: false

        });
        let sliderImg = new Swiper('.slider-img', {
            
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                nextEl: '.slider-arrow.slider-arrow_next.slider-arrow__real',
                prevEl: '.slider-arrow.slider-arrow_prev.slider-arrow__real',
            },
            breakpoints: {
                1630: {
                    slidesPerView: 2,
                    spaceBetween: 140
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }

        });
        let lookSlider = new Swiper('.look-slider', {

            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            loop: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                nextEl: '.slider-arrow.slider-arrow_next.look-arrow',
                prevEl: '.slider-arrow.slider-arrow_prev.look-arrow',
            }

        });
        let lheroSlider = new Swiper('.lhero-slider', {

            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            loop: true,
            effect: 'fade',
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                nextEl: '.slider-arrow.slider-arrow_next.lhero-arrow',
                prevEl: '.slider-arrow.slider-arrow_prev.lhero-arrow',
            }

        });
        let heroImgSlider = new Swiper('.hero-img', {

            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            loop: true,
            observeParents: true,
            effect: 'fade',
            touchEventsTarget: 'wrapper',
            autoplay: {
                delay: 3500,
            },
            navigation: {
                nextEl: '.slider-arrow.slider-arrow_next.hero-arrow',
                prevEl: '.slider-arrow.slider-arrow_prev.hero-arrow',
            },
            on: {
                slideChange() {

                    heroTextSlider.slideTo(this.realIndex);

                }
            }

        });
        const burger = document.querySelector('.header-burger');
        const menu = document.querySelector('.menu');
        const menuClose = document.querySelector('.menu-close');
        document.addEventListener('click', function(event) {
            const { target } = event;
    
            if (!target.closest('.menu') && menu.classList.contains('active') && !target.closest('.header-burger')) {
                event.preventDefault();
    
                menu.classList.remove('active');
            }
        });
    
        burger.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
        menuClose.addEventListener('click', function() {
            menu.classList.remove('active');
        });

        if (document.querySelector('div#map')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [59.2187191005832,39.833473499999975],
                    zoom: 14
                });
                
                var myPlacemark = new ymaps.Placemark([59.2187191005832,39.833473499999975], {
                    hintContent: '??. ??????????????, ????. ??????????????????????????????, ??. 145, ????. 345',
                    balloonContent: '??. ??????????????, ????. ??????????????????????????????, ??. 145, ????. 345'
                },
                {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image',
                    iconImageHref: '../img/general/mark.svg',
                    iconImageSize: [35, 49],
                    iconImageOffset: [-19, -52]
                });
    
                myMap.geoObjects.add(myPlacemark);
    
                myMap.controls
                    .remove('geolocationControl')
                    .remove('fullscreenControl')
                    .remove('typeSelector')
                    .remove('searchControl')
                    .remove('trafficControl')
                    .remove('zoomControl')
                    .remove('rulerControl');
    
                myMap.behaviors.disable([
                    'scrollZoom',
                    'dblClickZoom'
                ]);
            });
        }

        document.addEventListener(
            'wpcf7mailsent',
            function (event) {
                alertify.success(event.detail.apiResponse.message);
            },
            false
        );

        document.addEventListener(
            'wpcf7invalid',
            function (event) {
                alertify.warning(event.detail.apiResponse.message);
            },
            false
        );

        document.addEventListener(
            'wpcf7mailfailed',
            function (event) {
                alertify.error(event.detail.apiResponse.message);
            },
            false
        );
    });

})()