document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        
        let currentSlide = 0;
        
        // 初始化第一张幻灯片
        slides[0].classList.add('active');
        
        // 更新轮播位置
        function updateSlider() {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentSlide].classList.add('active');
        }
        
        // 下一张
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }
        
        // 上一张
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        }
        
        // 绑定按钮事件
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    });
}); 