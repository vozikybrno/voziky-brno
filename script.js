function showSection(sectionId) {
  var sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  var el = document.getElementById(sectionId);
  if (el) {
    el.style.display = 'block';
  }
}
