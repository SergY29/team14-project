(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-map-open]"),
      closeModalBtn: document.querySelector("[data-modal-map-close]"),
      modal: document.querySelector("[data-modal-map]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  