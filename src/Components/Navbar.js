import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/pizzaLogo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'


function Navbar() {

const [openLinks, setOpenLinks] = useState(false)

const toogleNavbar = () => {
    setOpenLinks(!openLinks)
}
  return (
    <div className='navbar'>
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="logo" />
            <div className="hiddenLinks">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={toogleNavbar}>
                <ReorderIcon/>
            </button>
            
        </div>
      
    </div>
  )
}

export default Navbar
