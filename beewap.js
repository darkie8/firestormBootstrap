var contJSON= {
	"contact": [{
            "name": "Android1",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen 2.05 am",
            "time": "3.09 am"
            
        },
		{
            "name": "Android2",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen 1.00 am",
            "time": "today"

        },
		{
            "name": "Android3",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen yeesterday 2.05 pm",
            "time": "yesterday"
            
		},
		{
            "name": "Android4",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen 4.00 am",
            "time": "03/05/18"

        },
		{
            "name": "Android5",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen 03/05/18",
            "time": "03/05/18"

        },
		{
            "name": "Android6",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen 1.00 am",
            "time": "05/05/18"

        },
		{
            "name": "Android7",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen 9.00 am",
            "time": "08/02/18"

        },
		{
            "name": "Android8",
            "messages":[],
            "number": "#####",
            "last_seen": "last seen 10.00 am",
            "time": "04/01/18"

        }
	],
	"readChoice": ["Mark as unread", "Mark as read"]
}

// declared an array
    let p = [];
     let a = []
     let A;
     // declared p,a,A local var arrays
     
     // for loop and push method to create an array of trues
     for(k=0;k<8;k++){
         a.push(true)
         if(a[k]==true){
            A= contJSON.readChoice[0]; // if array element is true 
         }
         else{
            A= contJSON.readChoice[1];// if array elemnt is false
         }
     }
     console.log(a) 
    var n = false
   // initaiting jquerry library 
  $(document).ready(function(){
    $(window).resize(function(){location.reload();});
    // starting for loop
    for(let i =1;i<9;i++)
    { 
      // add certain html in level1 id
        $(`#level`).append(`<div class="row">

    <div class="col-12 d-flex px-2 flex-row align-items-center py-3 kiop gama drooid stuart${i}" id="pix${i}">
        
        <div class="py-3 px-3 rounded-circle picture${i} lambda"></div>
        <p class="text-left my-auto Awrt1 px-2 pl-3 ">${contJSON.contact[i-1].name}<br> 
            <small class="text-left Awrt sailormoon1">loptgfvgh ghvghv hgfvhg</small></p>
            <div class="pix${i} ml-auto le Awrt"><small class="Awrt sailormoon1">${contJSON.contact[i-1].time}</small></div>
    </div>`);
    $(`.picture${i}`).css(`background`,`url(static/A${i}.jpg)`);
    // add certain html in pix${i} class
    $(`.pix${i}`).append(`
    <div class="dropdown ken d-flex justify-content-center be">
    <button type="button" class="btn btn-link  pr-1" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-angle-down"></i>
        </button>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#2p" id="pork${i}" href="#">Stories</a>
        <a class="dropdown-item reUn${i}" href="#" id="reUn${i}">${A}</a>
      </div>
    </div> `);
    // making carousel for story part
    $(`#pork${i}`).click(function () { 
        $(`.set`).html(`<p style="font-size:1.5vmax;color:white">Stories</p><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex justify-content-center align-items-center bg-dark" style=height: 100% !imortant"><img class="d-block" src="static/A${i}.jpg" style="height: 60vmin;width:60vmin !important" alt="First slide"></div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center bg-dark" style=height: 100% !imortant"><img class="d-block" src="static/A${i}.jpg" style="height: 60vmin;width:60vmin" alt="Second slide"></div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center bg-dark" style=height: 100% !imortant"><img class="d-block" src="static/A${i}.jpg" style="height: 60vmin;width:60vmin" alt="Third slide"></div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`).addClass("bg-dark").addClass("align-items-center").addClass("justify-content-center")
      $("#chat1,#chat").css({"height":"0","visibility":"hidden","overflow":"hidden"});
      $(".zeta,.zeta1").attr("src", `static/A${i}.jpg`);
      $(`.contName`).text(`${contJSON.contact[i-1].name}`);
        $(`.number`).text(`${contJSON.contact[i-1].number}`);
        $(`.lstSeen`).text(`${contJSON.contact[i-1].last_seen}`);
    });
    // redirecting to chat from contacts
    $(`.printcont`).append(`<div class="row">
    <a href="#2p" class ="dir" style="text-decoration:none;color:white;width:100%">
        <div class="col-12 d-flex flex-column bg-info dir" style="color: beige" id="sol${i}">
            
            <p class="ASwrt">${contJSON.contact[i-1].name}</p>
            <p class="Aswrt1">${contJSON.contact[i-1].number}</p>
        </div>
    </a>
</div>
<br>
</div> `);
    $(`.ken`).on({
         click: function(){ n= true}, // if dropdown is clicked..n=true
         mouseleave: function(){n= false} // if mouse leaves dropdown n=false
    });
    // #reUn${i} in dropdown class menu is clicked
    $(`#reUn${i}`).click (function(){

        // #pix${i} container will be higlighted and #reUn${i} container will be changed to unread 
        if(a[i-1]==true)
        { 
             
        $(`#pix${i}`).addClass("dreco").addClass("shadow");
             a[i-1]= false
             A= contJSON.readChoice[1];
             $(`#reUn${i}`).html(contJSON.readChoice[1]);
        }
        // #pix${i} container will be higlighted and #reUn${i} container will be changed to read 
        else {
                 
                $(`#pix${i}`).removeClass("dreco").removeClass("shadow");
                a[i-1]= true
                $(`#reUn${i}`).html(contJSON.readChoice[0]);
        }
        console.log(a)
        console.log(n)
        
         })
    $(`#sol${i}`).click(function () { 
        $(`#pix${i}`).removeClass("dreco").removeClass("shadow");
        a[i-1]= true
        $(`#reUn${i}`).html(contJSON.readChoice[0]);
        
    });
         // contact clicked
         $(`#sol${i}`).click(function () { 
             // ending the highlight if id =pix(number) is clicked 
         
        
        $(".zeta,.zeta1").attr("src", `static/A${i}.jpg`); // picture of the contact uploaded in the zeta class container
        $(`.zeta`).click(function () { 
            $(".zeta1").attr("src", `static/A${i}.jpg`);
            $("#cea1").animate({width: '160',height: '160'});
            $("#cea").animate({width: '100',height: '100'});
            
        });
        $(`.contName`).text(`${contJSON.contact[i-1].name}`);
        $(`.number`).text(`${contJSON.contact[i-1].number}`);
        $(`.lstSeen`).text(`${contJSON.contact[i-1].last_seen}`);
        $(`.set`).empty(); // to empty the prev loaded convo

     // making random chat conversation 
     // loop starts   
    for(let x =1;x<=i;x++) // increases the amount of convo with increasing order
       {$(`.set`).append(`<div class="Anushka my-3 mx-3 d-flex py-3 Awrt">
                                <div class="flex-fill wb Awrt" ><p class="mx-4 rounded w-50 Awrt">Lorem ipsum dolor sit amet consectetur.</p></div>
                                <div class="flex-fill wb Awrt" ><p class="mx-4 rounded text-right"></p></div>
                            </div>
                            <div class="Anushka my-3 mx-3 d-flex py-3 Awrt">
                                <div class="flex-fill wb Awrt" ><p class="mx-auto rounded"></p></div>
                                <div class="flex-fill wb Awrt"><p class="mx-4 rounded float-right w-50 Awrt">Lorem ipsum dolor sit amet consectetur.</p></div>
                            </div>`).removeClass("bg-dark").removeClass("align-items-center").removeClass("justify-content-center") ;
                        
                            } // for loop ends
    }); // function calling ends
             
         
         
        // id pix${i} is clicked 
        $(`#pix${i}`).click(function () {
            // if n is function wont be called
        if(n==true){
            
            return;
        }


        // ending the highlight if id =pix(number) is clicked 
        if(a[i-1]==false){
            $(this).removeClass("dreco").removeClass("shadow");
            a[i-1]= true
            $(`#reUn${i}`).html(contJSON.readChoice[0]);
            console.log(a)
        }
         
        
        $(".zeta,.zeta1").attr("src", `static/A${i}.jpg`); // picture of the contact uploaded in the zeta class container
        $(`.zeta`).click(function () { 
            $(".zeta1").attr("src", `static/A${i}.jpg`);
            $("#cea1").animate({width: '160',height: '160'});
            $("#cea").animate({width: '100',height: '100'});
            
        });
        $(`.contName`).text(`${contJSON.contact[i-1].name}`);
        $(`.number`).text(`${contJSON.contact[i-1].number}`);
        $(`.lstSeen`).text(`${contJSON.contact[i-1].last_seen}`);
        $(`.set`).empty(); // to empty the prev loaded convo

     // making random chat conversation 
     // loop starts   
    for(let x =1;x<=i;x++) // increases the amount of convo with increasing order
       {$(`.set`).append(`<div class="Anushka my-3 mx-3 d-flex py-3">
                                <div class="flex-fill wb Awrt" ><p class="mx-4 rounded w-50">Lorem ipsum dolor sit amet consectetur.</p></div>
                                <div class="flex-fill wb Awrt" ><p class="mx-4 rounded text-right"></p></div>
                            </div>
                            <div class="Anushka my-3 mx-3 d-flex py-3">
                                <div class="flex-fill wb Awrt" ><p class="mx-auto rounded"></p></div>
                                <div class="flex-fill wb Awrt"><p class="mx-4 rounded float-right w-50">Lorem ipsum dolor sit amet consectetur.</p></div>
                            </div>`).removeClass("bg-dark").removeClass("align-items-center").removeClass("justify-content-center") ;
                        
                            } // for loop ends
    }); // function calling ends

    // disapearing and reapearing the dropdown class icon
    $(`#pix${i}`).hover(function () {
        $(this).find(".ken").removeClass("be");
        
    }, function () {
        $(this).find(".ken").addClass("be");
    }
    ); // function calling ends
    

    } // for loop ends
    
    //dclaring function to see unseen effect
    let unseenInbox=()=> 
    {a.splice(0,1,false);
    a.splice(2,1,false);
    a.splice(5,1,false);
    console.log(a)
    $(`#pix1,#pix3,#pix6`).addClass("dreco").addClass("shadow")
    $(`#reUn1,#reUn3,#reUn6`).html(contJSON.readChoice[1])}
    
    // calling function to see unseen effect
    unseenInbox();
    
    // .drooid class div cont clicked=> 1st page disapeared 
    $(".drooid").click(function(){
        if(n==true){
            return;
        }
        $("#chat1,#chat").css({"height":"0","visibility":"hidden","overflow":"hidden"});
    });
    // activating in my info window
    $(`.myPix`).click(function () { 
        $(".noob").animate({width: '100%'});
        $(".jig").animate({width: '160',height: '160'});
        $(".mig").animate({width: '100',height: '100'});
        
    });
   // getting out of my info window
    $(`#prev`).click(function () { 
        $(".noob").animate({width: '0%'});
        $(".jig").animate({width: '0',height: '0'});
        $(".mig").animate({width: '0',height: '0'});
    });

    $(`.zeta`).click(function() {
        
        if($(window).width() >= 850 )
    {   // getting in the contact info window
        
        $(".io").animate({width: '60%'});
        $("#phi").css("width","40%");
        
       
    } else
    {
        // getting in the contact info window
        
            $(".io").animate({width: '0%'});
            $("#phi").css("width","100%");
            
        
    }});
   

    // getting out of the contact info window
      $(`.jigsaw`).click(function () { 
        $(".io").animate({width: '100%'});
        $("#cea1").animate({width: '0',height: '0'});
        $("#cea").animate({width: '0',height: '0'});
        
       });

    // viewing pro pix
    $(`#viewPix`).click(function () { 
        
        $(".you").html(`<img src="static/imgme.jpg" class="rounded he " width="0" height="0">`)
        $("#pictureView").animate({height: '100%'});
        $(".he").animate({width: '80vmin',height: '80vmin'});
        
    });
    // exiting pro pix view
    $(`.jigsaw1`).click(function () { 
        $("#pictureView").animate({height: '0%'});
        $(".he").animate({width: '0',height: '0'});
        $(".you").find(".zeta1").animate({width: '0',height: '0'});
        
    });
    // to see contact pix in big window
    $(`#contpro`).click(function () { 
        
        $("#pictureView").animate({height: '100%'});
        $(".you").html($(".takeshi").html())
        $(".you").find(".zeta1").removeClass("rounded-circle").addClass("rounded").animate({width: '80vmin',height: '80vmin'}); 
    });
    // main page view less that 730px
    if($(window).width()<= 730){
        $(`#1p`).removeClass("col-4").addClass("col-5");
        $(`#2p`).removeClass("col-8").addClass("col-7");
   }
    //main page view in less than 500px
    if($(window).width()<= 540 && $(window).height() <= 1000 ){
         $(`#1p`).removeClass("col-5").addClass("col-12");
         $(`#2p`).removeClass("col-7");
         $("#chat1,#chat").css({"height":"0","visibility":"hidden","overflow":"hidden"});
         $(`.je`).html(`<i class="fas fa-angle-double-left lopa"></i>`);
         
    }
    else if($(window).width()<= 1000 && $(window).height() <= 540){
        $(`.vivid`).html(`<i class="fas fas fa-wifi" data-fa-transform="shrink-8" style="color: blueviolet;width:15vmax;height:15vmax"></i>
        <i class="fas fa-circle-notch fa-spin" data-fa-transform="shrink-4" style="color:rgb(137, 201, 174);"></i>`);
        $(`.je`).html(`<i class="fas fa-angle-double-left lopa"></i>`);
        $(`.del`).css({"height": "0","opacity":"0"});
        $(`.sigma`).css("height","70vh");
        
    }
    // contacts menu
    $(`#contactsAll`).click(function () { 
            $(".toob").animate({width: '100%'});});
            
   
    // removing font page when click to access chat 
    $(`.dir`).click(function () { 
        $("#chat1,#chat").css({"height":"0","visibility":"hidden","overflow":"hidden"});
        
    });
    // going out from contacts window
    $(`.pretty,.dir`).click(function () { 
        $(".toob").animate({width: '0%'});
    });
    
    
    }); 
    
