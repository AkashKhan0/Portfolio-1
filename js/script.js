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