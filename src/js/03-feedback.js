
const formRem = document.querySelector('.feedback-form')
const inputRem = document.querySelector('input');
const textRem = document.querySelector('textarea');

inputRem.addEventListener('input', onInputChange);
textRem.addEventListener('input', onInputChange);

const storageKey = "feedback-form-state";

updateInput();


formRem.addEventListener('submit', (e) => {
    e.preventDefault();
   
    updateInput();
    onInputChange();
    const inputListSaved = localStorage.getItem(storageKey);
    const inputListParsed = JSON.parse(inputListSaved);
    console.log(inputListParsed); 

    formRem.reset();
 
    localStorage.removeItem(storageKey);   
});


function updateInput() {
formRem.elements.message.value = localStorage.getItem(storageKey) || '';
};

function onInputChange () {
    
    const inputList = {
        inputRem: inputRem.value,
        textRem: textRem.value,
    };

 localStorage.setItem(storageKey, JSON.stringify(inputList))
};

