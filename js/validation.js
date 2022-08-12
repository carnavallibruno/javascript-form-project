var firstForm = [0, 0, 0, 0];
var secondForm = [0];
var thirdForm = [0, 0, 0];


function toFirstPage(event) {
  event.preventDefault();
  if (!thirdForm.includes(0)) {
    swapFirstPage();
  } else {
    console.log("funcionou, testa aí agora")
    return;
  }
}

function toSecondPage(event) {
  event.preventDefault();
  if (!firstForm.includes(0)) {
    swapSecondPage();
  } else {
    return;
  }
}

function toThirdPage(event) {
  event.preventDefault();
  if (!firstForm.includes(0) && !secondForm == 0) {
    swapThirdPage();
  } else {
    console.log("funcionou, testa aí agora")
    return;
  }
}


// function toSecondPage(event) {
//   var form = event.target;
//   if (!firstForm.includes(0)) {
//     swapSecondPage();
//     return true;
//   } else {
//     event.preventDefault();
//     swapFirstPage();
//     console.log('nao passa proxima pagina');
//     alert("Password name must be filled out");
//     return;
//   }
  
// console.log(toSecondPage(e));
// }









// function teste () {}




// function myFunc() {
//   var myBtn = document.createElement("button");
//   myBtn.innerHTML = "New Button";
//   document.body.appendChild(myBtn);
//   }


// ? Event listeners

// // * Checkbox validation
// var checkButton = document.querySelector("#gridCheck");
// checkButton.addEventListener("change", validateTermsAndPrivacy());

// console.log(formArray);
// console.log(validatingArray);
// if(validatingArray == formArray) {
//   console.log('Todos os itens do formulario estao preenchidos');
// }