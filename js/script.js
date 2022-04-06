let name = document.querySelector('input[name=name]');
let lastName = document.querySelector('input[name=last_name]');
let email = document.querySelector('input[name=email]');
const action = document.querySelector('.action');
let age = document.querySelector('input[name=age]');
let proffession = document.querySelector('input[name="proffession]');
const secondSection = [...document.querySelectorAll('.details')];
const data = [];

hideDetails = () => {
    for(let i = 0; i < secondSection.length; i++) {
        secondSection[i].style.display = 'none';
    }
}
showDetails = () => {
    for(let i = 0; i < secondSection.length; i++) {
        secondSection[i].style.display = 'inline-block';
    }
}

class Text {
    constructor() {
        this.name = name;
        console.log(this.name.value);
    }
}
const user = new Text(name);

const person = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    details: {
        age: this.age,
        proffession: this.proffession, 
    }
}

name.addEventListener('keyup', () => {
    person.name = name.value;
});
lastName.addEventListener('keyup', () => {
    person.lastName = name.lastName;
});
email.addEventListener('keyup', () => {
    person.email = email.value;
});

(person.name == '' && person.lastName == '' && person.email == '') ? hideDetails() : showDetails();

action.addEventListener('click', (e) => {
    e.preventDefault();
    (person.name !== '' && person.lastName !== '' && person.email !== '') ? showDetails() : hideDetails();
});
