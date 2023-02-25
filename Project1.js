$(document).ready(function(){

    var city=[
        {
            "name":"Phnom Penh",
            "dis":[
                {"name":"7 Makara","com":["Monorom","Mittapheap","Veal Vong","Orussey I","Orussey II","Orussey III","Orussey IV","Boeung Prolit"]},
                {"name":"Doun Penh","com":["Srah Chak","Wat Phnom","Phsar Chas","Phsar Kandal I","Chaktomuk","Phsar Thmey I"]},
                {"name":" Boeng Keng Kang","com":["Boeng Keng Kang II","Olampik","Tumnob Tuek","Tuol Svay Prey I","Tuol Svay Prey II"]},
                {"name":"Kamboul","com":["Kamboul","Kantouk","Ovlaok","Snaor","Phleung Chheh Roteh","Boeng Thum","Prateah Lang"]},
                {"name":"Chamkar Mon","com":["Tonle Bassac","Boeung Keng Kang II","Boeung Trobaek","Tumnob Teuk","Phsar Daem Thkov"]}
            ]
        },
        {
            "name":"Kompot",
            "dis":[
                {"name":"Kompong Trach","com":["Phnom Prasat","Svay Tong Khang Tboung","Ruessei Srok Khang Lech"]},
                {"name":"Chhouk","com":["Krang Snay","Dechou Akphivoadth","Doun Yay","Satv Pong ","Trapeang Bei "]},
                {"name":"Dang Tong","com":["Angk Romeas","Dang Tong","Khcheay Khang Tboung","Damnak Sokram"]}
            ]
        }
    ];

    getCity();
    function getCity(){
        var txt=' <option value="-1">Select City</option>';
        city.forEach((e,i)=>{
            txt+=`
                <option value="${i}">${e['name']}</option>
            `;
        })
        $('#btn-city').html(txt);
    }
    var city_in;
    $('#btn-city').change(function(){
        var i=$(this).val();
        city_in=$(this).val();
        var dist=city[i]['dis'];
        var txt=' <option value="-1">Select District</option>';
        dist.forEach((e,i)=>{
            txt+=`
                <option value="${i}">${e['name']}</option>
            `;
        })
        $('#btn-district').html(txt);
    })
    $('#btn-district').change(function(){
        var i=$(this).val();
        var coms=city[city_in]['dis'][i]['com'];
        var txt='<option value="-1">Select Commune</option>';
        coms.forEach((e)=>{
            txt+=`
                <option value="">${e}</option>
            `;
        });
        $('#btn-commune').html(txt);
    })
    // var items=[
    //    {"name":'fa-solid fa-bars',"color":"red"},
    //    {"name":"fa-solid fa-house"},
    //     {"name":'Appple', "color":"#067d68"},
    //     {"name":'Google',"color":"#a96f44"},
    //     {"name":'Meta',"color":"#ef96c5"},
    //     {"name":'Microsoft',"color":"#dafea4"},
    //     {"name":'SpaceX',"color":"#07a3b2"},
    //     {"name":'Amazon',"color":"#58126a"},
    //     {"name":'Alphabet',"color":"#9fa5d5"},
    //     {"name":'Samsung',"color":"#e65758"}
    // ]
    var items=[
        {
            "name":'Appple', "color":"#067d68","img":"3.jpg","img1":"9.jpg","sub":[{"name":"Apple1","sub":["Apple1-1","Apple1-2","Apple1-3"]},{"name":"Apple2","sub":["Apple2-1","Apple2-2","Apple2-3"]},{"name":"Apple3","sub":["Apple3-1","Apple3-2","Apple3-3"]}]
        },
        {
            "name":'Google',"color":"#a96f44","img":"4.jpg","img1":"10.jpg","sub": [{"name":"Google1","sub":["Google1-1","Google1-2"]},{"name":"Google2","sub":["Google2-1","Google2-2"]},{"name":"Google3","sub":["Google3-1","Google3-2"]}]
        },
        {
            "name":'Meta',"color":"#ef96c5","img":"1.jpg","img1":"11.jpg","sub":[{"name":"Meta1","sub":["Meta1-1","Meta1-2","Meta1-3"]},{"name":"Meta2","sub":["Meta2-1","Meta2-2","Meta2-3"]},{"name":"Meta3","sub":["Meta3-1","Meta3-2","Meta3-3"]}]
        },
        {
            "name":'Microsoft',"color":"#dafea4","img":"2.jpg","img1":"12.jpg","sub":[{"name":"Microsoft1","sub":["Microsoft1-1","Microsoft1-2","Microsoft1-3"]},{"name":"Microsoft2","sub":["Microsoft2-1","Microsoft2-2","Microsoft2-3"]},{"name":"Microsoft3","sub":["Microsoft3-1","Microsoft3-2","Microsoft3-3"]}]
        },
        {
            "name":'SpaceX',"color":"#07a3b2","img":"7.jpg","img1":"13.jpg","sub":[{"name":"SpaceX1","sub":["SpaceX1-1","SpaceX1-2","SpaceX1-3"]},{"name":"SpaceX2","sub":["SpaceX2-1","SpaceX2-2","SpaceX2-3"]}]
        },
        {
            "name":'Amazon',"color":"#58126a","img":"8.jpg","img1":"14.jpg","sub":[{"name":"Amazon1","sub":["Amazon1-1","Amazon1-2","Amazon1-3"]},{"name":"Amazon2","sub":["Amazon2-1","Amazon2-2","Amazon2-3"]}]
        },
        {
            "name":'Meta',"color":"#ef96c5","img":"1.jpg","img1":"11.jpg","sub":[{"name":"Meta1","sub":["Meta1-1","Meta1-2","Meta1-3"]},{"name":"Meta2","sub":["Meta2-1","Meta2-2","Meta2-3"]},{"name":"Meta3","sub":["Meta3-1","Meta3-2","Meta3-3"]}]
        },
        {
            "name":'Microsoft',"color":"#dafea4","img":"2.jpg","img1":"12.jpg","sub":[{"name":"Microsoft1","sub":["Microsoft1-1","Microsoft1-2","Microsoft1-3"]},{"name":"Microsoft2","sub":["Microsoft2-1","Microsoft2-2","Microsoft2-3"]},{"name":"Microsoft3","sub":["Microsoft3-1","Microsoft3-2","Microsoft3-3"]}]
        }
    ]

    //getFriend();
    getImg();
    function getImg(){
        var txt='';
        items.forEach((e)=>{
            txt+=`
                    <div class="col-xl-3 item-box">
                        <div class="box">
                            <img src="${e['img1']}" alt="">
                            <span>${e['name']}</span>
                        </div>
                    </div>
            `
        })
        $('.imgbox').find('.row').html(txt);
    }

    $('.fri-box').on("click",'h1', function(){
        var P=$(this).parent();
        // alert(P.height());
        if(P.height()==300){
             P.css({"height":"40px"});
        }else{
             P.css({"height":"300px"});
        }
    })

    //view image
    $('.imgbox').on("click",".item-box .box",function(){
        var eThis=$(this);
        var img=eThis.find('img').attr('src');
        var frm=`
                    <div class="popup1">
                        <div class="view-img">
                            <img src="${img}" alt="">
                            <i class="fa-solid fa-xmark btn-close"></i>
                        </div>
                    </div>
        `;
        $('body').append(frm);
    })
    //button close
    $('body').on("click",'.popup1 .btn-close', function(){
        $(this).parents('.popup1').remove();
    })

    //chat box
    $('.fri-box').on("click",'ul li', function(){
        var eThis=$(this);
        var id=eThis.index();
        var img=eThis.find('img').attr('src');
        var name=eThis.find('span').text();
        var chatBox=`
                        <div class="chat-box" id='c${id}'>
                            <div class="chat-head">
                                <img src="${img}" alt="">
                                <span>${name}</span>
                                <i class="fa-solid fa-xmark btn-close-chat"></i>
                            </div>
                        </div>
        `;
        var num=$('.chat').find('#c'+id);
        var chat=$('.chat').find('.chat-box');
        if(num.length==0){
            $('.chat').append(chatBox);
            if(chat.length==4){
                $('.chat').find('.chat-box').eq(0).remove();
            }
        }
       
    })
    $('.chat').on("click", '.chat-box .chat-head .btn-close-chat', function(){
        $(this).parents('.chat-box').remove();
    })

   getfri();
   function getfri(){
    var txt ="";
    items.forEach((e)=>{
        txt+=`
                <li>
                    <img src="${e['img1']}" alt="">
                    <span>${e['name']}</span>
                </li>
        `
    });
    $('.fri-box').find('ul').append(txt);
   }
   

    getItem();
    function getItem(){
        txt="";
        items.forEach((e)=>{
            var sub=e['sub'];
            var txt2='';
            sub.forEach((e2)=>{
                var sub2=e2['sub'];
                var txt3='';
                sub2.forEach((e3)=>{
                    txt3+=`
                        <li>
                            <a href="">${e3}</a>
                        </li>
                    `
                });
                txt2+=`
                    <li>
                        <a href="">${e2['name']}</a>
                            <ul class="sub2">
                                 ${txt3}
                            </ul>
                    </li>
                `
            });
            txt+=`
            <li>
            <a href="" style=""color:${e['color']}>${e['name']}</a>
            <ul class="sub">
                ${txt2}
            </ul>
        </li>
            `
        })
        $('.menu').find('ul').append(txt);
    }
    var popup=" <div class='popup'></div>";
    $('#btn1').click(function(){
        $('.left-menu').css({"left":"0"});
        $('body').append(popup);
    })
    $('body').on("click",".popup",function(){
        $(this).remove();
        $('.left-menu').css({"left":"-200px"});
    })
    getMenu();
    function getMenu(){
        var txt='';
        items.forEach((e)=>{
            txt+=`
                <li>
                    <a href="">${e['name']}</a>
                </li>
            `
        });
        $('.left-menu').find('ul').html(txt);
    }
    getMenu1();
    function getMenu1(){
        txt='';
        items.forEach((e)=>{
            // var sub=e['sub'];
            // var txt2='';
            // sub.forEach((e2)=>{
            //     txt2+=`
            //         <li>
            //             <a href="">${e2['name']}</a>
            //         </li>  
            //     `
            // })
            txt+=`
                    <li class='m1'>
                        <a>${e['name']}   <i class="fa-solid fa-plus"></i></a>
                            
                    </li>
            `
        })
        $('.left-menu1').find('.box ul').html(txt);
    }
    $('.left-menu1').on("click",".box ul .m1",function(){
        var eThis=$(this);
        var i=eThis.index();
        var sub= items[i]['sub'];
        var txt ='';
        sub.forEach((e)=>{
            txt+=`
                <li>
                    <a href="">${e['name']}</a>
                </li>
            `
        })
        var submenu=` <ul class="sub-menu">${txt}</ul>`;
        if(eThis.find('.sub-menu').length==0){
            eThis.append(submenu);
            eThis.find('i').removeClass("fa-plus");
            eThis.find('i').addClass("fa-minus");
        }
        else{
            if(eThis.find(".fa-minus").length>0){
                eThis.find('.sub-menu').slideUp();
                eThis.find('i').addClass("fa-plus");
                eThis.find('i').removeClass("fa-minus");
            }
            else{
                eThis.find('.sub-menu').slideDown();
                eThis.find('i').removeClass("fa-plus");
                eThis.find('i').addClass("fa-minus");
            }
        }
    })
    setInterval(
        function () {element.innerHTML += "Hello"}
        , 5000
        );
        //Auto slide
        var myslide = setInterval(function(){
            nextslide();
        },2000);
        //stop auto slide
        $('.slide').mouseover(function(){
            clearInterval(myslide);
        })
        //Set auto slide
        $('.slide').mouseleave(function(){
            myslide = setInterval(function(){
                nextslide();
            },2000);
        })
        function nextslide(){
            slide.eq(ind).hide();
            $('.pageination').find('li').eq(ind).removeClass('active');
            ind++;
            if(ind==num){
                ind=0;
            }
            slide.eq(ind).show();
            $('.pageination').find('li').eq(ind).addClass('active');
        }
   
    getslide();

    var slide=$('.slide1');
    var ind=0;
    var num=slide.length;
    slide.hide();
    slide.eq(ind).show();
    //Next
    $('.btnnext').click(function(){
      nextslide();
    })
    $('.btnback').click(function(){
        slide.eq(ind).hide();
        $(this).parent().find('li').eq(ind).removeClass('active');
        ind--;
        if(ind<0){
            ind=num-1;
        }
        slide.eq(ind).show();
        $(this).parent().find('li').eq(ind).addClass('active');
    })
    // getslide();
    function getslide(){
        var txt='';
        var x=0;
        var txt2='';
        var liactive='';
        items.forEach((e,i)=>{
            x++;
            liactive='';
            if(i==0){
                liactive="active";
            }
            txt+=`
                    <div class="slide1">
                        <img src="${e['img']}" alt="">
                        <h1>${e['name']}</h1>
                        <div class="box1">
                            <span>${x}</span>/ <span>${items.length}</span>
                        </div>
                    </div>
            `
            txt2+=`<li class='${liactive}'>${x}</li>`;
        });
        $('.slide').find('.box').append(txt);
        $('.pageination').html(`<ul>${txt2}</ul>`);
    }
    $('.pageination').on("click","ul li",function(){
        slide.eq(ind).hide();
        $(this).parent().find('li').eq(ind).removeClass('active');
        ind=$(this).index();
        slide.eq(ind).show();
        $(this).addClass('active');
    })
});