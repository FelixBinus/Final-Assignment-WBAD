

const cekavanza = document.getElementById("select-avanza")
const durasiavanza = document.getElementById("durasi-avanza")



const cekkijang = document.getElementById("select-kijang")
const durasikijang = document.getElementById("durasi-kijang")



const cekhrv = document.getElementById("select-hrv")
const durasihrv = document.getElementById("durasi-hrv")




const ceksigra = document.getElementById("select-sigra")
const durasisigra = document.getElementById("durasi-sigra")



const Avanza = {
nama: "Toyota Avanza",
harga : 500000,
gambar : "./asset/toyota-avanza-front-angle-low-view-844132.jpg",
}

const Kijang = {
nama: "Toyota Kijang Innova",
harga : 700000,
gambar : "./asset/1646473511_toyota-kijang-innova-tipe-g-paling-dicari.jpg",
}

const HRV = {
nama: "HRV",
harga : 600000,
gambar : "./asset/honda-hr-v-2022-hibrido---europa.jpg",
}

const Sigra = {
nama: "Daihatsu Sigra",
harga : 450000,
gambar : "./asset/9a61bc4cb9e66d822fa158619006a8fd.JPG",
}


function jumlah(){
     let totalharga = 0;
     let subtotalavanza = 0;
     let subtotalkijang = 0;
     let subtotalhrv = 0;
     let subtotalsigra = 0;
     let ringkasan = "";


     if(cekavanza.checked){
          const jumlahdurasiavanza = parseInt(durasiavanza.value)|| 0;
          subtotalavanza = Avanza.harga * jumlahdurasiavanza.toLocaleString() 
          ringkasan += ("\n\n" + "- " + Avanza.nama + "\n"+" Durasi: " + jumlahdurasiavanza + " hari "+ " = " + subtotalavanza.toLocaleString() ) 
     }
     
     if(cekkijang.checked){
          const jumlahdurasikijang = parseInt(durasikijang.value)|| 0;
          subtotalkijang = Kijang.harga * jumlahdurasikijang.toLocaleString() 
          ringkasan += ("\n\n" +  "- " + Kijang.nama + "\n"+" Durasi: " + jumlahdurasikijang + " hari "+ " = " + subtotalkijang.toLocaleString())
     }
     
     if(cekhrv.checked){
          const jumlahdurasihrv = parseInt(durasihrv.value)|| 0;
          subtotalhrv = HRV.harga * jumlahdurasihrv.toLocaleString() 
          ringkasan += ("\n\n" +  "- " + HRV.nama + "\n"+" Durasi: " + jumlahdurasihrv + " hari "+ " = " + subtotalhrv.toLocaleString() )
     }
     
     if(ceksigra.checked){
          const jumlahdurasisigra = parseInt(durasisigra.value) || 0;
          subtotalsigra = Sigra.harga * jumlahdurasisigra.toLocaleString()
          ringkasan += ("\n\n" +  "- " + Sigra.nama + "\n"+" Durasi: " + jumlahdurasisigra + " hari "+ " = " + subtotalsigra.toLocaleString() ) 
     }


     let total = subtotalavanza + subtotalhrv + subtotalkijang + subtotalsigra
     document.getElementById("ringkasan").innerText = ringkasan;
     

     document.getElementById("container-total").innerText = "\n"+" Total =  Rp " + total.toLocaleString();
     
}

function sewa(){
     let pesanan = [];

     const nama = document.getElementById("nama").value.trim();
     if(nama.length == 0){
          alert("Wajib Mengisi Nama Pelanggan!")
          return;
     }else if (nama.length < 3){
          alert("Nama Pelanggan Minimal 3 Huruf!")
          return;
     }
     


     if(cekavanza.checked){
          const jumlahdurasiavanza = parseInt(durasiavanza.value)|| 0;
     pesanan.push({
          pelanggan : nama,
          mobil : Avanza.nama,
          durasi : jumlahdurasiavanza,
          waktu : new Date().toLocaleString(),
     });
     }

     if(cekkijang.checked){
          const jumlahdurasikijang = parseInt(durasikijang.value)|| 0;
     pesanan.push({
          pelanggan : nama,
          mobil : Kijang.nama,
          durasi : jumlahdurasikijang,
          waktu : new Date().toLocaleString(),
     });
     }

     if(cekhrv.checked){
          const jumlahdurasihrv = parseInt(durasihrv.value)|| 0;
     pesanan.push({
          pelanggan : nama,
          mobil : HRV.nama,
          durasi : jumlahdurasihrv,
          waktu : new Date().toLocaleString(),
     });
     }
     
     if(ceksigra.checked){
          const jumlahdurasisigra = parseInt(durasisigra.value)|| 0;
     pesanan.push({
          pelanggan : nama,
          mobil : Sigra.nama,
          durasi : jumlahdurasisigra,
          waktu : new Date().toLocaleString(),
     });
     }

     if(pesanan.length == 0){
          alert("Tidak Ada Pemesanan")
          return;
     }


     let totalpesanan = JSON.parse(localStorage.getItem("data-pemesanan")) || [];
     totalpesanan = totalpesanan.concat(pesanan);
     localStorage.setItem("data-pemesanan", JSON.stringify(totalpesanan));

     alert("Pemesanan Berhasil Dilakukan!")
     location.reload();
}






//Pak Maaf Saya Kurang Bisa JS :( 
//Saya udah berusaha semaksimal mungkin tetep gabisa