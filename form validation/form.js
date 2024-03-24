const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

String.prototype.isAlpha=function(){
    return!!this.match(/^[a-zA-Z]*$/);
};


function checkRequired(inputs){
    inputs.forEach((input) => {
        if(input.value.trim()===""){
            errorInput(input,`${getName(input)} is Required`);
        }else{
            successInput(input);
        }
    });

}

function getName(input){

    return input.getAttribute("data-name");
}

function errorInput(input,message){
    const formGroup=input.parentElement;
    formGroup.className="form-group error";
    const p=formGroup.querySelector("p");
    p.innerText=message;

}

function successInput(input){
    const formGroup=input.parentElement;
    formGroup.className="form-group success";
    const p=formGroup.querySelector("p");
    p.innerText="";

}

function checkLength(input,min,max){
    const data=input.value.trim().length;
    if(data<min){
        errorInput(input,`${getName(input)} must be atleast greater than ${min} characters`);
    }else if(data<max){
        errorInput(input,`${getName(input)} must be atleast lesser than ${max} characters`);
    }
    else{
        successInput(input);
    }
}

function checkConfirmPassword(password,password2){
    if(password.value!=password2.value){
        errorInput(password2,`${getName(password2)} does not match`);
    }
}

function checkEmail(input){
    if(!input.value.trim().isEmail()){
        errorInput(input,`This  is not a valid email address`);
    }
}


function checkAlpha(input){
    if(!input.value.trim().isAlpha()){
        errorInput(input,`${getName(input)}  must be alphabets`);
    }
}



form.addEventListener("submit",function (e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,5,8);
    checkLength(password,5,8);
    checkConfirmPassword(password,password2);
    checkEmail(email);
    checkAlpha(username);
});


function Redirect(){
        var username=document.getElementById("username").value;
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var password2=document.getElementById("password2").value;
    if(username,email,password!=0 &&password==password2){
        window.location="https://www.shopify.com/"
    }
    else{
        alert("Fill out all of these Information Properly!!")
        console.log("Fill the Information must");
    }
}














    // var username=document.getElementById("username").value;
    // var email=document.getElementById("email").value;
    // var password=document.getElementById("password").value;
    // var password2=document.getElementById("password2").value;

    // username=username.value;
    // localStorage.setItem('username',username);
    
    // email=email.value;
    // localStorage.setItem('email',email);

    // password=password.value;
    // localStorage.setItem('password',password);

    // password2=password2.value;
    // localStorage.setItem('password2',password2);