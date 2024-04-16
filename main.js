url = "https://script.google.com/macros/s/AKfycbwyEadChg5vwka_KILap939frCV7V3IwJJQGX81EOGwuhtCDiMG7P2FQ6CTzpGRbo-ZvA/exec"

let tg = window.Telegram.WebApp;

document.getElementById("id").value = tg.initDataUnsafe.user.id
document.getElementById("nick").value = tg.initDataUnsafe.user.username

$.get(url+"?method=getAcount&acount="+tg.initDataUnsafe.user.id)