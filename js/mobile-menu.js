document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // 点击菜单项后关闭菜单
    const menuItems = nav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}); 