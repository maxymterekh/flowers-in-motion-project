(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    if (!Array.from(refs.backdrop.classList).includes('is-hidden')) {
      refs.backdrop.classList.remove('is-hidden');
    } else {
      refs.backdrop.classList.add('is-hidden');
    }
  }

  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }
})();
