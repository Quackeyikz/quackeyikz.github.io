document.getElementById('nama').addEventListener('input', function () {
    var inputNama = this.value;
    var namaTerfilter = inputNama.replace(/[^A-Za-z ]+/g, ''); // Menghilangkan karakter selain huruf
    this.value = namaTerfilter;
});

document.getElementById('ttl').addEventListener('input', function() {
    var inputTtl = this.value;
    var ttlTerfilter = inputTtl.replace(/[^A-Za-z ]+/g, '');
    this.value = ttlTerfilter;
});

document.getElementById('email').addEventListener('input', function() {
    var inputEmail = this.value;
    var emailTerfilter = inputEmail.replace(/[^A-Za-z0-9@.]+/g, '');
    this.value = emailTerfilter;
});

document.getElementById('nomor').addEventListener('input', function() {
    var inputNomor = this.value;
    var nomorTerfilter = inputNomor.replace(/[^0-9 -+]+/g, '');
    this.value = nomorTerfilter;
});