/* Thank you for buying */
document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Stops link from navigating
            alert("✅ Thank you for buying!");
        });
    });
});

