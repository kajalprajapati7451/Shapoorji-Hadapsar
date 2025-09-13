// Initialize animations when scrolling
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            sections.forEach(section => {
                observer.observe(section);
            });
            
            // Show coming soon modal on page load
            const comingSoonModal = new bootstrap.Modal(document.getElementById('comingSoonModal'));
            setTimeout(() => {
                comingSoonModal.show();
            }, 2000);
            
            // Scroll to top functionality
            const scrollButton = document.querySelector('.scroll-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollButton.classList.add('active');
                } else {
                    scrollButton.classList.remove('active');
                }
            });
            
            scrollButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });