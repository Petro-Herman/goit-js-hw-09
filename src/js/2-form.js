// const formData = { email:'', message:'' };


// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageInput = form.querySelector('textarea[name="message"]');


// document.addEventListener('DOMContentLoaded', () => {
//   const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
//   if (savedData) {
//     emailInput.value = savedData.email;
//     messageInput.value = savedData.message;
//     formData.email = savedData.email;
//     formData.message = savedData.message;
//   }
// });


// form.addEventListener('input', event => {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// });


// form.addEventListener('submit', event => {
//   event.preventDefault();

//   if (!formData.email || !formData.message) {
//     alert('Fill please all fields');
//     return;
//   }

//   console.log(formData);

//   localStorage.removeItem('feedback-form-state');
//   formData.email = '';
//   formData.message = '';
//   form.reset();
// });



// Оголошення об'єкта formData
const formData = {
  email: '',
  message: ''
};

// Отримуємо посилання на елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Завантаження даних з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

// Функція для збереження даних у локальне сховище
const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Відстеження змін у формі через подію input
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage();
});

// Відправлення форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
