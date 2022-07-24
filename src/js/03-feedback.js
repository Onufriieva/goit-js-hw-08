// Получить ссылки на инпут и на текстэрия
// Повесить на них слушателя
// Написать функцию, которая будет проверять пустая форма или нет и сохранять в хранилище, если непустая

const formRem = document.querySelector('.feedback-form')
// const inputRem = document.querySelector('input');
// const textRem = document.querySelector('textarea');

// inputRem.addEventListener('input', onInputChange);
// textRem.addEventListener('input', onInputChange);

const storageKey = "feedback-form-state";

updateInput();


formRem.addEventListener('submit', (onFormChange) => {
    e.preventDefault();
    localStorage.setItem(storageKey, formRem.elements.value)
    updateInput();
    formRem.reset();
 
})



function updateInput() {
formRem.elements.message.value = localStorage.getItem(storageKey) || '';
}


function onFormChange (e) {
     const {
        elements: { email, message },
     } = e.currentTarget;
    console.log(email.value, message.value);
}

