const btnDarkMode = document.querySelector('.dark-mode-btn');

// проверяем включен ли темный режим
if(localStorage.getItem('dark-mode') === 'dark') {
  document.body.classList.add('dark');
  btnDarkMode.classList.add('dark-mode-btn--active');
} 

if(!localStorage.getItem('dark-mode')) { // если пользователь ещё не включал темный режим
  // проверка темной темы на уровне системы
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
    document.body.classList.add('dark');
    btnDarkMode.classList.add('dark-mode-btn--active');
  }

  // если меняются системные настройки, то меняем тему
  window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    if(newColorScheme === 'dark') {
      document.body.classList.add('dark');
      btnDarkMode.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnDarkMode.classList.remove('dark-mode-btn--active');
    }
  })
}


// Dark Mode
btnDarkMode.addEventListener('click', () => {
  btnDarkMode.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  if(isDark) {
    localStorage.setItem('dark-mode', 'dark');
  } else {
    localStorage.setItem('dark-mode', 'light');
  }
})