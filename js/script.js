const cards = $('.articles__card')
const qr = $('.about-card__img').click(zoomQR)
const dark = $('.dark-bg').hide()
const mobileNavBtn = $('.mobile-nav__btn').click(toggleMobileNav).siblings().hide()

// наведение на карточку

cards.mouseover(function() {
    if (window.screen.width > 480) {
        $(this).css('scale', '1.02')
    }
})

// покидание карточки

cards.mouseout(function() {
    $(this).css('scale', '1', 500)
})

dark.click(function() {
    $('.copyQR').remove()
    $('body').css({'overflow':'auto'});
    dark.fadeOut(500)
})

function zoomQR() {
    if (!$('.copyQR').length) {
        let copyQR = qr.parent().clone()
        copyQR.addClass('copyQR')
        copyQR.click(zoomQR)
        $('body').append(copyQR)
        copyQR.toggleClass('open')
        $('body').css({'overflow':'hidden'});
    } else {
        $('.copyQR').remove()
        $('body').css({'overflow':'auto'});
    }
    dark.fadeToggle(500)
}

// мобильная навигация

function toggleMobileNav() {
    $('.mobile-nav__btn').siblings().slideToggle(500)
}

document.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(document.querySelector('.mobile-nav__btn'));
	if (!withinBoundaries) {
		$('.mobile-nav__btn').siblings().slideUp()
	}
})