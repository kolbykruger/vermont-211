//LINK KILLER -- Remove after Homepage Design Approval
$(document).ready(function () {
    $('a').click(function (e) {
        e.preventDefault()
    })
})

//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function () {
        if (this.elem) {
            this.elem.addEventListener('change', function (e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            })
        }
    },
}.init()

//Populate Blog Category select
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=')

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
        }
    }
    return false
}
var blogCat = getUrlParameter('category')
if (blogCat) {
    $('#blog_categories').val(blogCat)
} else {
    $('#blog_categories').val($('#blog_categories option:first').val())
}

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>')

//Accordion
document.addEventListener('DOMContentLoaded', function () {
    let accordion = document.querySelectorAll('.accordion-title')

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            let panel = this.nextElementSibling

            if (panel.style.maxHeight) {
                this.classList.remove('open')
                panel.style.maxHeight = null
                panel.setAttribute('aria-hidden', true)
                panel.setAttribute('aria-expanded', false)
            } else {
                this.classList.add('open')
                panel.style.maxHeight = panel.scrollHeight + 'px'
                panel.setAttribute('aria-hidden', false)
                panel.setAttribute('aria-expanded', true)
            }
        })
    }
})

//Flickity Carousel
$('.impression .images').flickity({
    cellSelector: '.cover',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 8000,
})

$('.slideshow .container').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 5000,
})

$('.brand-slider-rail').flickity({
    cellSelector: '.brand-item',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: true,
    pageDots: false,
    imagesLoaded: true,
    autoPlay: 5000,
})

//Universal Tables
$('table').wrap("<div class='universal-table'></div>")

//PDO Page loader
document.addEventListener('DOMContentLoaded', function () {
    let pdoElement = document.getElementById('pdopage')
    if (pdoElement) {
        let loadState = document.createElement('div')
        loadState.classList.add('pdo-loader')
        loadState.setAttribute('aria-hidden', true)
        //loadState.textContent = 'Loading';

        pdoElement.appendChild(loadState)

        if (pdoPage) {
            pdoPage.callbacks['before'] = function (config) {
                document.querySelector('.pdo-loader').classList.add('pdo-loading')
            }
            pdoPage.callbacks['after'] = function (config) {
                document.querySelector('.pdo-loader').classList.remove('pdo-loading')
            }
        }
    }
})
