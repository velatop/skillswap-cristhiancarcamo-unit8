document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('More information: ' + card.querySelector('h3').textContent);
    });
});