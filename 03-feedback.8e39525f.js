!function(){var e=document.querySelector(".feedback-form"),a=e.querySelector('input[name="email"]'),t=e.querySelector('textarea[name="message"]'),o=e.querySelector("button");e.addEventListener("input",(function(){var e;e={email:a.value,message:t.value},localStorage.setItem("feedback-form-state",JSON.stringify(e))})),window.addEventListener("load",(function(){!function(){var e=localStorage.getItem("feedback-form-state");if(e){var o=JSON.parse(e);a.value=o.email,t.value=o.message}}()})),o.addEventListener("click",(function(o){o.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log("email:",a.value),console.log("message:",t.value),e.reset()}))}();
//# sourceMappingURL=03-feedback.8e39525f.js.map