document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const targetDate = new Date("2025-04-01T18:00:00").getTime();
    const countdownBtn = document.getElementById("countdownBtn");

    // Enhanced countdown timer with animation
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        const countdownBtn = document.getElementById("countdownBtn");

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Format with leading zeros and improved spacing
            const formattedTime = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
            
            // Add animation class when seconds change
            countdownBtn.classList.add('countdown-animate');
            
            // Update text with event name
            countdownBtn.innerHTML = `<span>Event Starts In:</span> ${formattedTime}`;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                countdownBtn.classList.remove('countdown-animate');
            }, 500);
            
            setTimeout(updateCountdown, 1000);
        } else {
            countdownBtn.innerText = "Event Started!";
            countdownBtn.style.background = "linear-gradient(135deg, #28a745, #218838)";
        }
    }
    updateCountdown();

    // Parallax Scrolling & Smooth Fade-Out Effect
    document.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        let bg = document.querySelector(".hero"); // Or another appropriate element
        let fadeTrigger = document.querySelector(".maincontainer").offsetTop - 400; // Adjust fade-out point

        // Parallax Effect: Moves background slower than content
        if (bg) { // Check if element exists before manipulating it
            bg.style.transform = `translateY(${scrollTop * 0.4}px)`;
        }

        // Smooth fade-out before the "Technical" section
        if (scrollTop > fadeTrigger) {
            let opacity = 1 - (scrollTop - fadeTrigger) / 200; // Adjust fading speed
            bg.style.opacity = Math.max(opacity, 0);
        } else {
            bg.style.opacity = 1;
        }
    });

    // Smooth Scroll to Sections When Clicking Navbar Items
    document.querySelectorAll("#menu a").forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            let sectionId = this.getAttribute("href"); // Get the href attribute (#home, etc)
            let targetSection = document.querySelector(sectionId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Register Button Click Alert
    document.getElementById("registerBtn").addEventListener("click", function () {
        alert("Registration Coming Soon!");
    });
});
