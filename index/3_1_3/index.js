(function () {
  const formElement = document.querySelector('#form');
  const toggleButton = document.querySelector('#editButton');
  const inputFirstName = document.querySelector('#firstNameInput');
  const displayFirstName = document.querySelector('#firstNameText');
  const inputLastName = document.querySelector('#lastNameInput');
  const displayLastName = document.querySelector('#lastNameText');
  const greetingElement = document.querySelector('#helloText');

  const profileState = createReactiveState({
    editing: false,
    firstName: 'John',
    lastName: 'Doe'
  }, updateUI);

  formElement.addEventListener('submit', event => {
    event.preventDefault();
    profileState.editing = !profileState.editing;
  });

  inputFirstName.addEventListener('input', event => {
    profileState.firstName = event.target.value;
  });

  inputLastName.addEventListener('input', event => {
    profileState.lastName = event.target.value;
  });

  function updateUI() {
    const { editing, firstName, lastName } = profileState;

    if (!editing) {
      inputFirstName.value = firstName;
      inputLastName.value = lastName;
    }

    displayFirstName.textContent = firstName;
    displayLastName.textContent = lastName;
    greetingElement.textContent = `Hello, ${firstName} ${lastName}!`;

    toggleButton.textContent = editing ? 'Save Profile' : 'Edit Profile';

    setVisibility(inputFirstName, editing);
    setVisibility(inputLastName, editing);
    setVisibility(displayFirstName, !editing);
    setVisibility(displayLastName, !editing);
  }

  function setVisibility(el, visible) {
    el.style.display = visible ? '' : 'none';
  }

  function createReactiveState(initialData, callback) {
    return new Proxy(initialData, {
      set(obj, prop, newVal) {
        obj[prop] = newVal;
        callback();
        return true;
      }
    });
  }

  updateUI();
})();