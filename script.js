document.querySelectorAll('.see_more').forEach(button => {
    button.addEventListener('click', function() {
        const cardContent = this.parentElement;
        const moreText = cardContent.querySelector('.more-text');

        if (moreText.style.display === "inline") {
            moreText.style.display = "none";
            this.textContent = "Ver más";
        } else {
            moreText.style.display = "inline";
            this.textContent = "Ver menos";
        }
    });
});