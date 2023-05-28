import '../stylesheets/About.css';

const About = (props:any) => {
    return(
        <section id="About" onClick={props.Open ? props.funcOpen : () => 'nada'} className='sm:text-6xl text-5xl text-center my-12 font-montserrat h-full flex place-content-center justify-center items-center content-center justify-items-center'>
            <div>
                <h1 className='About__title'>About me</h1>
                <div className='sm:grid sm:grid-cols-2 content-center place-content-center flex flex-col-reverse justify-items-center items-center text-lg text-justify sm:mt-4 mt-0 mb-12'>
                    <img src={props.imagen} alt="Tecnologías que utilizo" title='Tecnologías que utilizo' className='w-4/6 hover:cursor-pointer' />
                    <p className='p-8'>I'm Fabrizio, a passionate and dedicated young web developer. Little by little I am learning about this field to create sites with more functionality, design and that can be used in various sectors. At the moment, I know how to use the technologies of the image.</p>
                </div>
            </div>
        </section>
    )
}

export default About;