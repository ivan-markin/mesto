class FormValidator {
  constructor(form) {
    this.form = form;
  }
  checkInputValidity(element, errorElement) {
    if (!element.checkValidity()) {
      if (element.validity.valueMissing) {
        errorElement.textContent = 'Это обязательное поле';
        errorElement.classList.add('error-message_active');
      }
      if (element.validity.tooShort) {
        errorElement.textContent = 'Должно быть от 2 до 30 символов';
        errorElement.classList.add('error-message_active');
      }
    } else errorElement.classList.remove('error-message_active');
  }
  setSubmitButtonState(form) {
    if (form.elements[0].checkValidity() && form.elements[1].checkValidity()) {
      form.elements.submit.removeAttribute('disabled');
    } else form.elements.submit.setAttribute('disabled', true);
  }
  setEventListeners() {
    this.form.addEventListener('input', (event) => {
      this.checkInputValidity(event.target, document.querySelector(`#error-${event.target.id}`));
      this.setSubmitButtonState(this.form);
    });
  }
}