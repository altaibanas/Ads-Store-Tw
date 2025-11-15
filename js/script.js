 
        // تأثيرات التمرير
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('shadow-lg');
                header.classList.add('bg-white/80');
            } else {
                header.classList.remove('shadow-lg');
                header.classList.remove('bg-white/80');
            }
        });
        
        // تأثيرات الظهور عند التمرير
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);
        
        // مراقبة العناصر التي تحتاج تأثيرات ظهور
        document.querySelectorAll('.creative-card, .portfolio-item').forEach(el => {
            observer.observe(el);
        });
        
        // إضافة فئة CSS للرسوم المتحركة
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.8s ease forwards;
            }
        `;
        document.head.appendChild(style);

// تهيئة المتجر
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل قائمة الجوال
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // تغيير الأيقونة
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // تأثيرات التمرير للرأس
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-lg', 'bg-white/95');
        } else {
            header.classList.remove('shadow-lg', 'bg-white/95');
        }
    });
    
    // تأثيرات الظهور عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر التي تحتاج تأثيرات ظهور
    document.querySelectorAll('.creative-card, .portfolio-item, .service-card').forEach(el => {
        observer.observe(el);
    });
    
    // إضافة فئة CSS للرسوم المتحركة
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.8s ease forwards;
        }
    `;
    document.head.appendChild(style);
});

// وظيفة عرض الإشعارات
function showNotification(message, type = 'success') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg transition-all duration-300 transform translate-x-full ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    // إضافة الإشعار إلى الصفحة
    document.body.appendChild(notification);
    
    // عرض الإشعار
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // إخفاء الإشعار بعد 3 ثوانٍ
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// وظيفة إرسال النموذج
function submitForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // محاكاة إرسال النموذج
            showNotification('تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا!');
            form.reset();
        });
    }
}

// تفعيل جميع النماذج في الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا!');
            this.reset();
        });
    });
});

// وظيفة التبديل بين علامات التبويب
function initTabs(tabContainerId) {
    const tabContainer = document.getElementById(tabContainerId);
    if (tabContainer) {
        const tabs = tabContainer.querySelectorAll('[data-tab]');
        const tabPanes = tabContainer.querySelectorAll('[data-tab-pane]');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // إزالة النشاط من جميع الألسنة
                tabs.forEach(t => t.classList.remove('active'));
                tabPanes.forEach(p => p.classList.add('hidden'));
                
                // إضافة النشاط للسان المحدد
                this.classList.add('active');
                document.getElementById(tabId).classList.remove('hidden');
            });
        });
    }
}

// تفعيل التبديل بين علامات التبويب عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    initTabs('services-tabs');
    initTabs('portfolio-tabs');
});

// وظيفة العداد
function initCounter(counterId, target) {
    const counter = document.getElementById(counterId);
    if (counter) {
        let count = 0;
        const duration = 2000; // مدة العد بالمللي ثانية
        const increment = target / (duration / 16); // 16ms لكل إطار
        
        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };
        
        // بدء العد عند ظهور العنصر في الشاشة
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    }
}

// تفعيل العدادات عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    initCounter('projects-counter', 500);
    initCounter('clients-counter', 150);
    initCounter('experience-counter', 5);
});

 
        // تصفية معرض الأعمال
        const filterButtons = document.querySelectorAll('.portfolio-category');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة النشاط من جميع الأزرار
                filterButtons.forEach(btn => {
                    btn.classList.remove('filter-active');
                    btn.classList.add('bg-gray-100', 'text-gray-700');
                });
                
                // إضافة النشاط للزر المحدد
                this.classList.add('filter-active');
                this.classList.remove('bg-gray-100', 'text-gray-700');
                
                // الحصول على قيمة التصفية
                const filterValue = this.getAttribute('data-filter');
                
                // تصفية العناصر
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
      
        // دالة للحصول على اسم الفئة بالعربية
        function getCategoryName(category) {
            const categories = {
                'design': 'تصميم الجرافيك',
                'branding': 'الهوية البصرية',
                'print': 'المواد المطبوعة',
                'web': 'تصميم الويب',
                'motion': 'الموشن جرافيك'
            };
            return categories[category] || 'غير مصنف';
        }
        
        // فتح نموذج المشروع
        function openProjectModal(title, description, category) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-category').textContent = category;
            document.getElementById('project-modal').style.display = 'block';
        }
        
       
        // إغلاق النموذج عند النقر خارج المحتوى
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('project-modal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // إضافة أحداث النقر لعناصر المعرض لفتح النموذج
        portfolioItems.forEach(item => {
            item.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const title = this.querySelector('h3').textContent;
                const description = this.querySelector('p').textContent;
                openProjectModal(title, description, getCategoryName(category));
            });
        });
        
        // تفعيل العدادات
        function initCounter(counterId, target) {
            const counter = document.getElementById(counterId);
            if (counter) {
                let count = 0;
                const duration = 2000;
                const increment = target / (duration / 16);
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        counter.textContent = Math.floor(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        updateCount();
                        observer.unobserve(counter);
                    }
                });
                
                observer.observe(counter);
            }
        }
        
        // تفعيل جميع العدادات
        document.addEventListener('DOMContentLoaded', function() {
            initCounter('projects-counter', 350);
            initCounter('clients-counter', 180);
            initCounter('designs-counter', 500);
            initCounter('satisfaction-counter', 98);
        });