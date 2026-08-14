document.querySelectorAll(".read-btn").forEach(button => {

    button.addEventListener("click", function () {

        const container = this.previousElementSibling;
        const extra = container.querySelector(".extra-content");

        if (!container.classList.contains("expanded")) {

            container.classList.add("expanded");
            extra.style.maxHeight = extra.scrollHeight + "px";
            this.textContent = "See Less";

        } else {

            extra.style.maxHeight = "0px";

            setTimeout(() => {
                container.classList.remove("expanded");
            }, 400);

            this.textContent = "See More";
        }

    });

});


const elements = document.querySelectorAll(".left, .right, .up, .down");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            // Screen থেকে বের হলে animation reset হবে
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", function () {
const navbar = document.getElementById("navbar");
const navbarNav = document.getElementById("navbarNav");
const toggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll("#navbarNav .nav-link");

// Menu item click করলে navbar close হবে
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
    if (window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarNav);

        if (bsCollapse) {
        bsCollapse.hide();
        }
    }
    });
});

// Screen-এর যেকোনো জায়গায় click করলে menu close হবে
document.addEventListener("click", function (event) {
    if (
    window.innerWidth < 992 &&
    navbarNav.classList.contains("show") &&
    !navbar.contains(event.target)
    ) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarNav);

    if (bsCollapse) {
        bsCollapse.hide();
    }
    }
});
});