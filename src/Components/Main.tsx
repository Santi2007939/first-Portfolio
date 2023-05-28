import '../stylesheets/Main.css';

const Main = (props:any) => {
    return ( 
        <section id="inicio" className='h-full bg-secondary text-white big:grid big:grid-cols-2 content-center place-content-center flex flex-col text-center xss:mt-16 mt-12 justify-items-center items-center mx-auto w-full box-border' onClick={props.Open ? props.funcOpen : () => 'nada'}>
            <div className="flex text-center flex-col font-montserrat self-center">
                <h1 className='xs:text-4xl xss:text-2xl xsss:text-lg text-base leading-loose title'>Enhance and expand with design</h1>
                <h2 className="text-sm xsss:text-base general font-extrabold">Fabrizio Santi - Web Developer</h2>
            </div>
            <img src={props.img} alt='Developer' className="flex self-center big:w-8/12 w-6/12"/>
        </section>
    )
};

export default Main;