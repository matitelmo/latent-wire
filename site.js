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

  // Plexo unit clicks → Vercel Web Analytics custom event "PlexoClick"
  function trackPlexoClick(anchor) {
    if (typeof window.va !== 'function') return;
    let unit = 'unknown';
    let campaign = 'unknown';
    try {
      const url = new URL(anchor.href);
      unit = url.searchParams.get('utm_content') || unit;
      campaign = url.searchParams.get('utm_campaign') || campaign;
    } catch (_) { /* ignore bad hrefs */ }
    window.va('event', {
      name: 'PlexoClick',
      data: {
        unit: unit,
        campaign: campaign,
        page: location.pathname,
      },
    });
  }

  document.querySelectorAll('a[href*="useplexo.ai"]').forEach((a) => {
    a.addEventListener('click', () => trackPlexoClick(a));
  });
})();
