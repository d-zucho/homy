import './styles/navbar.styles.css'

const Navbar = () => {
  return (
    <nav className='nav-links'>
      <a className='header__nav__link' href='#'>
        Residencies
      </a>
      <a className='header__nav__link' href='#'>
        Contact Us
      </a>
      <a className='header__nav__link' href='#'>
        Get Started
      </a>
      <a className='header__nav__link' href='#'>
        Our Values
      </a>
      <button className='button'>
        <a href='#'>Contact</a>
      </button>
    </nav>
  )
}

export default Navbar
