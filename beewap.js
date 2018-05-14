  $(document).ready(function(){
    $(".drooid").click(function(){
        $("#chat1,#chat").css({"height":"0","visibility":"hidden","overflow":"hidden"});
    });
    for(let i =0;i<9;i++)
    {$(`#pix${i}`).click(function () { 
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
    $(`.picture${i}`).css(`background`,`url(static/A${i}.jpg)`);
    }

    for(let m=1;m<9;m++){
       $(`#pix${m}`).click(function(){
           $(this).removeClass("dreco");
        })
    }
    
    }); 

