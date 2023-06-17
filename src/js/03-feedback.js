import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textArea: document.querySelector('.feedback-form textarea'),
    LOCALSTORAGE_KEY: "feedback-form-state",
}

const dataObj = {};

refs.form.addEventListener('submit', saveData)
refs.input.addEventListener('input', throttle(addData, 500));
refs.textArea.addEventListener('input', throttle(addData, 500));
loadUserData();

function addData (e) {
    dataObj[e.target.name] = e.target.value;
    localStorage.setItem(refs.LOCALSTORAGE_KEY, JSON.stringify(dataObj))
}

function saveData (e) {
    e.preventDefault();

    const saveData = localStorage.getItem(refs.LOCALSTORAGE_KEY)
    console.log(JSON.parse(saveData));

    e.currentTarget.reset();
    localStorage.removeItem(refs.LOCALSTORAGE_KEY);
    console.log('DONE!')
}

function loadUserData (e) {
    const saveData = localStorage.getItem(refs.LOCALSTORAGE_KEY)
    if(saveData) {
        const userData = JSON.parse(saveData);
        
        refs.input.value = userData.email;
        refs.textArea.value = userData.message;
    }
}