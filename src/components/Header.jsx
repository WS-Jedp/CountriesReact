import React from 'react'

// Styles
import './styles/Header.css';

const Header = () => {

  const [theme, setTheme] = React.useState('default');

  const handleTheme = () => {
    const root = document.documentElement;
    if(theme === 'default'){
      setTheme('dark')
      root.style.setProperty('--color-main', 'hsl(207, 26%, 17%)');
      root.style.setProperty('--color-white', 'hsl(209, 23%, 22%)');
      root.style.setProperty('--color-secondary', 'hsl(0, 0%, 100%)');
      

    }else {
      setTheme('default');
      root.style.setProperty('--color-main','hsl(0, 0%, 98%)');
      root.style.setProperty('--color-white', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--color-secondary', 'hsl(200, 15%, 8%)');

    }
  }

  return (
    <header className="myHeader">
      <h1 className="title">
        Where in the World?
      </h1>
      <div className="button-theme" onClick={handleTheme}>
        {
          theme === 'default' ? (<><i class="far fa-moon"></i> <span>Dark Mode</span></>) : (<><i class="fas fa-moon"></i> <span>Dark Mode</span></>)
        }
      </div>
    </header>
  );
}

export default Header
