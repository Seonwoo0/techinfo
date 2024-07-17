function toggleDetails(event) {
    const details = event.currentTarget.querySelectorAll('p, img');
    details.forEach(detail => {
        detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const devices = document.querySelectorAll('.device');
    devices.forEach(device => {
        device.addEventListener('click', toggleDetails);
    });

    const compareTitle = document.querySelector('.compare-section h2');
    const comparePrices = document.querySelector('.compare-prices');
    compareTitle.addEventListener('click', () => {
        comparePrices.style.display = comparePrices.style.display === 'none' ? 'block' : 'none';
    });
});