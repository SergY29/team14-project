(() => {
    const refs = {
      openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
      closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
      mobileMenu: document.querySelector("[data-mobile-menu]"),
    };
  
    refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
    refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  
  function toggleMobileMenu() {
      document.body.classList.toggle("modal-open");
      refs.mobileMenu.classList.toggle("is-hidden");
    }
  })();