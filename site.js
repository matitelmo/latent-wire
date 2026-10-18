(() => {
  const bar = document.getElementById('progress');
  const story = document.querySelector('.story');
  const dock = document.getElementById('pk-dock');
  let dockClosed = false;

  function onScroll() {
    if (bar && story) {
      const r = story.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const pct = Math.min(1, Math.max(0, -r.top / total));
      bar.style.transform = 'scaleX(' + pct + ')';
    }
    if (dock && !dockClosed) dock.classList.toggle('is-on', window.scrollY > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const close = document.getElementById('pk-dock-close');
  if (close) close.addEventListener('click', () => {
    dockClosed = true;
    dock.classList.remove('is-on');
  });

  const copy = document.querySelector('[data-share="copy"]');
  if (copy) copy.addEventListener('click', () => {
    navigator.clipboard.writeText(location.href.split('#')[0]);
    copy.textContent = 'Copied';
    setTimeout(() => { copy.textContent = 'Copy link'; }, 1500);
  });

  document.querySelectorAll('.newsletter form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.innerHTML = '<p class="thanks">You\'re on the list.</p>';
    });
  });
})();
