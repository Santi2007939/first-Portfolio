export function Close(props: SVGProps<SVGSVGElement>) {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='mt-4 absolute right-8 hover:cursor-pointer hover:text-pbutton'
       {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"></path></svg>
       <ul className='nav-links sm:flex sm:flex-col col-span-2 justify-end py-4 z-10 mt-12 xss:text-2xl textbase'> 
                <li className='py-8 text-center my-1'><a href='#inicio' className='border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary w-full px-10 py-5'>Home</a></li>
                <li className='py-8 text-center my-1'><a href='#About' className='border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary px-10 py-5'>About</a></li>
                <li className='py-8 text-center my-1'><a href='#proyectos' className='border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary px-10 py-5'>Projects</a></li>
                <li className='py-8 text-center my-1'><a href='#contact' className='border-y-0 border-primary border-solid hover:border-y-2 transition hover:bg-primary hover:text-secondary px-10 py-5'>Contact</a></li>
            </ul>
       </>
    )
  }