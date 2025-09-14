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
          // Show the modal when page loads
        document.addEventListener('DOMContentLoaded', function() {
            var myModal = new bootstrap.Modal(document.getElementById('comingSoonModal'));
            myModal.show();
            
            // Start countdown
            startCountdown();
        });

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Countdown Timer
        function startCountdown() {
            // Set the launch date (December 1, 2025)
            const launchDate = new Date('December 1, 2025 00:00:00').getTime();
            
            const timer = setInterval(function() {
                const now = new Date().getTime();
                const distance = launchDate - now;
                
                // Calculate days, hours, minutes, seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Display the result
                document.getElementById('days').innerText = days.toString().padStart(2, '0');
                document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
                document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
                
                // If the countdown is over
                if (distance < 0) {
                    clearInterval(timer);
                    document.getElementById('countdown').innerHTML = "LAUNCHED!";
                }
            }, 1000);
        }