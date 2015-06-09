users = [
    {
        "name": "Jishnu Janardhanan",
        "img": "static/img/pp.jpg",
        "fullimg": "static/img/jfull.jpg",
        "status": "Finally u r mine👸",
        "phno": "+919538062781",
        "chat": [
            "Hey.....✋",
            "Hi Jishnuuu...✋How are you???",
            "Doing good😃 And have a special news to share☺️,  It's my marriage🎉🎊",
            "Wow... Great news👌👌👌👏👏",
            "I wish your presence when me and Thushara 💑 tie a knot on 11th June 2015 at \"Sadhoo Kalyana Mandapam\", Thana, Kannur 😄 <br/><img class='mapimg' src='static/img/mapm.jpg'/>",
            "Sure!!!! I am really excited and will join the wedding party 😄",
            "Thank You 😄😄😄 <br/><img class='wcard' src='static/img/jwc.jpg'/>"
        ],
        "cp":-1,
    },
    {
        "name": "Thushara Aravind",
        "img": "static/img/thushara.jpg",
        "fullimg": "static/img/thushara.jpg",
        "status": "🎉💃Wedding bells are ringing😊☺",
        "phno": "+918147036889",
        "cp":-1,
        "chat": [
            "Heloo!!! 😄",
            "Hi Thushara!!!✋ Wats up???",
            "The day has come when Jishnu👲 and Me👰 are taking a step forward to begin a wonderful life together!!! 💐",
            "Congraaaaatsss ☺",
            "I wish your presence at  our wedding function on 11th June 2015 at \"Sadhoo Kalyana Mandapam\", Thana, Kannur 😄 <br/><img class='mapimg' src='static/img/mapm.jpg'/>",
            "Sure I will be there!!! 😄",
            "Also you are invited on 10th June 2015 evening to my house 🏡( \"Ambadi\", Nr.Rajendranagar colony, Podikundu, Kannur)  for the evening reception. 🎉",
            "Sure we will have a nice time!!! ☺",
            "😄😄😄<br/><img class='wcard' src='static/img/twc.jpg'/>"
        ],
    }
]
newtabcount = 0
contact_shown = 0
cuid = 0
$(document).ready(function(){
    setTimeout(asktclick, 3000)
});

$(document).on("click",".contactswrapper",function(){
    // $("#first").hide()
    // $("#second").show()
    // $("#third").hide()
    // $("#cvchatcontainer").scrollTop(10000)
    
    $("#first").hide()
    $("#third").hide()
    $("#second").show()
    newtabcount++
    setTimeout(amimatesend,7000,newtabcount)
    uid = $(this).attr("id");
    cuser = users[parseInt(uid)]
    cuid = uid
    $("#cvpic").attr("src",cuser["img"])
    $("#cvpronametxt").text(cuser['name'])
    if(cuser["cp"] == -1){
        $("#cvprostatus").text("typing...");
        setTimeout(next_chat, 2000, cuser, newtabcount);
    }
    else{
        for (i=0;i<=cuser["cp"];i++){
            if (i%2 == 0){
                $("#cvchatcontainer").append(left_bubble(cuser["chat"][i]))
            }
            else{
                $("#cvchatcontainer").append(right_bubble(cuser["chat"][i], i))
            }
        }
        if (cuser["cp"] % 2 == 0)
            typewite(cuser["chat"][cuser["cp"]+1], newtabcount)
    }
    $("#cvchatcontainer").scrollTop(10000)
});
$(document).on("click","#cvpic",function(){
    $("#cvchatinp").text("");
    showfirst();
});
$(document).on("click","#cvproname",function(){
    showcontact()
});
$(document).on("click","#moption",function(){
    showcontact()
});

