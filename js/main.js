function shareMedia() {
  let shareIconsSection = document.getElementById('shareSection');
  let afterClickShare = document.getElementById('shareTitleSection');
  if (shareIconsSection.style.display === 'none'){
    shareIconsSection.style.display = 'block';
    afterClickShare.classList.add('after-click-media-share');
  } else {
    shareIconsSection.style.display = 'none';
    afterClickShare.classList.remove('after-click-media-share');
  }
}
