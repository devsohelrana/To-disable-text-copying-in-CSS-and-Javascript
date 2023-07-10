// Add event listener for copy event
document.addEventListener('copy', function (event) {
    event.preventDefault(); // Prevent default copy behavior

    // Toast element setect using id
    var toast = document.getElementById('toast');
    // Show toast message
    // toast.textContent = 'Copying content is not allowed.';
    // Toast element add class
    toast.classList.add('show');

    // Remove toast after a certain time (e.g., 2 seconds)
    setTimeout(function () {
        toast.classList.remove('show');
    }, 2000);
});