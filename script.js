const buttonSubmit = document.querySelector('.form__submit');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const loginPage = document.querySelector('.login__page');
const sloganButton = document.querySelector('.slogan__button');
const modal = document.querySelector('.modal');
const cross = document.querySelector('.modal__cross');
const mainPage = document.querySelector('.main__page');

buttonSubmit.addEventListener('click', () => {

    if (login.value.length === 0 || password.value.length === 0 ) {
        login.classList.add('error');
        password.classList.add('error');
        return;
    }

    loginPage.classList.add('hide');
    mainPage.classList.remove('hide');

})

login.addEventListener('input', () => {
    login.classList.remove('error');
})

password.addEventListener('input', () => {
    password.classList.remove('error');
})

sloganButton.addEventListener("click", () => {
    modal.classList.remove('hide');
})

cross.addEventListener("click", () => {
    modal.classList.add('hide');
})



