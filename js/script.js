const name = document.querySelector('input[name=name]');
const lastName = document.querySelector('input[name=last_name]');
const email = document.querySelector('input[name=email]');
const action = document.querySelector('.action');
const data = [];


const onClickBtn = (e) => {
    e.preventDefault();
    data.push(name.value, lastName.value, email.value);
    console.log(data);
}

action.addEventListener('click', onClickBtn);