

function validEmail()
{
var mail = document.getElementById('mail').value; // where `mail` is id of your input form
var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

  if (mail.match(email))
  {
      alert("Your Email : " + mail);
  }
  else
  {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".errorMessage").style.display = "block";
  }
}