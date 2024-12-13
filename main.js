document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuItems = document.querySelectorAll('.mobile-menu .menu-item > a');

    // Открытие и закрытие мобильного меню
    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // Открытие/закрытие разделов и обработка клика
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const parent = item.parentElement;
            const dropdown = parent.querySelector('.dropdown');

            if (dropdown) {
                // Если есть подменю, предотвращаем переход по ссылке
                e.preventDefault();
                const isOpen = parent.classList.contains('open');

                // Закрытие всех разделов
                document.querySelectorAll('.mobile-menu .menu-item.open').forEach(openItem => {
                    openItem.classList.remove('open');
                });

                // Открытие текущего раздела
                if (!isOpen) {
                    parent.classList.add('open');
                }
            } else {
                // Если подменю нет, позволяем переходить по ссылке
                mobileMenu.classList.remove('open'); // Закрыть меню, если это мобильное устройство
            }
        });
    });
});
