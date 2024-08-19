document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.work-box').forEach(box => {
        box.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});
