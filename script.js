const backdrop = document.getElementById('backdrop');       // весь фон + модалка
const modal = document.getElementById('modal');            
const openModalBtn = document.querySelector('.header-button'); 
const closeModalBtn = modal.querySelector('.x');
const form = document.querySelector('.modal-form');
const thanksMsg = document.getElementById('thanks-message');

// Перевірка елементів
console.log('backdrop:', backdrop);
console.log('modal:', modal);
console.log('openModalBtn:', openModalBtn);
console.log('closeModalBtn:', closeModalBtn);

// Відкриття модалки разом із бекдропом
openModalBtn.addEventListener('click', () => {
  if (backdrop && modal) {
    backdrop.classList.remove('is-hidden'); // показати фон
    modal.classList.remove('is-hidden');    // показати модалку
  }
});

// Закриття модалки
closeModalBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden'); // приховати фон і модалку
  modal.classList.add('is-hidden');
});

// Закриття через клік на фон
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) { // перевіряємо, що клік по самому бекдропу
    backdrop.classList.add('is-hidden');
    modal.classList.add('is-hidden');
  }
});


// ✅ Обробка форми — виводимо імʼя і номер в консоль
form.addEventListener('submit', (event) => {
    event.preventDefault(); // зупиняє перезавантаження сторінки

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    console.log("User name:", name);
    console.log("User number:", number);

    // (Необов'язково) можна заховати модалку після відправки
    backdrop.classList.add('is-hidden');
    modal.classList.add('is-hidden');

    form.reset(); // якщо хочеш очистити поля

// Текст повідомлення
  thanksMsg.textContent = `Дякую, ${name}, ми з вами зв’яжемось через 5 хв.`;

  // Показати повідомлення
  thanksMsg.classList.remove('is-hidden');
  
  setTimeout(() => {
    thanksMsg.classList.add('show');
  }, 50);

  // Сховати автоматично через 4 секунди
  setTimeout(() => {
    thanksMsg.classList.remove('show');
    setTimeout(() => {
      thanksMsg.classList.add('is-hidden');
    }, 400);
  }, 4000);
});

// ---------------------- Characters slider ----------------------
const charactersList = document.querySelector("#characters .characters-list");
const charactersItems = charactersList.querySelectorAll(".characters-list-item");
let currentIndexCharacters = 0;

const prevBtnCharacters = document.getElementById("prevBtn");
const nextBtnCharacters = document.getElementById("nextBtn");

function scrollCharacters(index) {
  charactersList.scrollTo({
    left: charactersItems[index].offsetLeft,
    behavior: "smooth"
  });
}

prevBtnCharacters.addEventListener("click", () => {
  currentIndexCharacters--;
  if (currentIndexCharacters < 0) currentIndexCharacters = charactersItems.length - 1;
  scrollCharacters(currentIndexCharacters);
});

nextBtnCharacters.addEventListener("click", () => {
  currentIndexCharacters++;
  if (currentIndexCharacters >= charactersItems.length) currentIndexCharacters = 0;
  scrollCharacters(currentIndexCharacters);
});

// ---------------------- Animals slider ----------------------
const animalsList = document.querySelector("#animals .characters-list");
const animalsItems = animalsList.querySelectorAll(".characters-list-item");
let currentIndexAnimals = 0;

const prevBtnAnimals = document.getElementById("prevBtn2");
const nextBtnAnimals = document.getElementById("nextBtn2");

function scrollAnimals(index) {
  animalsList.scrollTo({
    left: animalsItems[index].offsetLeft,
    behavior: "smooth"
  });
}

prevBtnAnimals.addEventListener("click", () => {
  currentIndexAnimals--;
  if (currentIndexAnimals < 0) currentIndexAnimals = animalsItems.length - 1;
  scrollAnimals(currentIndexAnimals);
});

nextBtnAnimals.addEventListener("click", () => {
  currentIndexAnimals++;
  if (currentIndexAnimals >= animalsItems.length) currentIndexAnimals = 0;
  scrollAnimals(currentIndexAnimals);
});
