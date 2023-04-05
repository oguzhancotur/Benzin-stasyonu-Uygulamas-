// Benzin İStasyonu

/* 1-Dizel  : 24.53
   2-Benzin : 22.25
   3-LPG    : 11.10




   Gelen müşteriden alacağımız bilgiler;
   1-Yakıt Tipi
   2-Yüklenecek yakıt litresi

*/

let dizel=24.53 , benzin=22.25, lpg=11.10;
const yeniSatir= "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakıt Türünü Seçiniz";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){

    let yakitLitresi = Number(prompt("Lütfen almak istediğiniz yakıt litresini giriniz."));
    let bakiye = Number(prompt("Lütfen bakiyenizi giriniz."));


    if(yakitTipi=="1"){
        //Dizel
        let odenecekTutar = dizel*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiye yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+ yeniSatir
            +"Kalan Bakiye : "+ bakiye);
        }
        else{
            //Bakiye yeterli değil
            alert("Bakiyeniz yeterli değil!" + yeniSatir
            +"Ödenecek Tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : "+ (odenecekTutar-bakiye));
        }
    }
    else if(yakitTipi == "2"){
        //Benzin
        let odenecekTutar = benzin*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiye yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+ yeniSatir
            +"Kalan Bakiye : "+ bakiye);
        }
        else{
            //Bakiye yeterli değil
            alert("Bakiyeniz yeterli değil!" + yeniSatir
            +"Ödenecek Tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : "+ (odenecekTutar-bakiye));
        }

    }
    else if(yakitTipi =="3"){
        //LPG
        let odenecekTutar = lpg*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiye yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+ yeniSatir
            +"Kalan Bakiye : "+ bakiye);
        }
        else{
            //Bakiye yeterli değil
            alert("Bakiyeniz yeterli değil!" + yeniSatir
            +"Ödenecek Tutar : " + odenecekTutar+yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik Tutar : "+ (odenecekTutar-bakiye));
        }
    }
}

else{
    alert("Geçerli bir yakıt tipi giriniz !")
}

