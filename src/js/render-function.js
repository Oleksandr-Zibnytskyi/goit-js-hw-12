import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');
export function imageTemplate(data) {
  const markup = data
  .map(
    el => `<li class="gallery-item">
  <a class="gallery-link" href="${el.largeImageURL}">
    <img
            src="${el.webformatURL}"
            alt="${el.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${el.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${el.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${el.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${el.downloads}</li>
     </ul>
  </a>
</li>`).join("")
gallery.insertAdjacentHTML('beforeend', markup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
lightbox.refresh();
}