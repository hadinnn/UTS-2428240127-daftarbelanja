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

    document.getElementById("list-belanja").innerHTML = "";

    hasil.forEach(element => {
        document.getElementById("list-belanja").innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
            <div style="background: #d1e7dd; padding: 15px; border: 1px solid #a3cfbb; margin-bottom: 10px;">
                ${element.namaBarang}
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div style="background: #d1e7dd; padding: 15px; border: 1px solid #a3cfbb; margin-bottom: 10px;">
                ${element.jumlah}
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div style="background: #d1e7dd; padding: 15px; border: 1px solid #a3cfbb; margin-bottom: 10px;">
                ${element.keterangan}
            </div>
        </div>
        `
    });
}

tampil();