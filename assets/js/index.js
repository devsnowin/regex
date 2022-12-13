const inputs = document.querySelectorAll("input");

var patterns = {
  name: /^\w{5,12}$/,
  email: /^([a-z\d\.]*)@([a-z\d-]*)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@\-!@#$%^&*?]{8,20}$/,
  telephone: /^\d{10}$/,
  slug: /^[a-z\d-]{8,20}$/,
};

function validate(field, regex) {
  console.log(field.value.length <= 0);
  if (field.value.length <= 0) {
    field.nextElementSibling.classList?.remove("error_msg");
  } else if (!regex.test(field.value)) {
    field.nextElementSibling.classList.add("error_msg");
  } else {
    field.nextElementSibling.classList.remove("error_msg");
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const inputElement = e.target.attributes.name.value;

    validate(e.target, patterns[inputElement]);
  });
});
