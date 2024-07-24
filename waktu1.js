var waktu = new Date();
var jam = waktu.getHours();
var mnt = waktu.getMinutes();
var dtk = waktu.getSeconds();
var tgl = waktu.getDate();
var bln = waktu.getMonth();
var thn = waktu.getFullYear();
var hr = waktu.getDay();

var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

if (jam <= 10) {
    document.write("Selamat Pagi!");
}
else if (jam <= 15) {
    document.write("Selamat Siang!");
}
else if (jam <= 18) {
    document.write("Selamat Sore!");
}
else {
    document.write("Selamat Malam!");
}
document.write("<br>");
document.write(hari[hr] + ", " + tgl + " " + bulan[bln] + " " + thn + "<br>");

// Fungsi interaksi tombol
function addButtonListeners() {
    const buyButtons = document.querySelectorAll('button.beli');
    const cartButtons = document.querySelectorAll('button.add-to-cart');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produk berhasil dibeli!');
            window.location.href = "contactus.html"; // Redirect to contact page
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produk ditambahkan ke keranjang!');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addButtonListeners();
});

function login() {
    // Simulate a login process
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to home page
}
