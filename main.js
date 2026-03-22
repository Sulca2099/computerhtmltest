function darkModeToggle(){
  const page document.getElementById('bodythe');
  alert('Dark mode on');
  page.style.color = (page.style.color=='rgb(0,0,0)') ? 'rgb(255,255,255)' : 'rgb(0,0,0)';
  
  return 0;
}
