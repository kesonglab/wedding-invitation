// 滚动进场
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // 倒计时，改这里的时间即可
  const weddingTime = new Date('2026-09-28T11:30:00+08:00').getTime();
  const pad = n => String(n).padStart(2, '0');
  function tick() {
    const diff = weddingTime - Date.now();
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML =
        '<div class="count-row"><div class="count-col"><div class="count-num">🎉</div><div class="count-label">今天大喜！</div></div></div>';
      return;
    }
    document.getElementById('cd-day').textContent = Math.floor(diff / 86400000);
    document.getElementById('cd-hour').textContent = pad(Math.floor(diff / 3600000) % 24);
    document.getElementById('cd-min').textContent = pad(Math.floor(diff / 60000) % 60);
    document.getElementById('cd-sec').textContent = pad(Math.floor(diff / 1000) % 60);
    setTimeout(tick, 1000);
  }
  tick();

  // 装饰轻微视差
  const pxEls = [...document.querySelectorAll('[data-speed]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) {
    addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        pxEls.forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -100 || r.top > innerHeight + 100) return;
          el.style.translate = `0 ${(r.top + r.height / 2 - innerHeight / 2) * el.dataset.speed}px`;
        });
      });
    }, { passive: true });
  }

  // 点新人撒爱心
  const couple = document.querySelector('.couple');
  function burst(x, y) {
    if (reduced) return;
    for (let i = 0; i < 8; i++) {
      const h = document.createElement('span');
      h.className = 'burst-heart';
      h.textContent = '❤';
      h.style.left = x + 'px';
      h.style.top = y + 'px';
      h.style.fontSize = 12 + Math.random() * 14 + 'px';
      h.style.setProperty('--dx', (Math.random() * 140 - 70) + 'px');
      h.style.setProperty('--r', (Math.random() * 70 - 35) + 'deg');
      h.style.animationDelay = i * 45 + 'ms';
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1500);
    }
  }
  couple.addEventListener('pointerdown', e => burst(e.clientX, e.clientY));
  couple.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const r = couple.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2);
    }
  });
