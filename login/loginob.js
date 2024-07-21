document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('loginPage').classList.add('slide-left');
    setTimeout(function() {
        document.getElementById('registerPage').classList.add('slide-in');
    }, 500);
});
