window.onload = function(){
     let totalpesanan = JSON.parse(localStorage.getItem("data-pemesanan")) || [];
     let container = document.getElementById("riwayat")

     if(totalpesanan.length == 0){
          container.innerHTML = "Tidak Ada Pemesanan Mobil";
          return;
     }

     totalpesanan.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = 
    `
      <h3>${item.mobil}</h3>
      <p><strong>Pelanggan:</strong> ${item.pelanggan}</p>
      <p><strong>Durasi:</strong> ${item.durasi} hari</p>
      <p><strong>Waktu Pemesanan:</strong> ${item.waktu}</p>
      <button class = "del" onclick="hapusData(${index})">Delete</button> 
      <button class = "yar" onclick="bayar(${index})">Bayar</button> 
    `;


    container.appendChild(card);
  });
}


function bayar(index){
     let totalpesanan = JSON.parse(localStorage.getItem("data-pemesanan")) || [];
     totalpesanan.splice(index,1)
     localStorage.setItem("data-pemesanan", JSON.stringify(totalpesanan))

     alert("Pemesanan Berhasil di Bayar!")
     location.reload();
    } 

function hapusData(index){
     let totalpesanan = JSON.parse(localStorage.getItem("data-pemesanan")) || [];
     totalpesanan.splice(index,1)
     localStorage.setItem("data-pemesanan", JSON.stringify(totalpesanan))

     alert("Pemesanan Berhasil di Hapus!")
     location.reload();
    } 