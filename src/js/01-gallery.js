// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);
const link = document.querySelector('.gallery__item');
console.log(link)

function createGalleryItemMarkup(cards) {
    return cards.map(({ description, original, preview }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__item" 
    href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}"/>
  </a>
   </li>`
    }).join(' ');
} 

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery__item', { 
    captionPosition: 'bottom',
    captionsData: 'alt',
 });

 console.log(lightbox)

