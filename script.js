const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLink = document.querySelector('nav ul');

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-90', 'backdrop-blur-lg', 
        'shadow-lg', 'dark:bg-[#11001F]', 'dark:shadow-white/20');
        navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-90', 
        'bg-opacity-50','dark:border', 'dark:border-white/50', 
      'dark:bg-transparent');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 
        'shadow-lg', 'dark:shadow-white/20');
        navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 
        'bg-opacity-50','dark:border', 'dark:border-white/50', 
      'dark:bg-transparent');
    }
})

 // This runs when the page loads: sets the correct theme
  (function () {
    const html = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  })();

  // This toggles the theme when you click the moon button
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }