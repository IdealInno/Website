document.addEventListener('DOMContentLoaded', function() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const zhElements = document.querySelectorAll('.zh');
    const enElements = document.querySelectorAll('.en');

    // 从本地存储获取上次选择的语言，默认为英文
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    showLanguage(savedLang);
    
    // 更新按钮状态
    langBtns.forEach(btn => {
        if(btn.dataset.lang === savedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            showLanguage(lang);
            
            // 更新按钮状态
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 保存语言选择到本地存储
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    function showLanguage(lang) {
        if (lang === 'zh') {
            zhElements.forEach(el => el.style.display = 'block');
            enElements.forEach(el => el.style.display = 'none');
            document.documentElement.lang = 'zh';
        } else {
            zhElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
            document.documentElement.lang = 'en';
        }
    }
}); 