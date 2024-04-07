import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getPhoto } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.querySelector('.gallery');
const load = document.querySelector('.loading');
const btnLoadMore = document.querySelector('.btn-load-more');
const galItem = document.querySelector(".gallery-item");

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

function showLoadMore() {
  btnLoadMore.classList.remove('hidden');
}

function hideLoadMore() {
  btnLoadMore.classList.add('hidden');
}

function showLoader() {
  load.classList.add('loader');
}

function hideLoader() {
  load.classList.remove('loader');
}
 hideLoadMore()
// ----------------Кнопка загрузить еще---------------//
btnLoadMore.addEventListener('click', handleClickLoadMore);

async function handleClickLoadMore() {
  currentPage += 1;
  hideLoadMore();
  showLoader();
  try {
    const data = await getPhoto(query, currentPage);
    imageTemplate(data.hits);
  } catch (err) {
    console.error('Error fetching data:', err);
    hideLoadMore();
  }
  // myScroll();
  checkBtnStatus();
  hideLoader();
}
// ----------------Кнопка загрузить еще---------------//

// --------------------------Кнопка основная---------------------------//
searchForm.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  currentPage = 1;
  query = event.target.elements.query.value.trim();
  if (query === '') {
    return iziToast.warning({ message: "Please try again! Write something.", position: "topRight", color: "red" })
  }
  try {
    showLoader();
    const data = await getPhoto(query, currentPage);
     if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
       gallery.innerHTML = '';
       event.target.reset();
       hideLoader();
       hideLoadMore();
        return;
  } 
    maxPage = Math.ceil(data.totalHits / pageSize);
    imageTemplate(data.hits);
  } catch (err) {
    console.error('Error fetching data:', err);
    gallery.innerHTML = '';
    hideLoadMore();
  }
  checkBtnStatus();
  event.target.reset();
  hideLoader()
}
function checkBtnStatus() {
  if (currentPage >= maxPage) {
    iziToast.warning({
      message: 'Were sorry, but youve reached the end of search results.',
      color: 'red',
      position: 'topRight',
    })
    hideLoadMore();
  } else {
    showLoadMore();
  }
}