$(document).on("click", "#lftarrow", function(){
    $("#cvchatinp").text("");
    showfirst();
});
function amimatesend(ntabc){
    if (cuser["cp"] == 0 && newtabcount==ntabc){
        $("#inpvoice").attr("src", "static/img/sendanim1.gif")
    }
}
$(document).on("click","#inpvoice", function(){
    if (cuser["chat"][cuser['cp']+1] == $("#cvchatinp").text()){
        $("#inpvoice").attr("src", "static/img/voice.png");
        next_chat(cuser, newtabcount);
        $("#cvchatinp").text("");      
    }

});
$(document).on("click", ".mapimg", function(){
    window.open(
        "https://www.google.com/maps/place/Sadhoo+Kalyana+Mandapam,+Thana,+Kannur,+Kerala+670002,+India/@11.875182,75.382115,17z",
         '_blank'
        ).focus();
})


$(document).on("click", "#proopts", function(){
    showsecond();
});
function asktclick(){
    if(users[0]["cp"] == -1 && users[1]["cp"] == -1 ){
        $(".mnstatus").text("click here to start")
    }
    
}
function showfirst(){
    newtabcount++
    if (cuser['cp'] % 2 == 1){
        cuser['cp']++
    }
    $("#first").show()
    $("#second").hide()
    $("#third").show()
    $("#cvchatcontainer").html("")
}

function showcontact(){
    $("#probigimgc").css("background", "url("+cuser["fullimg"]+")")
    $("#probigimgc").css("background-size", "100%")
    $("#proname").text(cuser['name'])
    $("#statusboxcont").text(cuser['status'])
    $("#statusboxphno").text(cuser['phno'])    
    $("#first").hide()
    $("#second").hide()
    $("#third").show()
}

function showsecond(){
    $("#first").hide()
    $("#second").show()
    $("#third").hide()

}

function next_chat(u, ntc){
    if (newtabcount == ntc){
        if (u["cp"] % 2 != 0){
            u["cp"]++;
            $("#cvprostatus").text("online");
            show_left_chat(u["chat"][u["cp"]]);
            setTimeout(typewite, 2000, u["chat"][u["cp"]+1],newtabcount)
            $("#cvchatcontainer").scrollTop(10000)

        }
        else{
            u["cp"]++;
            show_right_chat(u["chat"][u["cp"]], u["cp"]);
            setTimeout(doubleTick, 1000, u["cp"]);
            setTimeout(blueTick, 2000,u, u["cp"]);
            $("#cvchatcontainer").scrollTop(10000)
        }
    }

}

function doubleTick(cp){
    $("#tick"+cp).attr("src", "static/img/greyTick.png");

}
function blueTick(u, cp){
    $("#tick"+cp).attr("src", "static/img/blueTick.png");
    $("#cvprostatus").text("typing...");
    setTimeout(next_chat, 2000, u, newtabcount);
}

function show_left_chat(msg){
    $("#cvchatcontainer").append(left_bubble(msg))
}
function show_right_chat(msg, cp){
    $("#cvchatcontainer").append(right_bubble(msg, cp))
}

function left_bubble(msg){
    return '<div class="lmsgc"><div class="lmsg">'+msg+'</div></div>'
}
function right_bubble(msg, cp){
    return '<div class="rmsgc"><div class="rmsg">'+msg+'<div><span class="msgstatus">'+getdt()+' <img class="ticks" id="tick'+cp+'" src="static/img/singleTick.png"</span></div></div></div>'
}
function typewite(txt, nts){
    if (txt){
        $("#cvchatinp").text("");
        $("#inpvoice").attr("src", "static/img/send.png")
        $.each((""+txt).split(''), function(i, letter){
            if (newtabcount == nts){
                setTimeout(function(){
                    if (newtabcount == nts){
                        $("#cvchatinp").text($('#cvchatinp').text() + letter);                    
                    }
                }, 100*i);
            }
        });
    }
}
function getdt(){
    d = new Date()
    H = d.getHours()
    m = d.getMinutes()
    a = "AM"
    if (H == 0){
        H = 12
    }
    else if (H > 12){
        H = H-12
        a = "PM"
    }
    return H+":"+m+" "+a
}
