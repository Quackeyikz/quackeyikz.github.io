$(document).ready(function () {

    $("#jenjang").change(function () {
        var val = $(this).val();
        if (val == "SD/MI Se-Derajat") {
            $("#bidang").html("<option value='Matematika'>Matematika</option><option value='IPA'>IPA</option><option value='Bahasa Inggris'>Bahasa Inggris</option><option value='Bahasa Inggris'>Bahasa Indonesia</option>");
        } else if (val == "SMP/MTs Se-Derajat") {
            $("#bidang").html("<option value='Matematika'>Matematika</option><option value='Biologi'>Biologi</option><option value='Sejarah'>Sejarah</option><option value='Bahasa Inggris'>Bahasa Inggris</option><option value='PPKn'>PPkn</option><option value='Bahasa Indonesia'>Bahasa Indonesia</option>");
        } else if (val == "SMA/SMK Se-Derajat") {
            $("#bidang").html("<option value='Bahasa Indonesia'>Bahasa Indonesia</option><option value='Bahasa Inggris'>Bahasa Inggris</option><option value='Biologi'>Biologi</option><option value='Ekonomi'>Ekonomi</option><option value='Fisika'>Fisika</option><option value='Geografi'>Geografi</option><option value='Ilmu Hukum'>Ilmu Hukum</option><option value='Ilmu Kedokteran'>Ilmu Kedokteran</option><option value='Kimia'>Kimia</option><option value='Matematika'>Matematika</option><option value='PPkn'>PPkn</option><option value='Sejarah'>Sejarah</option><option value='Sosiologi'>Sosiologi</option>");
        }
    });
});


document.getElementById('riwayatKompetisi').addEventListener('input', function () {
    var inputRiwayatKompetisi = this.value;
    var riwayatKompetisiTerfilter = inputRiwayatKompetisi.replace(/[^A-Za-z0-9 ]+/g, '');
    this.value = riwayatKompetisiTerfilter;
});

document.getElementById('nilai').addEventListener('input', function() {
    var inputNilai = this.value;
    var nilaiTerfilter = inputNilai.replace(/[^0-9]+/g, '');
    this.value = nilaiTerfilter;
});
