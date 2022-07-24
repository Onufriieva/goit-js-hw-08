!function(){var t=document.querySelector(".feedback-form"),a="feedback-form-state";function n(){t.elements.message.value=localStorage.getItem(a)||""}n(),t.addEventListener("submit",(function(o){e.preventDefault(),localStorage.setItem(a,t.elements.value),n(),t.reset()}))}();
//# sourceMappingURL=03-feedback.5ed02508.js.map
