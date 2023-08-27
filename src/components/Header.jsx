import Navbar from './Navbar'
import Logo from '/logo.png'

// styles
import './styles/header.styles.css'

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='h-container flexCenter paddings innerWidth'>
        <img src={Logo} alt='Logo' width={100} />
        <Navbar />
      </div>
    </section>
  )
}

export default Header
