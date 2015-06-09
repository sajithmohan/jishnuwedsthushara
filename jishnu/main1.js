
    users = [
        {
            "name": "Jishnu Janardhanan",
            "img": "img/pp.jpg",
            "phno": "9809793767",
            "chat": [
                "j0 hi",
                "me1 dknsdkjnsdvsdvbsvhjvbsvhi",
                "j2 dbvsjhdbvshbvsjhbvsvbsjhv",
                "me3 Kurukan naatil alle",
                "j4 thanks"
            ],
            "cp":0,
        },
        {
            "name": "Thushara Aravind",
            "img": "img/pp1.jpg",
            "phno": "8147387176",
            "cp":0,
            "chat": [
                "T0 hi",
                "f1 hi",
                "T2 Ok kanmani,11 am Maheshwari anyone coming?",
                "f3 oh..grt :-)",
                "T4 thanks"
            ],
        }
    ]
    contact_shown = 0
    newtabselected = 0

    $(document).ready(function(){
        setTimeout(hide_loading, 1000);
        $(".close").click(function(){
            hideinfo(1)
        });

    });

    $(document).on('click',"#senderpic",function(){
        if (contact_shown){
            hideinfo(1)
        }
        else{
            showinfo(1);
        }
            
    });

    $(document).on('click', ".histusers", function(){
        uid = $(this).attr('id');
        cuser = users[parseInt(uid)]
        newtabselected ++
        dispaly_chat(cuser)
        $("#chatsend").attr("senderid", uid)
        if(cuser['cp'] == 0){
            statuson("typing...")
            setTimeout("beginchat(cuser)", 2000);
        }
        else{
            for (i=0;i<cuser["cp"];i++){
                if (i%2 == 0){
                    $("#chatcontainer").append(createleftbubble(cuser["chat"][i]))
                }
                else{
                    $("#chatcontainer").append(createrightbubble(cuser["chat"][i],0))
                }
            }
            if (cuser["cp"] % 2 == 1)
                typewite(cuser["chat"][cuser["cp"]], newtabselected)

        }
        
    });
    $(document).on("click","#chatsend", function(){
        var uid = $(this).attr('senderid')
        cuser = users[parseInt(uid)]
        if (cuser["cp"]%2 == 1 && cuser["chat"][cuser["cp"]] == $("#chatinput").text()){
            $("#chatcontainer").append(createrightbubble(cuser["chat"][cuser["cp"]],cuser["cp"],1))
            setTimeout("doubleTick(cuser['cp'])",1000)
            setTimeout("blueTick(cuser)", 3000)
            $("#chatinput").text("")
        }
    })
    function doubleTick(cp){
        $("#tick"+cp).attr("src","img/greyTick.png");
    }
    function blueTick(usr){
        console.log("users[parseInt(uid)]",users[parseInt(uid)])
        console.log($("#tick"+usr["cp"]))
        $("#tick"+usr["cp"]).attr("src","img/blueTick.png")
        usr["cp"]++
        statuson("typing...")
        setTimeout(beginchat, 2000, usr);
    }

    function typewite(txt, nts){
        // nt = nts
        $.each(txt.split(''), function(i, letter){
            setTimeout(function(){
                if (newtabselected == nts){
                    console.log(newtabselected, nts)
                    $("#chatinput").text($('#chatinput').text() + letter);                    
                }

            }, 100*i);
        });
    }
    function hide_loading() {
        $("#spinner_wraper").hide()
        $("#content").show()
        $("#chatcontainer").scrollTop(10000);
    }
    function dispaly_chat(u){
        $("#centercontent").hide()
        $("#centercontent").html(createchat(u))
        $("#senderpic").css("background", "url("+u["img"]+")")
        $("#centercontent").show()
    }
    function beginchat(u){
        if (u['name'] == users[uid]["name"]){
            $("#chatcontainer").append(createleftbubble(u["chat"][u['cp']]))
            statusdefault(u)
            u["cp"]++;
            typewite(u["chat"][u["cp"]], newtabselected)
        }
    }
    function statuson(status){
        $("#userlastseen").text(status)
        $("#"+uid).children("div.userinfo").children("div.lastseen").text(status)
    }
    function statusdefault(u){
        $("#userlastseen").text("online")
        $("#"+uid).children("div.userinfo").children("div.lastseen").text(u["chat"][u["cp"]].substring(0,10))
    }
    function createleftbubble(content){
        return '<div class="lmsgc"><div class="lmsg">'+content+'<div><span class="msgstatus">'+getdt()+'</span></div></div></div>'
    }
    function createrightbubble(content, cp , newmsg){
        src = "img/blueTick.png"
        if (newmsg){
            src= "img/singleTick.png"
        }
        return '<div class="rmsgc"><div class="rmsg">'+content+'<div><span class="msgstatus">'+getdt()+'<img id="tick'+cp+'"  src="'+src+'"></span></div></div></div>'
    }
    function createchat(u){
            return '<div class="content_head"><div id="senderpic" class="senderpic"></div><div id="sendertitle"><div class="name">'+u['name']+'</div><div class="lastseen" id="userlastseen">online</div></div><span id="option_uesr"><img src="img/attach.png"><img src="img/menu.png"></span></div><div id="chatwrapcontainer"><div id="chatcontainer"></div></div><div id="chatinputbox"><svg id="smiely" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="smiley" x="2580" y="2629"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23C23.02 6.033 18 1.01 11.804 1.01zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547 5.273 0 9.548 4.275 9.548 9.548 0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z" opacity=".4"/></svg><textarea disabled id="chatinput"></textarea><svg id="chatsend" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="send" x="2500" y="2549"><path opacity=".4" d="M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"/></svg></div>'
    }
    function showinfo(u){
        contact_shown = 1
        $(".right_content").show();
        $(".right_content").animate({
            width: "30%"
        });
        $(".center_content").css("width", "69%")
        $(".center_content").animate({
            width: "39.8%"
        });
    }
    function hideinfo(u){
        contact_shown = 0
        $(".right_content").animate({
            width: "0px"
        });
        // $(".center_content").css("width", "69%")
        $(".center_content").animate({
            width: "69.8%"
        },function(){
            $(".right_content").hide();
        });
    }
    function getdt(){
        d = new Date()
        H = d.getHours()
        m = d.getMinutes()
        a = "AM"
        if (H > 12){
            H = H-12
            a = "PM"
        }
        return H+":"+m+" "+a
    }