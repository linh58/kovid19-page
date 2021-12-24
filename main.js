const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function start() {
    stickyHeader()
    handleMobileNav()
    clickAccordion()
    clickAccordionItem()
    navbarScrollActive()
}

start()

function stickyHeader() {
    window.addEventListener("scroll", function () {
        const header = $("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
}

function handleMobileNav() {
    const navbarButton = $('.header__navbar-icon')
    const navbarMobile = $('.navbar-on-mobile')
    const closeMobileButton = $('.close-btn-mobile')
    const headerOverlay = $('.header__overlay')
    
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
    const accordionItem = $$('.accordion-title')
    for(var i = 0; i < accordionItem.length; i++){
        accordionItem[i].onclick = function() {
            const panel = this.nextElementSibling
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
    const askQuestionLinks = $$('.ask__section-link')
    const accordionItem = $$('.accordion')
    
    askQuestionLinks.forEach(function(askQuestionLink, index) {
    
        const accordion = accordionItem[index]
    
        askQuestionLink.onclick = function() {
    
            $('.ask__section-link.ask__section-active').classList.remove('ask__section-active')
            $('.accordion.accordion-active').classList.remove('accordion-active')
    
            this.classList.add('ask__section-active')
            accordion.classList.add('accordion-active')
        }
    })
}

function navbarScrollActive() {
    const sections = $$('section')
    const navbarItems = $$('.header__navbar-item-link')

    window.addEventListener('scroll', () => {
        let current = ''
        sections.forEach(section => {
            const sectionTop = section.offsetTop 
            const sectionHeight = section.clientHeight
            
            if(scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id')
            }
        })
        navbarItems.forEach(navbarItem => {
            navbarItem.classList.remove('navbar-active')
            if(navbarItem.classList.contains(current)) {
                navbarItem.classList.add('navbar-active')
            }
        })
    })
}






 



