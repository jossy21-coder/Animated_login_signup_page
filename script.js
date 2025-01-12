const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signup-link');
const signInLink = document.querySelector('.signin-link');
const toggleLogin = document.querySelector('.toggle-login');
const close = document.querySelector('.close');

signUpLink.addEventListener('click', () => {
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
});
toggleLogin.addEventListener('click', () => {
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
});
close.addEventListener('click', () => {
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
    wrapper.classList.remove('show-bg');
});

let password = document.getElementById("password");
    let checkbox = document.getElementById("checkbox");
    
    checkbox.onclick = function() {
      if (checkbox.checked) {
          password.type = 'text';
      } else {
        password.type = 'password';
      }
}
    
let password2 = document.getElementById("password2");
    let checkbox2 = document.getElementById("checkbox2");
    
    checkbox2.onclick = function() {
      if (checkbox2.checked) {
          password2.type = 'text';
      } else {
        password2.type = 'password';
      }
    }