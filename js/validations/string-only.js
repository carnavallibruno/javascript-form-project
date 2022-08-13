var inputPhone = document.querySelector("#inputPhone");

inputPhone.addEventListener("input",function(e){
  e.target.value=parseFloat(e.target.value)||0;
});