const UseTheme = () => {
  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;

  const storedAccent = localStorage.getItem('customColor');
  const legacyAccents = {
    'custom-color-1': '#c5f36a',
    'custom-color-2': '#8dd3c7',
    'custom-color-3': '#f4a261',
    'custom-color-4': '#d8a7f0',
    'custom-color-5': '#f28482',
  };
  const accent = storedAccent?.startsWith('#') ? storedAccent : legacyAccents[storedAccent];
  if (accent) {
    document.documentElement.style.setProperty('--color-accent', accent);
  }
};

export default UseTheme;
