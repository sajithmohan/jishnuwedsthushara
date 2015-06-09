users = [
    {
        "name": "Jishnu Janardhanan",
        "img": "static/img/jfull.jpg",
        "fullimg": "static/img/jfull.jpg",
        "status": 'Finally u r mine<img class="emoji" src="static/img/emprincess.png">',
        "phno": "+919538062781",
        "chat": [
            'Hey.....<img class="emoji" src="static/img/emhand.png">',
            'Hi Jishnuuu...<img class="emoji" src="static/img/emhand.png"> How are you???',
            'Doing good<img class="emoji" src="static/img/emsmile.png"> And have a special news to share<img class="emoji" src="static/img/emsmile.png">,  It\'s my marriage<img class="emoji" src="static/img/emparty.png"><img class="emoji" src="static/img/emfirework.png">',
            'Wow... Great news<img class="emoji" src="static/img/emok.png"><img class="emoji" src="static/img/emok.png"><img class="emoji" src="static/img/emok.png"><img class="emoji" src="static/img/emclapping.png"><img class="emoji" src="static/img/emclapping.png">',
            'I wish your presence when me and Thushara <img class="emoji" src="static/img/emcheart.png"> tie a knot on June 11 th at sadhoo kalyanamandapam, kannur ...<br/><img class="mapimg" src="static/img/map.jpg"/>',
            'Sure!!!! I am really excited and will join the wedding party<img class="emoji" src="static/img/emparty.png"><img class="emoji" src="static/img/emparty.png">',
            '<img class="emoji" src="static/img/emsmile.png"><img class="emoji" src="static/img/emsmile.png"><img class="emoji" src="static/img/emsmile.png"><br/><img class="wcard" src="static/img/jwc.jpg"/>',
        ],
        "cp":-1,
    },
    {
        "name": "Thushara Aravind",
        "img": "static/img/thushara.jpg",
        "fullimg": "static/img/thushara.jpg",
        "status": '<img class="emoji" src="static/img/emparty.png"><img class="emoji" src="static/img/emparty.png">Wedding bells are ringing<img class="emoji" src="static/img/emsmile.png"><img class="emoji" src="static/img/opensmile.png">',
        "phno": "+918147036889",
        "cp":-1,
        "chat": [
            'Heloo!!!  <img class="emoji" src="static/img/emsmile.png">',
            'Hi Thushara!!!<img class="emoji" src="static/img/emhand.png"> Wats up???',
            'The day has come when Jishnu and Me are taking a step forward to begin a wonderful life together!!! <img class="emoji" src="static/img/heartsmile.png">',
            'Congraaaaatsss<img class="emoji" src="static/img/emok.png">',
            'I wish your presence at our wedding function on 11th June 2015 at "Sadhoo Kalyana Mandapam", Thana, Kannur<img class="mapimg" src="static/img/mapm.jpg"/>',
            'Sure I will be there!!! <img class="emoji" src="static/img/opensmile.png">',
            'Also you are invited on 10th June 2015 evening to my house ( "Ambadi", Nr.Rajendranagar colony, Podikundu, Kannur)  for the evening reception.',
            'Sure we will have a nice time!!! <img class="emoji" src="static/img/emsmile.png">',
            '<img class="emoji" src="static/img/opensmile.png"><img class="emoji" src="static/img/opensmile.png"><img class="emoji" src="static/img/opensmile.png"><br/><img class="wcard" src="static/img/twc.jpg"/>'
        ],
    }
]
contact_shown = 0
newtabcount = 0

$(document).ready(function(){
    timeout = 5000
    getdaydiff()
    setTimeout(hide_loading, timeout);
    setTimeout(asktclick, timeout+4000)

});
$(document).on("click", ".mapimg", function(){
    window.open(
        "https://www.google.com/maps/place/Sadhoo+Kalyana+Mandapam,+Thana,+Kannur,+Kerala+670002,+India/@11.875182,75.382115,17z",
         '_blank'
        ).focus();
})

