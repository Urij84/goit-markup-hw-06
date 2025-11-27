(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  const toggleMenu = () => {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  };

  refs.openBtn.addEventListener('click', toggleMenu);
  refs.closeBtn.addEventListener('click', toggleMenu);
})();