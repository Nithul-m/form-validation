

function validateName(){
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')

    if(name.value.trim()==''){
        nameError.innerHTML = 'username cannot be blank';
        return false;
    }else if (name.value.length < 5){
        nameError.innerHTML = 'username must not be less than 5 characters';
        return false;
    }else
    nameError.innerHTML='';
    return true;
}

function validateEmail(){
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')

    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.value.trim() == ''){
        emailError.innerHTML = 'Email cannot be blank!!'
        return false
    }else if(!email.value.match(regEx)){
        emailError.innerHTML = 'Email not in global format'
        return false
    }else{
        emailError.innerHTML=''
        return true
    }
}


function validatePassword(){
    let password = document.getElementById('password')
    let passError = document.getElementById('password-error')

    if(password.value.trim()==''){
        passError.innerHTML = 'Password cannot be blank'
        return false
    }else if(password.value.length < 6 || password.value.length >20){
        passError.innerHTML='Password length cannot be less than 6 characters or more than 20 characters'
        return false
    }else{
        passError.innerHTML=''
        return true
    }
}

function validateRepeat(){
    let password = document.getElementById('password')
    let repeat = document.getElementById('repeat')
    let repError = document.getElementById('repeat-error')

   if(repeat.value != password.value){
       repError.innerHTML='password mismatch'
        return false
    }else{
        repError.innerHTML=''
        return true
    }
}

function validateForm(){
    let subError = document.getElementById('submit-error')
    if(!validateEmail() || !validateName() || !validatePassword() || !validateRepeat()){
        subError.innerHTML = 'Please resolve the errors'
        return false
    }else{
        subError.innerHTML=''
        return true
    }
}