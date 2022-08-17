(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-mobile-open]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();


// (() => {
//   const mobileMenu = document.querySelector('[data-modal]');
//   const openMenuBtn = document.querySelector('[data-modal-open]');
//   const closeMenuBtn = document.querySelector('[data-modal-close]');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     mobileMenu.classList.toggle('is-hidden');

//     const scrollLockMethod = !isMenuOpen
//       ? "disableBodyScroll"
//       : "enableBodyScroll";
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-hidden');
//     openMenuBtn.setAttribute("aria-expanded", false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();





