// import debounce from 'lodash.debounce';
import './styles.css';
import imageCardMarkup from './template/imageCardMarkup.hbs';

import api from './js/apiService.js';
import refs from './js/refs.js';

const searchOptions = {
  whatToFind: '',
  pageNumber: 1,
  userKey: '21145461-ec858c83a87163ad119fff078',
};

refs.searchInput.addEventListener('change', () => {
  clearFunction();

  if (refs.searchInput.value !== '') {
    searchOptions.whatToFind = refs.searchInput.value;
    renderFunction();
  }
});

refs.loadMoreButton.addEventListener('click', async () => {
  if (refs.searchInput.value === '') {
    return;
  }
  searchOptions.pageNumber += 1;
  renderFunction();
  setTimeout(scrollFunc, 50);
});

function renderFunction() {
  api
    .apiService(searchOptions)
    .then(data =>
      refs.listToInsert.insertAdjacentHTML('beforeend', imageCardMarkup(data)),
    );
}

function clearFunction() {
  searchOptions.whatToFind = '';
  searchOptions.pageNumber = 1;
  refs.listToInsert.innerHTML = '';
}

function scrollFunc() {
  window.scrollTo({
    top: document.documentElement.scrollHeight - 1410,
    behavior: 'smooth',
  });
}
