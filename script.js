document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', function() {
        const cardContent = this.parentElement;
        const moreText = cardContent.querySelector('.show_text');
        console.log(cardContent)
        console.log(moreText)

        if (moreText.style.display === "inline") {
            moreText.style.display = "none";
            this.textContent = "See more";
        } else {
            moreText.style.display = "inline";
            this.textContent = "See less";
        }
    });
})