let namaBarang = document.getElementById("namaBarang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan(){
    console.log(namaBarang.value);
    console.log(jumlah.value);
    console.log(keterangan.value);

    if(localStorage.getItem("daftarBelanja") ===  null){
        localStorage.setItem("daftarBelanja", "[]");
    }

    let data = JSON.parse(localStorage.getItem("daftarBelanja"))
    console.log(data);

    data.push({
        namaBarang: namaBarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data);

    localStorage.setItem("daftarBelanja", JSON.stringify(data));

    tampil();
}

function tampil(){
    let hasil = JSON.parse(localStorage.getItem("daftarBelanja"));

    document.getElementById("list-belanja")
}