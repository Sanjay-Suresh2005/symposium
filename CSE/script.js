document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const targetDate = new Date("2025-04-01T18:00:00").getTime();
    const countdownBtn = document.getElementById("countdownBtn");

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownBtn.innerText = `Event Starts In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownBtn.innerText = "Event Started!";
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
