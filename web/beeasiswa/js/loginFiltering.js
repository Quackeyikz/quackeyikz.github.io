document.getElementById('email').addEventListener('input', function() {
    var inputEmail = this.value;
    var inputTerfilter = inputEmail.replace(/[^A-Za-z0-9@.]+/g, '');
    this.value = inputTerfilter;
});