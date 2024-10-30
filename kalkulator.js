$(function(){
  let input1;
  let input2;
  let operasiselected = null;

    $(".tombol-angka").click(function() {
        let angka = $(this).text();
        // alert("Halo JQuery! Kamu menekan angka" + angka);
        
        // cek jika sudah ada selected operasi
        if(operasiselected== null) {
            // operasi masih kosong --> isi input1
            let angkaSebelumnya = $("#input1").text();
            if(angkaSebelumnya=="...") angkaSebelumnya = "";
            input1 = angkaSebelumnya + angka;
            $("#input1").text(input1);
        }else{
            // sudah ada operasi selected
            let angkaSebelumnya = $("#input2").text();   
            if(angkaSebelumnya== "...") angkaSebelumnya = "";
            input2 = angkaSebelumnya + angka;
            $("#input2").text(input2);
        }
    });

    $(".tombol-operasi").click(function() {
        let operasisebelumnya = $("operasi-selected").text();
        let newOperasi = $(this).text();
       if(operasiselected== null){
        // operasi baru
        $("#operasi-selected").text(newOperasi);
        operasiselected = newOperasi;
       }else {
         // input1 diisi dengan hasil
         $("#input1").text($("#hasil").text());

         // input2 dikosongkan
         $("#input2").text(...);

         // replace operasi
         $("#operasi-selected").text(newOperasi);
         operasiselected = newOperasi;
   
    }
});

$("#btn-hitung").click(function () {
    input1 = parseInt($("#input1").text());
    input2 = parseInt($("#input2").text());
    let hasil;
    
    if(operasiselected=="+"){
        hasil = input1 + input2;
    }else if(operasiselected=="-"){
        hasil = input1 - input2;
    }else if(operasiselected=="x"){
            hasil = input1 * input2;
    }else if(operasiselected=="/"){
            hasil = input1 / input2;
    }else if(operasiselected=="^"){
                hasil = input1 ^ input2;
    }else if(operasiselected=="%"){
                hasil = input1 % input2;
    } else {
        alert("belum ada handle untuk operasi ${operasiselected}");
    }
    $("#hasil").text(hasil);

    });
});