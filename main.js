url = "https://script.google.com/macros/s/AKfycbwyEadChg5vwka_KILap939frCV7V3IwJJQGX81EOGwuhtCDiMG7P2FQ6CTzpGRbo-ZvA/exec"

tg = window.Telegram.WebApp

id = tg.initDataUnsafe.user.id
nick = tg.initDataUnsafe.user.username

document.getElementById("id").innerHTML = "id: " + tg.initDataUnsafe.user.id
document.getElementById("nick").innerHTML = "ник: " + tg.initDataUnsafe.user.username

$.get(url+"?method=getAcount&acount="+id)
