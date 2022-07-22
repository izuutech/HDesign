const form=document.querySelector("#form");
const agreed=document.querySelector("#agreedhackathon");
const input=document.querySelectorAll(".form-inp");
const inputErr=document.querySelectorAll(".help-block");
const hear=document.querySelector(".form-select");
const other_input=document.querySelector("#other");

hear.addEventListener("change", () => {
    inputErr[3].innerHTML = "";
    if (hear.value ==="other") {
        other_input.style.display="flex"
    } else {
        other_input.style.display="none"
    }
})

for (let i = 0; i < input.length; i++){
    input[i].addEventListener("keypress", () => {
        if (input[i].value !== "") {
            inputErr[i].innerHTML = "";
        }
    })
}


form.addEventListener("submit", (e) => {
    let inputHasData;
    for (let i = 0; i < input.length; i++){
        
        if (input[i].value === "") {
            inputHasData=false;
            let errDisplay=input[i].getAttribute("data-error")
            inputErr[i].innerHTML = errDisplay;
            break;
        }else{
            inputHasData = true;
        }
    }
    if ((hear.value === "") || (other_input.style.display === "flex" && other_input.value === "") ) {
        
        e.preventDefault()
        let errDisplay=hear.getAttribute("data-error")
        inputErr[3].innerHTML = errDisplay;
    }
    if (agreed.checked === false || inputHasData === false) {
        e.preventDefault()
    }
    
})