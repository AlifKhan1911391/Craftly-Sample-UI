// ===== CRAFTLY INTERNET — SHARED JS =====

// Active nav link
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });

  // Init animations
  document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4').forEach(el => {
    el.style.opacity = '0';
  });

  setTimeout(() => {
    document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4').forEach(el => {
      el.style.animation = '';
    });
  }, 50);
});

// Like toggle
function toggleLike(btn) {
  btn.classList.toggle('liked');
  const countEl = btn.querySelector('.like-count');
  if (countEl) {
    let count = parseInt(countEl.textContent);
    countEl.textContent = btn.classList.contains('liked') ? count + 1 : count - 1;
  }
}

// Tab switching
function switchTab(tabGroup, tabName) {
  document.querySelectorAll(`[data-tab-group="${tabGroup}"] .tab-btn`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll(`[data-tab-content="${tabGroup}"]`).forEach(panel => {
    panel.style.display = panel.dataset.tab === tabName ? 'block' : 'none';
  });
}

// Compose box auto-resize
document.querySelectorAll('.compose-input').forEach(textarea => {
  textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
});

// Follow button toggle
function toggleFollow(btn) {
  const isFollowing = btn.dataset.following === 'true';
  btn.dataset.following = (!isFollowing).toString();
  btn.textContent = isFollowing ? 'Follow' : 'Following';
  btn.classList.toggle('btn-secondary', isFollowing);
  btn.classList.toggle('btn-ghost', !isFollowing);
}
