import { Menu } from './Icons/Navbar/Menu';
import { Close } from './Icons/Navbar/Close';

const Navbar = (props:any) => {
    return(
       <nav className='grid grid-cols-3 xss:h-16 h-12 top-0 fixed w-full bg-secondary z-30' onClick={props.Open ? props.funcOpen : () => 'nada'}>
            <div className='logo xss:w-32 w-24 grid cursor-pointer' id='logo'><img src={props.logo} alt='Logo'/></div>
            <ul className='nav-links hidden xs:flex sm:text-xl text-sm col-span-2 justify-end font-montserrat'>
                <li className='flex'><a href='#inicio' className='p-5 border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary'>Home</a></li>
                <li className='flex'><a href='#About' className='p-5 border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary'>About</a></li>
                <li className='flex'><a href='#proyectos' className='p-5 border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary'>Proyects</a></li>
                <li className='flex'><a href='#contact' className='p-5 duration-500 border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary'>Contact</a></li>
            </ul>
            <div  className={`xs:hidden fixed right-0 ${!props.Open ? 'flex flex-col col-span-2 justify-end xs:hidden mx-5 py-5 animation': 'bg-slate-950 h-full fixed right-0 mx-0 flex-col justify-start w-3/5'}`} onClick={props.funcOpen}>
                {props.Open ? <Close /> : <Menu />}
            </div>
       </nav>
    )
}

export default Navbar;