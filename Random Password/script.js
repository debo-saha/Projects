const uppCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWEcASE="abcdefghijklmnopqrsuvwxyz";
const numbers="0123456789";
const spCars="!@#$%^&*()-_=+[{}\:'";


const options=uppCase+LOWEcASE+numbers+spCars;

const pass=document.querySelector("#pass");
const copy=document.querySelector("#copy");
const generate=document.querySelector("#generate");



function generatePass(){
 let password="";
 let length=12;
 while(password.length<=12){
    password+=options[Math.floor(Math.random()*options.length)];
 }
 pass.value=password;
 console.log(password);

}

generate.addEventListener("click",()=>{

    generatePass();
})

copy.addEventListener("click",()=>{

    pass.select();
    document.execCommand("copy");
})