let menuOpen = false;

function toggleMenu() {
    const nav = document.getElementById("nav");
    const icon = document.getElementById("menu-icon");

    menuOpen = !menuOpen;

    if (menuOpen) {
        nav.classList.add("open");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        nav.classList.remove("open");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}

// Auto-close menu on resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        document.getElementById("nav").classList.remove("open");
        document.getElementById("menu-icon").classList.remove("fa-times");
        document.getElementById("menu-icon").classList.add("fa-bars");
        menuOpen = false;
    }
});

// _______________________________________________________________________________________________________________________________

// backtotop.js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    });

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// _______________________________________________________________________________________________________________________________

var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
        }
           });
        }
        
             let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// _______________________________________________________________________________________________________________________________

// contact.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("contact-success");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            await fetch(form.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            successMessage.style.display = "block";
            form.reset();
        } catch (err) {
            alert("Something went wrong. Please try again.");
        }
    });
});
