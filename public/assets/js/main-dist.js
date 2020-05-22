// const $ = require('jquery');
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

/* ---------------------------------------
VIEWPORT FUNCTION
----------------------------------------*/
function viewport() {
    var _ua = (function(u) {
        return {
            Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
                u.indexOf("ipad") != -1 ||
                (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
                (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
                u.indexOf("kindle") != -1 ||
                u.indexOf("silk") != -1 ||
                u.indexOf("playbook") != -1,
            Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
                u.indexOf("iphone") != -1 ||
                u.indexOf("ipod") != -1 ||
                (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
                (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
                u.indexOf("blackberry") != -1
        }
    })(window.navigator.userAgent.toLowerCase());

    if (_ua.Mobile) {
        // Tablet to show scale 0.4x desktop version
        $("meta[name='viewport']").attr('content', 'width=768, initial-scale=0.4');
    }

    if (_ua.Tablet) {
        // Tablet to show scale 0.7x desktop version
        $("meta[name='viewport']").attr('content', 'width=1050, initial-scale=0.7,maximum-scale=1.0,user-scalable=no');
    }
}

/* ---------------------------------------
SWIPER FUNCTION
----------------------------------------*/
function loadSwiper() {
    var swiper = new Swiper('.slider', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }
    });
}

/* ---------------------------------------
SCROLL TO FUNCTION 
---------
TO USE:
Add attribute data-scroll="#anchorname" to button.
Add attribute id=#anchorname" to object/content to scroll to.
----------------------------------------*/
function scroll() {
    let link = document.querySelectorAll('[data-scroll^="#"]');
    
    for(var i=0;i<link.length;i++) {
        link[i].addEventListener('click', function(e) {
            e.preventDefault();
            let value = this.getAttribute('data-scroll');
            let target = document.getElementById(value);
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

/* ---------------------------------------
ACCORDION FUNCTION 
---------
TO USE:
Add attribute data-accord="#anchorname" to button.
Add attribute id=#anchorname" to object/content to open.
----------------------------------------*/

function accordion() {
    let link = document.querySelectorAll('[data-accord^="#"]');

    for(var i=0;i<link.length;i++) {
        link[i].addEventListener('click', function(e) {
            e.preventDefault();
            let value = this.getAttribute('data-accord');
            let target = document.getElementById(value);
            target.classList.toggle('isOpen');
        });
    }
}

/* ---------------------------------------
HOVER SUB-MENU
---------
TO USE:
Add attribute data-menu="#anchorname" to button.
Add attribute id=#anchorname" to submenu to to open.
----------------------------------------*/
function submenu() {
    let link = document.querySelectorAll('[data-menu^="#"]');
    
    for(var i=0;i<link.length;i++) {
        // When mouse enters, shows...
        link[i].addEventListener('mouseover', function(e) {
            e.preventDefault();
            let value = this.getAttribute('data-menu');
            let target = document.getElementById(value);
            target.classList.add('isOpen');
        });

        // When mouse exit, hides...
        link[i].addEventListener('mouseout', function(e) {
            let value = this.getAttribute('data-menu');
            let target = document.getElementById(value);
            target.classList.remove('isOpen');
        });
    }
}

/* ---------------------------------------
MULTI MENU FUNCTION 
---------
TO USE:
Add attribute data-menu="#anchorname" to button.
Add attribute class=".menu__container" to object/content to allow closing.
Add attribute id=#anchorname" to object/content to allow opening.
----------------------------------------*/
function menu() {
    let link = document.querySelectorAll('[data-menu^="#"]');
    let menuitem = document.querySelectorAll('.menu__container');

    for(let i=0;i<link.length;i++) {
        link[i].addEventListener('mouseover', function(e) {
            this.classList.add('is__open');
            let value = this.getAttribute('data-menu');
            let target = document.getElementById(value);
            target.classList.add('is__active');
        });

        link[i].addEventListener('mouseleave', function(e) {
            this.classList.remove('is__open');
            for(let i=0;i<menuitem.length;i++) {
                menuitem[i].classList.remove('is__active');
            }
        });
    }
}

/* ---------------------------------------
SCROLL TO FUNCTION 
---------
TO USE:
Add attribute data-scroll="#anchorname" to button.
Add attribute id=#anchorname" to object/content to scroll to.
----------------------------------------*/
function scroll() {
    onLoadScroll();

    let link = document.querySelectorAll('[data-scroll^="#"]');
    
    for(var i=0;i<link.length;i++) {
        link[i].addEventListener('click', function(e) {
            let redirectValue = 0;
            let value = this.getAttribute('data-scroll');
            let target = document.getElementById(value);

            if(this.getAttribute('data-redirect') != null) {
                redirectValue = this.getAttribute('data-redirect');
            }

            if(redirectValue != 0) {
                window.location.href = redirectValue;
            }
            else {
                e.preventDefault();
                if(target != null) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

/* ---------------------------------------
ON LOAD SCROLL TO FUNCTION 
---------
TO USE:
Add attribute data-redirect="../#id" to button.
----------------------------------------*/
function onLoadScroll() {
    // If there is # in URL, loads
    if(window.location.href.indexOf("#") > -1) {
        let value = window.location.href, scrollValue, target;
        // Splits the URL and take the characters after #.
        scrollValue = '#' + value.split('#')[1];
        target = document.getElementById(scrollValue);

        if(target != null) {
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove hash value without load.
            let newURL = value.substring(0, value.indexOf('#'));
            history.pushState({}, null, newURL);
        }

    }
}

/* ---------------------------------------
SCROLL TO ELEMENT ANIMATION FUNCTION 
---------
TO USE:
Add attribute data-sv="[type-of-animation]" to element.

----------------------------------------*/
function scrollToVis() {
    // Get actual position of body element.
    let bodyRect = document.body.getBoundingClientRect();

    // Detects for Window size changes.
    window.addEventListener("resize", function() {
        bodyRect = document.body.getBoundingClientRect();
    });

    // Elements to be scrolled in.
    let elementsToAnimate = document.querySelectorAll('[data-sv]');
    let itemList = [];

    // Register each elements location and detection.
    for(let i=0; i < elementsToAnimate.length; i++) {
        let currLocation = elementsToAnimate[i].getBoundingClientRect();
        let itemLocation = currLocation.top - bodyRect.top;
        itemList.push([currLocation.top - bodyRect.top, elementsToAnimate[i]]);
    }

    // Check registered elements.
    // console.table(itemList);

    // On Load, Animations
    window.addEventListener('load', function(e){
        let element = document.getElementById('test');
        let elemRect = element.getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;
        for(let x = 0; x < itemList.length; x++) {
            if(itemList[x][0] < offset) {
                let typeOfAnimation = itemList[x][1].getAttribute('data-sv');
                itemList[x][1].classList.add(typeOfAnimation);
            }
        }
    });

    // Gets current detection line location.
    window.addEventListener('scroll', function(e){
        let element = document.getElementById('test');
        let elemRect = element.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;
        // console.log('Detection Line is ' + offset + ' vertical pixels from <body>');
      
        // If detection line touches per itemList element item.
        for(let x = 0; x < itemList.length; x++) {
            if(offset >= itemList[x][0]) {
                let typeOfAnimation = itemList[x][1].getAttribute('data-sv');
                itemList[x][1].classList.add(typeOfAnimation);
            }
        }
    });
}

function modal() {
    let link = document.querySelectorAll('[data-modal^="#"]');
    let modal = document.getElementById('modal');
    let close = document.getElementById('close');

    for(let i=0;i<link.length;i++) {
        link[i].addEventListener('click', function(e) {
            modal.classList.add('is__active');
            let value = this.getAttribute('data-modal');
            let target = document.getElementById(value);
            target.classList.add('is__active');
        });
    }

    close.addEventListener('click', function() {
        modal.classList.remove('is__active');
        for(let i=0;i<link.length;i++) {
            link[i].classList.remove('is__active');
        }
    });
}

/* ---------------------------------------
EVENT HANDLER: ON READY
----------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    scroll();
    accordion();
    submenu();
});

/* ---------------------------------------
EVENT HANDLER: ON READY
----------------------------------------*/
// $(function () {
// scrollTo();
// viewport();
// loadSwiper();
// });

/* ---------------------------------------
SCROLL TO FUNCTION (JQUERY)
----------------------------------------*/
// function scroll() {
//   $('a[href^="#"]').click(function () {
//     var href = $(this).attr("href");

//     // Contains a specific class or id, that should not be scrolled to
//     if (!$(this).hasClass('no_default')) {
//         var target = $(href == "#" || href == "" ? 'html' : href);
//         var position = target.offset().top;
//         $('html, body').stop().animate({
//           scrollTop: position
//         }, 500, 'swing');
//     }
//     // Contains a #ID, simply scroll to content
//     else {
//         var target = $(href == "#" || href == "" ? 'html' : href);
//         var position = target.offset().top;
//         $('html, body').stop().animate({
//           scrollTop: position
//         }, 500, 'swing');
//     }

//     return false;
//   });
// }

/* ---------------------------------------
SCROLL TO FUNCTION 
----------------------------------------*/
// function scroll() {
//     let link = document.querySelectorAll('[data-scroll^="#"]');
//         // ES6
//         // link.forEach(function(elem) {
//         //     elem.addEventListener('click', function(e) {
//         //         let value = elem.getAttribute('data-scroll');
//         //         let target = document.getElementById(value);
//         //         target.scrollIntoView({
//         //             behavior: 'smooth'
//         //         });
//         //     });
//         // });
// }
//# sourceMappingURL=main-dist.js.map