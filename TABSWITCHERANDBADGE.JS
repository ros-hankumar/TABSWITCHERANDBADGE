function switchTab(idx) {
  document.querySelectorAll('.tPane').forEach((p, i) => p.classList.toggle('hidden', i !== (idx - 1)));
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === (idx - 1)));
}

function incBadge() {
  const badge = document.getElementById('nBadge');
  badge.innerText = parseInt(badge.innerText) + 1;
}
