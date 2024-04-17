url = "https://script.google.com/macros/s/AKfycbwyEadChg5vwka_KILap939frCV7V3IwJJQGX81EOGwuhtCDiMG7P2FQ6CTzpGRbo-ZvA/exec"
bot_url = "https://api.telegram.org/bot"
chanel = "-1002097105616"

tg = window.Telegram.WebApp

id = tg.initDataUnsafe.user.id
nick = tg.initDataUnsafe.user.username

$("#id")[0].innerHTML = "id: " + tg.initDataUnsafe.user.id
$("#nick")[0].innerHTML = "ник: " + tg.initDataUnsafe.user.username

$.get(url+"?method=getAcount&acount="+id, function (data, status){
    result = data["ViniAPI"]

    $("acount")[0].innerHTML = "аккаунт " + result
    acount = result
})

$.get(url+"?method=getToken", function (data, status){
    token = data["ViniAPI"]

    $.get(bot_url+token+"/getUpdates", function (data, status){
        result = data["result"]
        
        for(let i = 0; i<result.length; i++){
            message_text_vini = result[i]["message"]["text"]
            message_caption_vini = result[i]["message"]["caption"]
            message_id = result[i]["message"]["message_id"]
            chat_id = result[i]["message"]["chat"]["id"]


            mc = message_caption_vini
            mt = message_text_vini

            flag = "none"

            console.log(message_id)
            if(mc != undefined){
                flag = mc[0]+mc[1]+mc[2]+mc[3]+mc[4]
                message_text_out = mc
            }

            if(mt != undefined){
                flag = mt[0]+mt[1]+mt[2]+mt[3]+mt[4]
                message_text_out = mt
            }

            if(flag == "#vini" & chat_id == id){
                data_el = document.createElement("div");
                
                data_el.innerHTML = `
                    <div class="px-10 mt-10 py-2.5 bg-black bg-opacity-25 shadow-2xl rounded-md items-center">
                        <p>
                            `+ message_text_out +`
                        </p>
                    </div>

                    <button id="btnsend`+i+`" class="w-full mt-5 py-2.5 bg-black bg-opacity-25 shadow-2xl rounded-md items-center hover:bg-opacity-15">
                        отправить
                    </button>
                `
                                    
                $("#workspace")[0].appendChild(data_el)
                document.write = document._write

                $("#btnsend"+i)[0].onclick = function (){
                    $.get(url+"?method=getToken", function (data, status){
                        token = data["ViniAPI"]
                
                        Http = new XMLHttpRequest()
                
                        data = {
                            "chat_id": chanel,
                            "from_chat_id": id,
                            "message_id": message_id
                        }

                        if(acount == "активирован"){
                            Http.open("POST", bot_url+token+"/forwardMessage")
                            Http.setRequestHeader("Content-Type", "application/json")
                            Http.send(JSON.stringify(data))
                        }
                    })
                }
            }
        }
    })
})

$("#btnsend")[0].onclick = function (){
    $.get(url+"?method=getToken", function (data, status){
        token = data["ViniAPI"]

        message_text = nick + "\n---\n" + $("#text")[0].value

        Http = new XMLHttpRequest()

        data = {
            "chat_id": "5454780283",
            "text": message_text
        }

        Http.open("POST", bot_url+token+"/sendMessage&chat_id=6506997655")
        Http.setRequestHeader("Content-Type", "application/json")
        Http.send(JSON.stringify(data))
    })
}
