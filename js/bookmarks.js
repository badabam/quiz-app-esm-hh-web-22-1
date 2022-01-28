export function bookmarks() {
  const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
  const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

  bookmarkButton?.addEventListener('click', () => {
    bookmarkIcon.classList.toggle('card__bookmark-button--saved');
  });
}
