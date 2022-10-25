document.getElementById("form").onsubmit = function () {
  /**
   * function when click submit button
   */

  //          1.declare some boolean check true-false
  var checkName = false;
  var checkEmail = false;
  var checkPhone = false;

  //          2.declare direct checking variable
  var r = /^[a-zA-Z0-9 ]{5,}$/;
  var r2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
  var r3 = /^([0-9]{3})-([0-9]{5})([0-9]{0,4})$/gi;

  //          3.get information from input
  let name = document.getElementById("name").value;

  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;

  let phone = document.getElementById("phone").value;

  let sex = document.querySelector('input[name="sex"]:checked').value;

  let select = document.getElementById("country");
  var country = select.options[select.selectedIndex].value;

  //          4.check bool variables is true or false

  if (r.test(name)) {
    checkName = true;
  }
  if (r2.test(email)) {
    checkEmail = true;
  }
  if (r3.test(phone)) {
    checkPhone = true;
  }
  console.log(checkEmail, checkName, checkPhone);

  sessionStorage["name"] = name;
  sessionStorage["sex"] = sex;
  sessionStorage["address"] = address;
  sessionStorage["email"] = email;
  sessionStorage["phone"] = phone;
  sessionStorage["country"] = country;

  let list = ["Member Information", "-------------------"];
  list.push(`Name: ${name}`);
  list.push(`Gender: ${sex}`);

  list.push(`Address: ${address}`);
  list.push(`Email: ${email}`);
  list.push(`Phone: ${phone}`);
  list.push(`Qualification: ${country}`);

  console.log(list);

  //          6.check if all bool variable is true - else return false
  if (checkEmail && checkName && checkPhone) {
    //alert(list.join("\n"));
    window.open("Pretest3-Success.html", "_blank");
    return true;
  } else {
    alert("some information were wrong!!");
    return false;
  }
};
