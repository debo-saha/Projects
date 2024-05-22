const button=document.querySelector(".button");
const ok=document.querySelector(".ok");
const card=document.querySelector(".card");


button.addEventListener("click",()=>{

    card.style.display="block";
    button.style.display="none";

})

ok.addEventListener("click",()=>{

    card.style.display="none";
    button.style.display="block";

})