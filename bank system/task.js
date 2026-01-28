alert("Bank kartinizi daxil edin.");
let operation = prompt("Siz kartinizda ne emelyyati etmek isteyirssiniz???");
switch(operation) {
    case "1":
        alert("Kartdan pul cixarma emeliyyatini secdiz");
        break;
    case "2":
        alert("Kart pinkodunu yenilemeyi secdiz");
        break;
    case "3":
        alert("Kredit goturmeyi secdiz");
        break;
    default:
        alert("Hec bir emeliyyati secmediniz. Kartiniz geri qaytarildi.");            
}