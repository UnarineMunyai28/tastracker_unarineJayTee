class Scrollbar {
    static init() {
        const scrollbar = document.getElementById('scrollbar');
        const mainContent = document.querySelector('.main-content');

        mainContent.addEventListener('scroll', () => {
            const scrollPosition = mainContent.scrollTop;
            const maxScrollPosition = mainContent.scrollHeight - mainContent.offsetHeight;
            const scrollbarPosition = (scrollPosition / maxScrollPosition) * 100;
            scrollbar.style.top = `${scrollbarPosition}%`;
        });
    }
}

Scrollbar.init();
