// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    item =>
      `<a class = 'gallery__link' href="${item.original}"> 
        <img class = 'gallery__image' src="${item.preview}" alt="${item.description}" />
    </a>`
  )
  .join('');

gallery.innerHTML = galleryMarkup;

const inst = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Change code below this line

console.log(galleryItems);