$(document).on('click', ".histusers", function(){
    var uid = $(this).attr('id');
    newtabcount++
    if (typeof(cuser) != "undefined" && cuser["cp"] % 2 == 1)
        cuser["cp"]++
    cuser = users[parseInt(uid)]
    
    cuid = uid
    dispaly_chat(cuser)
    setTimeout(askclk, 5000, newtabcount);
    $("#chatwrapcontainer").css("height","80%");
    $("#chatsend").attr("senderid", uid)
    $("#chatsendi").attr("senderid", uid)
    if (contact_shown){
        hideinfo(cuser)
    }
    if(cuser['cp'] == -1){
        statuson("typing...")
        setTimeout(beginchat, 2000, cuser, -1);
    }
    else{
        for (i=0;i<=cuser["cp"];i++){
            if (i%2 == 0){
                $("#chatcontainer").append(createleftbubble(cuser["chat"][i]))
            }
            else{
                $("#chatcontainer").append(createrightbubble(cuser["chat"][i],0))
            }
        }
        if (cuser["cp"] % 2 == 0)
            typewite(cuser["chat"][cuser["cp"]+1], newtabcount)
        else
        $("#chatcontainer").scrollTop(10000);
    }
});
$(document).on("click","#chatsend", function(){
    if (cuser["cp"]%2 == 0 && cuser["chat"][cuser["cp"]+1] == $("#chatinput").html()){
        cuser["cp"]++
        $("#chatcontainer").append(createrightbubble(cuser["chat"][cuser["cp"]],cuser["cp"],1))
        setTimeout(doubleTick,1000, cuser);
        setTimeout(blueTick, 3000, cuser);
        $("#chatinput").text("");
        $("#chatcontainer").scrollTop(10000);
    }
});
$(document).on("click","#chatsendi", function(){
    if (cuser["cp"]%2 == 0 && cuser["chat"][cuser["cp"]+1] == $("#chatinput").html()){
        cuser["cp"]++
        $("#chatcontainer").append(createrightbubble(cuser["chat"][cuser["cp"]],cuser["cp"],1))
        $("#chatsendi").attr("src", "/static/img/send1.png");
        setTimeout(doubleTick,1000, cuser);
        setTimeout(blueTick, 3000, cuser);
        $("#chatinput").text("");
        $("#chatcontainer").scrollTop(10000);
    }
});
$(document).on('click',"#senderpic",function(){
    if (contact_shown){
        hideinfo(cuser)
    }
    else{
        showinfo(cuser);
    }
});

$(document).on("click",".close",function(){
            hideinfo(1)
        });

function doubleTick(u){
    if(cuser['name'] == u["name"]){
        $("#tick"+(cuser["cp"])).attr("src","static/img/greyTick.png");       
    }
}

function askclk(ntc){
    if (newtabcount==ntc){
        $("#chatsendc").html("<img id='chatsendi' src='static/img/sendanim.gif'/>")        
    }
}
function asktclick(){
    if(users[0]["cp"] == -1 && users[1]["cp"] == -1 ){
        $(".lastseen").html("<span class='red'>click here to start</span>")
    }
    
}

function blueTick(u){
    if(cuser['name'] == u["name"]){
        $("#tick"+(u["cp"])).attr("src","static/img/blueTick.png")
        statuson("typing...")
        setTimeout(beginchat, 2000, cuser, cuser['cp']);
    }
}

function beginchat(u, cp){
    if (u['name'] == cuser["name"] && cuser["cp"]== cp){
        u["cp"]++;
        $("#chatcontainer").append(createleftbubble(u["chat"][u['cp']]))
        statusdefault(u)
        setTimeout(typewite,2000, u["chat"][u["cp"]+1], newtabcount)
        $("#chatcontainer").scrollTop(10000);
    }
}

