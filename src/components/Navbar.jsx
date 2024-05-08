import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen((prev) => !prev)
    }

    return (
        <nav className='bg-primary fixed top-0 left-0 w-full z-50'>
            <div className='mx-auto px-4 sm:px-10 lg:px-12 py-2'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-end gap-2 md:gap-4'>
                        <h1 className="text-white font-semibold text-2xl md:text-3xl leading-normal">Hbzz.</h1>
                    </div>

                    {/* Navlinks */}
                    <div className='hidden md:block'>
                        <ul className='flex space-x-4 items-center justify-center ml-10'>
                            <Link to='about' spy={true} smooth={true} offset={-70} duration={500} className='text-white block px-3 py-2 rounded-md text-xl duration-500 ease-in-out hover:bg-secondary hover:text-primary cursor-pointer'>About</Link>
                            <Link to='projects' spy={true} smooth={true} offset={70} duration={500} className='text-white block px-3 py-2 rounded-md text-xl duration-500 ease-in-out hover:bg-secondary hover:text-primary cursor-pointer'>Projects</Link>
                            <Link to='contact' spy={true} smooth={true} offset={70} duration={500} className='text-white block px-3 py-2 rounded-md text-xl duration-500 ease-in-out hover:bg-secondary hover:text-primary cursor-pointer'>Contact</Link>
                        </ul>
                    </div>
                    {/* Hamburger */}
                    <div className='mr-[2px] flex md:hidden'>
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-white text-xl hover:text-primary hover:bg-white focus:outline-none focus-within: ring-2 focus-within:ring-offset-1 focus:ring-offset-gray-800 focus:ring-gray-400 ease-in-out duration-300'>
                            <span className='sr-only'>Open Main Menu</span>
                            {open == true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                open ? (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <Link to='about' spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenu} className='text-white block px-3 py-2 rounded-md text-xl duration-500 ease-in-out hover:bg-secondary hover:text-primary cursor-pointer'>About</Link>
                            <Link to='projects' spy={true} smooth={true} offset={-50} duration={500} onClick={handleMenu} className='text-white block px-3 py-2 rounded-md text-xl duration-500 ease-in-out hover:bg-secondary hover:text-primary cursor-pointer'>Projects</Link>
                            <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={handleMenu} className='text-white block px-3 py-2 rounded-md text-xl duration-500 ease-in-out hover:bg-secondary hover:text-primary cursor-pointer'>Contact</Link>
                        </div>
                    </div>
                ) : null
            }
        </nav >
    )
}

export default Navbar