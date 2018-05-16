var readChoice= [`Mark as unread`,'Mark as read']
    let p = [];
     let a = []
     for(k=0;k<8;k++){
         a.push(true)
     }
     console.log(a) 
     let A= readChoice[0];
    var n = false

  $(document).ready(function(){
    
    for(let i =1;i<9;i++)
    { 
      
        $(`#level`).append(`<div class="row">

    <div class="col-12 d-flex px-2 flex-row align-items-center py-3 kiop gama drooid" id="pix${i}">
        
        <div class="py-3 px-3 rounded-circle picture${i} lambda"></div>
        <p class="text-left my-auto Awrt px-2 pl-3 sailormoon">Get Notified of New Messages<br>
            <small class="text-left ASwrt sailormoon1">Turn On Desktop Notification</small></p>
            <div class="pix${i} ml-auto le"><small id="df">yesterday</small></div>
    </div>`);
    $(`.picture${i}`).css(`background`,`url(static/A${i}.jpg)`);
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
         click: function(){ n= true},
         mouseleave: function(){n= false}
    });
    $(`#reUn${i}`).click (function(){
        
        if(a[i-1]==true)
        { 
             
        $(`#pix${i}`).addClass("dreco").addClass("shadow");
             a[i-1]= false
             
        }
        else {
                 
                $(`#pix${i}`).removeClass("dreco").removeClass("shadow");
                a[i-1]= true
        }
        console.log(a)
        console.log(n)
         })
        
        $(`#pix${i}`).click(function () {
            
        if(n==true){
            
            return;
        }
        if(a[i-1]==false){
            $(this).removeClass("dreco").removeClass("shadow");
            a[i-1]= true
        }
         
        
        $(".zeta").attr("src", `static/A${i}.jpg`);
        $(`.set`).empty();
        
    for(let x =1;x<=i;x++)
       {$(`.set`).append(`<div class="Anushka my-3 mx-3 d-flex py-3">
                                <div class="flex-fill wb" id="cb1"><p class="mx-4 rounded w-50">Lorem ipsum dolor sit amet consectetur.</p></div>
                                <div class="flex-fill wb" id="cb11"><p class="mx-4 rounded text-right"></p></div>
                            </div>
                            <div class="Anushka my-3 mx-3 d-flex py-3">
                                <div class="flex-fill wb" id="cb1"><p class="mx-auto rounded"></p></div>
                                <div class="flex-fill wb " id="cb11"><p class="mx-4 rounded float-right w-50">Lorem ipsum dolor sit amet consectetur.</p></div>
                            </div>`) ;
                        
                            }
    });
    $(`#pix${i}`).hover(function () {
        $(this).find(".dropdown").removeClass("be");
        
    }, function () {
        $(this).find(".dropdown").addClass("be");
    }
    );
    }
  
    
    
    // $(`#pix1,#pix3,#pix6`).addClass("dreco").addClass("shadow");
    

    $(".drooid").click(function(){
        if(n==true){
            return;
        }
        $("#chat1,#chat").css({"height":"0","visibility":"hidden","overflow":"hidden"});
    });
    }); 

