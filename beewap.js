var contJSON= {
	"contact": [{
			"name": "Android1",
            "number": "#####",
            "last_seen": "last seen 2.05 am",
            "time": "3.09 am"
            
        },
		{
			"name": "Android2",
            "number": "#####",
            "last_seen": "last seen 1.00 am",
            "time": "today"

        },
		{
			"name": "Android3",
            "number": "#####",
            "last_seen": "last seen yeesterday 2.05 pm",
            "time": "yesterday"
            
		},
		{
			"name": "Android4",
            "number": "#####",
            "last_seen": "last seen 4.00 am",
            "time": "03/05/18"

        },
		{
			"name": "Android5",
            "number": "#####",
            "last_seen": "last seen 03/05/18",
            "time": "03/05/18"

        },
		{
			"name": "Android6",
            "number": "#####",
            "last_seen": "last seen 1.00 am",
            "time": "05/05/18"

        },
		{
			"name": "Android7",
            "number": "#####",
            "last_seen": "last seen 9.00 am",
            "time": "08/02/18"

        },
		{
			"name": "Android8",
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

    // starting for loop
    for(let i =1;i<9;i++)
    { 
      // add certain html in level1 id
        $(`#level`).append(`<div class="row">

    <div class="col-12 d-flex px-2 flex-row align-items-center py-3 kiop gama drooid" id="pix${i}">
        
        <div class="py-3 px-3 rounded-circle picture${i} lambda"></div>
        <p class="text-left my-auto Awrt px-2 pl-3 sailormoon">${contJSON.contact[i-1].name}<br>
            <small class="text-left ASwrt sailormoon1">Turn On Desktop Notification</small></p>
            <div class="pix${i} ml-auto le"><small id="df">${contJSON.contact[i-1].time}</small></div>
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
        <a class="dropdown-item" href="#">Something else here</a>
        <a class="dropdown-item" href="#" id="reUn${i}">${A}</a>
      </div>
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
                                <div class="flex-fill wb" id="cb1"><p class="mx-4 rounded w-50">Lorem ipsum dolor sit amet consectetur.</p></div>
                                <div class="flex-fill wb" id="cb11"><p class="mx-4 rounded text-right"></p></div>
                            </div>
                            <div class="Anushka my-3 mx-3 d-flex py-3">
                                <div class="flex-fill wb" id="cb1"><p class="mx-auto rounded"></p></div>
                                <div class="flex-fill wb " id="cb11"><p class="mx-4 rounded float-right w-50">Lorem ipsum dolor sit amet consectetur.</p></div>
                            </div>`) ;
                        
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
    $(`.myPix`).click(function () { 
        $(".noob").animate({width: '100%'});
        $(".jig").animate({width: '160',height: '160'});
        $(".mig").animate({width: '100',height: '100'});
        
    });
    $(`#prev`).click(function () { 
        $(".noob").animate({width: '0%'});
        $(".jig").animate({width: '0',height: '0'});
        $(".mig").animate({width: '0',height: '0'});
    });
    $(`.zeta`).click(function () { 
        $(".io").animate({width: '60%'});
        
    });
    $(`.jigsaw`).click(function () { 
        $(".io").animate({width: '100%'});
        $("#cea1").animate({width: '0',height: '0'});
        $("#cea").animate({width: '0',height: '0'});
    });
    }); 

