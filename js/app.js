window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".auth__form");
  const showPaswd = form.querySelector(".auth__form-btn-icon");
  const inpPass = form.querySelector(".inp-pass");
  const iconHid = form.querySelector(".icon-hid");
  const iconShow = form.querySelector(".icon-show");
  const auth = document.querySelector(".auth")
  showPaswd.addEventListener("click", () => {
    if (inpPass.type === "password") {
      inpPass.type = "text";
      iconHid.style.display = "block";
      iconShow.style.display = "none";
    }
    else {
      inpPass.type = "password";
      iconShow.style.display = "block";
      iconHid.style.display = "none";
    }
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let obj = {}
    inputs.forEach(inp => {
      if (!inp.value) {
        inp.classList.add('error')
      }
      else inp.classList.remove('error')
      return obj = {
        auth_login: inputs[0].value, 
        password: inputs[1].value,
        remember: inputs[2].checked
      }
    })
    console.log(obj);
  })

  function pass() {
    if (!inpPass.value) {
      iconShow.style.display = "none";
    } else {
      iconShow.style.display = "block";
    }
  }
  pass();
  inpPass.addEventListener("input", pass)

  function load() {
    setTimeout(() => {
      auth.style.display = "block"
    }, 500)
  }

  window.addEventListener("load", load)
});