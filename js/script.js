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

