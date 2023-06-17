// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryCards);

function createGallery(galleryItems) {
    return galleryItems.map(({
        preview,
        original,
        description
    }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    }).join('')
}

let lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250
});