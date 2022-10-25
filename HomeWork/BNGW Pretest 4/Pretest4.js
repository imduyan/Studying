document.getElementById("form1").onsubmit = function () {
  let checkName = false;
  let checkEmail = false;

  let r = /^[a-zA-Z ]{3,}$/;
  let r2 = /\w@\w.\w{2,5}/;

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (r.test(name)) {
    checkName = true;
  }
  if (r2.test(email)) {
    checkEmail = true;
  }

  if (checkEmail && checkName) {
    alert("tks!!");
    return true;
  } else {
    alert("Error!!");
    return false;
  }
};
