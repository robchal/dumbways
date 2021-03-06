function meet(jamNana,nanaSpeed,jamAngela,angelaSpeed) {
    let angelaDis = 0;
    let nanaDis = 0;
    let jamStart = 0;
    if(jamNana < jamAngela && angelaSpeed > nanaSpeed) {
        if(jamAngela - jamNana < 1) {
            nanaDis = Math.round((jamAngela - jamNana)*100);
            if(nanaDis > 60) {
                nanaDis = nanaDis - 40;
            }
        }else if(jamAngela - jamNana >= 1){
            nanaDis = (jamAngela-jamNana).toString().split('.');
            nanaDis = nanaDis.map((el,i) => i == 0 ? parseInt(el*60) : Math.round(parseInt(el.slice(0,3))*0.1) > 60 ? Math.round(parseInt(el.slice(0,3))*0.1) - 40 : Math.round(parseInt(el.slice(0,3))*0.1)).reduce((a,b) => a+b)*nanaSpeed;
        }
        while(nanaDis > angelaDis) {
            nanaDis += nanaSpeed;
            angelaDis += angelaSpeed;
            jamStart++
        }
        jamStart = jamStart/60+jamNana
        return jamStart
    }

    return "untuk kemungkinan selain dari itu tidak tercantum di soal :)"


}

console.log(meet(12,7,13,10))