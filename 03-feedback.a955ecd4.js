const t=document.querySelector(".feedback-form");function a(){t.elements.message.value=localStorage.getItem("feedback-form-state")||""}a(),t.addEventListener("submit",(o=>{e.preventDefault(),localStorage.setItem("feedback-form-state",t.elements.value),a(),t.reset()}));
//# sourceMappingURL=03-feedback.a955ecd4.js.map
