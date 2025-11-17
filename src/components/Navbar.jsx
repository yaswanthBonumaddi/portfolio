import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header max-w-7xl'>
      <NavLink to='/' className=" w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md mr-5 ">
        <p className='blue-gradient_text'>Yaswanth</p>
      </NavLink>
      <nav className=' flex text-lg gap-5 font-medium'>
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-block' }>
          About
        </NavLink>
        <NavLink to='/projects' className={({isActive})=> isActive? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({isActive})=> isActive? 'text-blue-500' : 'text-black'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar