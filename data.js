// data.js - inisialisasi data dasar (akun, buku, cart, pesanan)
(function(){
  if (!localStorage.getItem("dataAkun")) {
    const akunAwal = [{ nama: "Admin", email: "admin@gmail.com", password: "12345" }];
    localStorage.setItem("dataAkun", JSON.stringify(akunAwal));
    console.log("Data akun awal dibuat");
  }

  if (!localStorage.getItem("dataBuku")) {
    const bukuAwal = [
      { judul: "Laskar Pelangi", penulis: "Andrea Hirata", harga: 75000, stok: 10, gambar: "laskar.jpg" },
      { judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", harga: 85000, stok: 5, gambar: "bumi.jpg" },
      { judul: "Filosofi Kopi", penulis: "Dee Lestari", harga: 55000, stok: 8, gambar: "filosofi.jpg" },
      { judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", harga: 65000, stok: 7, gambar: "negeri.jpg" }
    ];
    localStorage.setItem("dataBuku", JSON.stringify(bukuAwal));
    console.log("Data buku awal dibuat");
  }

  if (!localStorage.getItem("cart")) localStorage.setItem("cart", JSON.stringify([]));
  if (!localStorage.getItem("pesanan")) localStorage.setItem("pesanan", JSON.stringify([]));
})();
