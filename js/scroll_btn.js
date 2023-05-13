const scrollBtn = $('.scroll-btn').hide()

//скрытие/показ кнопки прокрутки
window.addEventListener('scroll', showScrollButton)

//появление и исчезновение кнопки
function showScrollButton() {
    if (window.scrollY > 500) {
        scrollBtn.fadeIn(500)
        scrollBtn.css('pointer-events', 'all')
    } else if (scrollBtn.css('pointer-events') == 'all') {
        scrollBtn.fadeOut(500)
        scrollBtn.css('pointer-events', 'none')
    }  
}

