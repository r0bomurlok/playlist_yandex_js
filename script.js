let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

function renderAdded() {
  let songs = songsContainer.querySelectorAll('.song'); //Определение переменной songs тоже перенесите внутрь функции renderAdded. Если этого не сделать, то в songs будут храниться только те песни, что были в контейнере в момент загрузки страницы. Нам это не подходит: нужно, чтобы в songs были все песни, что есть в контейнере. При каждом вызове функции renderAdded надо переопределять переменную songs.
  
  /* определите переменную noSongsElement.
  В неё должен попадать элемент с классом .no-songs */
  let noSongsElement = container.querySelector('.no-songs'); 
  
  if (songs.length === 0) {
    resetButton.setAttribute('disabled', 'true');
    resetButton.classList.add('form__submit-btn_disabled');
    // необходимо убрать скрытие, если песен нет
    noSongsElement.classList.remove('no-songs_hidden');
  } else  {
    resetButton.removeAttribute('disabled', 'true');
    resetButton.classList.remove('form__submit-btn_disabled');
    // необходимо скрыть элемент no-songs, если в плейлисте есть треки
    noSongsElement.classList.add('no-songs_hidden');
  }
}

// Нужно вызвать функцию renderAdded дважды:
function addSong() {
  songsContainer.innerHTML += `
    <div class="song">  
      <h4 class="song__artist">Nirvana</h4>
      <p class="song__title">Polly</p>
      <button class="song__like"></button>
    </div>
  `;
    // нужно вызвать функцию здесь
    renderAdded();
}
  addButton.addEventListener('click', addSong);

/* и в самом конце, чтобы renderAdded отработал при загрузке страницы */

renderAdded(); 