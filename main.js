var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

function start() {
    stickyHeader()
    navbarActive()
    handleMobileNav()
    clickAccordion()
    clickAccordionItem()
}

start()

function stickyHeader() {
    window.addEventListener("scroll", function () {
        var header = $("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
}

function navbarActive() {
    var headerNavElements = $$('.header__navbar-item-link')
    for(var i = 0; i < headerNavElements.length; i++) {
        headerNavElements[i].onclick = function() {
            $('.header__navbar-item-link.navbar-active').classList.remove('navbar-active')
    
            this.classList.add('navbar-active')
        }
    }
}

function handleMobileNav() {
    var navbarButton = $('.header__navbar-icon')
    var navbarMobile = $('.navbar-on-mobile')
    var closeMobileButton = $('.close-btn-mobile')
    var headerOverlay = $('.header__overlay')
    
    function showNav() {
        navbarMobile.classList.add('show-navbar-on-mobile')
    }
    
    function hiddenNav() {
        navbarMobile.classList.remove('show-navbar-on-mobile')
    }
    
    function showOverlay() {
        headerOverlay.classList.add('show-overlay')
    }
    
    function hiddenOverlay() {
        headerOverlay.classList.remove('show-overlay')
    }
    
    function showcloseBtn() {
        closeMobileButton.classList.add('show-close-btn')
    }
    
    function hiddencloseBtn() {
        closeMobileButton.classList.remove('show-close-btn')
    }
    
    navbarButton.addEventListener('click', showNav)
    navbarButton.addEventListener('click', showOverlay)
    navbarButton.addEventListener('click', showcloseBtn)
    closeMobileButton.addEventListener('click', hiddenNav)
    closeMobileButton.addEventListener('click', hiddenOverlay)
    closeMobileButton.addEventListener('click', hiddencloseBtn)
    headerOverlay.addEventListener('click', hiddenNav)
    headerOverlay.addEventListener('click', hiddenOverlay)
    headerOverlay.addEventListener('click', hiddencloseBtn)
}

function clickAccordionItem() {
    var accordionItem = $$('.accordion-title')
    for(var i = 0; i < accordionItem.length; i++){
        accordionItem[i].onclick = function() {
            var panel = this.nextElementSibling
            panel.classList.toggle('show-dropDown')
            if(panel.classList.contains('show-dropDown')) {
                this.classList.add('accordion-title--active')
            }
            else {
                this.classList.remove('accordion-title--active')
            }
        }
    }
}

function clickAccordion() {
    var askQuestionLinks = $$('.ask__section-link')
    var accordionItem = $$('.accordion')
    
    askQuestionLinks.forEach(function(askQuestionLink, index) {
    
        var accordion = accordionItem[index]
    
        askQuestionLink.onclick = function() {
    
            $('.ask__section-link.ask__section-active').classList.remove('ask__section-active')
            $('.accordion.accordion-active').classList.remove('accordion-active')
    
            this.classList.add('ask__section-active')
            accordion.classList.add('accordion-active')
        }
    })
}






 



