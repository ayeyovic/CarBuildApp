import './Header.css'

function Header() {
  return (
    <header className="header">
      <span className="header__logo">CarBuildApp</span>
      <nav className="header__nav">
        <a href="#">Feed</a>
        <a href="#">Builds</a>
        <a href="#">Forums</a>
      </nav>
    </header>
  )
}

export default Header
