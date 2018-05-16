var readChoice= [`Mark as unread`,'Mark as read'] // declared an array
    let p = [];
     let a = []
     let A;
     // declared p,a,A local var arrays
     
     // for loop and push method to create an array of trues
     for(k=0;k<8;k++){
         a.push(true)
         if(a[k]==true){
            A= readChoice[0]; // if array element is true 
         }
         else{
            A= readChoice[1];// if array elemnt is false
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
        <p class="text-left my-auto Awrt px-2 pl-3 sailormoon">Get Notified of New Messages<br>
            <small class="text-left ASwrt sailormoon1">Turn On Desktop Notification</small></p>
            <div class="pix${i} ml-auto le"><small id="df">yesterday</small></div>
    </div>`);
    $(`.picture${i}`).css(`background`,`url(static/A${i}.jpg)`);
    // add certain html in pix${i} class
    $(`.pix${i}`).append(`
    <div class="dropdown d-flex justify-content-center be">
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
    $(`.dropdown`).on({
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
             A= readChoice[1];
             $(`#reUn${i}`).html(readChoice[1]);
        }
        // #pix${i} container will be higlighted and #reUn${i} container will be changed to read 
        else {
                 
                $(`#pix${i}`).removeClass("dreco").removeClass("shadow");
                a[i-1]= true
                $(`#reUn${i}`).html(readChoice[0]);
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
            $(`#reUn${i}`).html(readChoice[0]);
            console.log(a)
        }
         
        
        $(".zeta").attr("src", `static/A${i}.jpg`); // picture of the contact uploaded in the zeta class container
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
        $(this).find(".dropdown").removeClass("be");
        
    }, function () {
        $(this).find(".dropdown").addClass("be");
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
    $(`#reUn1,#reUn3,#reUn6`).html(readChoice[1])}
    
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
    }); 