function statuson(status){
    $("#userlastseen").text(status)
    $("#"+cuid).children("div.userinfo").children("div.lastseen").html(status)
}

function statusdefault(u){
    $("#userlastseen").text("online")
    $("#"+cuid).children("div.userinfo").children("div.lastseen").html(u["chat"][u["cp"]].substring(0,10))
    if ($("#"+cuid).children("div.userinfo").children("div.lastseen").text().length<3){
        $("#"+cuid).children("div.userinfo").children("div.lastseen").html(u["chat"][u["cp"]])
    }
}

function createleftbubble(content){
    return '<div class="lmsgc"><div class="lmsg">'+content+'<div><span class="msgstatus">'+getdt()+'</span></div></div></div>'
}

function createrightbubble(content, cp , newmsg){
    src = "static/img/blueTick.png"
    if (newmsg){
        src= "static/img/singleTick.png"
    }
    return '<div class="rmsgc"><div class="rmsg">'+content+'<div><span class="msgstatus">'+getdt()+'<img id="tick'+cp+'"  src="'+src+'"></span></div></div></div>'
}

function dispaly_chat(u){
    $("#centercontent").hide()
    $("#centercontent").html(createchat(u))
    $("#senderpic").css("background", "url("+u["img"]+")")
    $("#senderpic").css("background-size", "cover")
    $("#centercontent").show()
}

function createchat(u){
        return '<div class="content_head"><div id="senderpic" class="senderpic"></div><div id="sendertitle"><div class="name">'+u['name']+'</div><div class="lastseen" id="userlastseen">online</div></div><span id="option_uesr"><img src="static/img/attach.png"><img src="static/img/menu.png"></span></div><div id="chatwrapcontainer"><div id="chatcontainer"></div></div><div id="chatinputbox"><svg id="smiely" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="smiley" x="2580" y="2629"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23C23.02 6.033 18 1.01 11.804 1.01zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547 5.273 0 9.548 4.275 9.548 9.548 0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z" opacity=".4"/></svg><div disabled id="chatinput"></div><div id="chatsendc"><img id="chatsendi" src="static/img/send1.png"/></div></div>'
}

function hide_loading() {
    $("#spinner_wraper").hide()
    $("#content").show()
    $("#chatcontainer").scrollTop(10000);
}

function hideinfo(){
    contact_shown = 0
    $(".right_content").animate({
        width: "0px"
    });
    $(".center_content").animate({
        width: "69.8%"
    },function(){
        $(".right_content").hide();
    });
}

function showinfo(u){
    contact_shown = 1
    $("#profullpic").css("background", "url("+u["fullimg"]+")");
    $("#profullpic").css("background-size", "cover");
    $("#statustxt").html(u["status"])
    $("#phonetxt").text(u["phno"])
    $(".right_content").show();
    $(".right_content").animate({
        width: "30%"
    });
    $(".center_content").css("width", "69%")
    $(".center_content").animate({
        width: "39.8%"
    });
}

function typewite(txt, nts){
    txts = txt;
    if (txt){
        txt = txt.replace(/<\/?[^>]+(>|$)/g, "");
        ci=0;
        for (i=0; i<=txt.length; i++){
            if (newtabcount == nts){
                setTimeout(function(){
                    if (newtabcount == nts){
                        $("#chatinput").html(txt.substring(0,ci++));                    
                    }
                }, 100*i);
            }
        }
        setTimeout(function(){
            $("#chatinput").html(txts)
        }, 100*i);      
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

function getdaydiff(){
    d1 = new Date()
    d2 = new Date("2015-06-11")
    diff = new Date(d2-d1)
    left = Math.ceil(diff/1000/60/60/24)
    if (left<0){
        $("#countdowntxt").text("")
    }
    else if (left==0){
        $("#countdowntxt").text("Today")
    }
    else if (left == 1){
      $("#countdowntxt").text("Tomorrow")  
    }
    else{
        $("#countdowntxt").text(left+" days left")   
    }
}