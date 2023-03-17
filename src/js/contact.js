(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-contact]'),
    closeModalBtn: document.querySelector('[data-close-contact]'),
    backdrop: document.querySelector('[contacts-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-contact');
  }

  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }
})();
