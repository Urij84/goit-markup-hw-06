(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.body,
  };

  if (!refs.openBtn || !refs.closeBtn || !refs.menu) {
    return;
  }

  const toggleMenu = () => {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('menu-open');
  };

  refs.openBtn.addEventListener('click', toggleMenu);
  refs.closeBtn.addEventListener('click', toggleMenu);

  // якщо виросли до планшета/десктопа — меню закриваємо
  window
    .matchMedia('(min-width: 768px)')
    .addEventListener('change', event => {
      if (!event.matches) return;
      refs.menu.classList.remove('is-open');
      refs.body.classList.remove('menu-open');
    });
})();