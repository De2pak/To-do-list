const input = document.querySelector("#text");
const submit = document.querySelector("#btn");
let txt = document.querySelectorAll(".txt");
let buttons = document.querySelectorAll(".btn2");

let txtBox = Array.from(txt);
let crossBtn = Array.from(buttons);

submit.addEventListener("click", () => {
  if (input.value == "") {
    alert("You must write someting...!");
  } else {
    for (i = 0; i <= txtBox.length; i++) {
      if (input.value != "" && txtBox[i].value == "") {
        txtBox[i].value = input.value;
        input.value = "";
        txtBox[i].style.visibility = "visible";
        crossBtn[i].style.visibility = "visible";
      }
    }
  }
});

let j =0;
while(j<crossBtn.length){
  crossBtn[j].addEventListener("click",()=>{
    txtBox[j].style.visibility ="hidden";
  })
}