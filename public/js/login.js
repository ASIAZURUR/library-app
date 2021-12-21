function checkForm(form)
{
  if(form.username.value=="") {
    error1.innerHTML="Error: Username cannot blank";
    form.username.focus();
    return false;
  }
  re = /^\w+$/;
  if(!re.test(form.username.value)) {
    error1.innerHTML="Error: Username must contain only letters, numbers and underscores!";
    form.username.focus();
    return false;
  }
  if(form.pwd1.value=="") {
    error2.innerHTML="Error: Password cannot blank";
    form.pwd1.focus();
    return false;
  }
 
    if(form.pwd1.value.length < 8) {
      error2.innerHTML="Error: Password must contain at least Eight characters!";
      form.pwd1.focus();
      return false;
    }
    if(form.pwd1.value == form.username.value) {
        error2.innerHTML="Error: Password must be different from Username!";
      form.pwd1.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form.pwd1.value)) {
        error2.innerHTML="Error: password must contain at least one number (0-9)!";
      form.pwd1.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form.pwd1.value)) {
        error2.innerHTML="Error: password must contain at least one lowercase letter (a-z)!";
      form.pwd1.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(form.pwd1.value)) {
        error2.innerHTML="Error: password must contain at least one uppercase letter (A-Z)!";
      form.pwd1.focus();
      return false;
    }
  
//   alert("You entered a valid password: " + form.pwd1.value);
  return true;
}



