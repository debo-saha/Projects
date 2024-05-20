const pass=document.querySelector("#pass");
const show=document.querySelector("#show");


show.addEventListener("click",()=>{
  if(pass.type=="password"){
    pass.type="text";
    show.src="visibleNot.png";
  }
  else{
    pass.type="password";
    show.src="visible.png"
  }
})