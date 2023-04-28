 let music=document.querySelectorAll(".music");
let keyvalue;
   music.forEach(key =>{
    key.addEventListener("click", () => myfunction(key) );

   })
   function myfunction(key){

    keyvalue = document.getElementById(key.dataset.sound);
     keyvalue.play();
     keyvalue.currentTime=0;
    //  key.classList.add("clicked");
    //  keyvalue.addEventListener("ended",()=>{
    //     key.classList.remove("clicked");
    //  })
    key.click=()=>{
        console.log("helo");
    }

   }
    





    let keyone = document.querySelector("#test");

   
   window.addEventListener("keydown",(keycode)=>{

    //  white keysection

     if(keycode.key==="a"){
        keyvalue = document.getElementById("key01");
         keyvalue.play();
         keyvalue.currentTime=0;
     }
     else if(keycode.key==="s"){
        keyvalue = document.getElementById("key03");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="d"){
        keyvalue = document.getElementById("key05");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="f"){
        keyvalue = document.getElementById("key07");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="g"){
        keyvalue = document.getElementById("key08");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="h"){
        keyvalue = document.getElementById("key10");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="j"){
        keyvalue = document.getElementById("key12");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="k"){
        keyvalue = document.getElementById("key14");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="l"){
        keyvalue = document.getElementById("key15");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key===";"){
        keyvalue = document.getElementById("key17");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="'"){
        keyvalue = document.getElementById("key19");
         keyvalue.play();
         keyvalue.currentTime=0;
     }
     else if(keycode.key==="/"){
        keyvalue = document.getElementById("key21");
         keyvalue.play();
         keyvalue.currentTime=0;
     }
            // black key section

     else if(keycode.key==="w"){
        keyvalue = document.getElementById("key02");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="e"){
        keyvalue = document.getElementById("key04");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="r"){
        keyvalue = document.getElementById("key06");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="t"){
        keyvalue = document.getElementById("key09");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="y"){
        keyvalue = document.getElementById("key11");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="u"){
        keyvalue = document.getElementById("key13");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="i"){
        keyvalue = document.getElementById("key16");
         keyvalue.play();
         keyvalue.currentTime=0;
     }else if(keycode.key==="o"){
        keyvalue = document.getElementById("key18");
         keyvalue.play();
         keyvalue.currentTime=0;
     }
     else if(keycode.key==="p"){
        keyvalue = document.getElementById("key20");
         keyvalue.play();
         keyvalue.currentTime=0;
     }

else{
     alert("you pressed wrong key")
}
   });


 let header =document.querySelector("header") ;
 let h2 =document.querySelectorAll("h2");

 header.onmouseenter=()=>{
    h2.forEach(key=>{
        key.style.display="block";
         
    })
 }
 header.onmouseleave=()=>{
    h2.forEach(key=>{
        key.style.display="none";;
         
    })

     
 }

  