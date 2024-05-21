const generate=document.querySelector("#generate");
const text=document.querySelector("#text");

generate.addEventListener("click",()=>{
    console.log(text.value);
    document.querySelector("#qr").src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`
})