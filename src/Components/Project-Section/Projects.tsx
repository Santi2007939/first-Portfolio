import Project from "./Project";
import '../../stylesheets/Projects.css'

import One from '../../images/proje/projectOne.png';
import Second from '../../images/proje/projectSecond.png';
import Third from '../../images/proje/projectThird.png';
import Fourth from '../../images/proje/projectFourth.png'
import Fifth from '../../images/proje/projectFifth.png'
import Sixth from '../../images/proje/projectSixth.png'

const Projects = (props:any) => {
    return(
        <section id="proyectos" onClick={props.Open ? props.funcOpen : () => 'nada'} className="mt-12">
            <h2 className='sm:text-6xl text-5xl nn:h-20 sm:h-16 h-14 text-center my-12 w-full xss:mb-4 mb-0' id="Projects__title">My Projects</h2>
            <div className='grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 xsm:gap-12 xss:gap-3 gap-1 justify-items-center'>
            <Project name='Tracodi' firstT='Html' secondT='Css' thirdT='Js' img={One} net='https://tracodi.netlify.app/' git='https://github.com/Santi2007939/pagina-estatica' yes={true}/>
            <Project name='Random Quote' firstT='React' secondT='Js' thirdT='Sass' img={Second} net='https://proyect-fcc-rqg.netlify.app/' git='https://github.com/Santi2007939/fcc-project-fqr' yes={true} />
            <Project name='Markdown Previewer' firstT='React' secondT='Js' thirdT='Sass' img={Third} net='https://fcc-project-markdownpreviewer.netlify.app/' git='https://github.com/Santi2007939/Santi2007939-fcc-project-mp' yes={true} />
            <Project name='Drum Machine' firstT='React' secondT='Js' thirdT='Sass' img={Fourth} net='https://fcc-project-drummachine.netlify.app/' git='https://github.com/Santi2007939/Santi2007939-fcc-project-dm' yes={true} />
            <Project name='Javascript Calculator' firstT='React' secondT='Js' thirdT='Sass' img={Fifth} net='https://fcc-project-javascriptcalculator.netlify.app/' git='https://github.com/Santi2007939/fcc-project-js' yes={true} />
            <Project name='25 + 5 Clock' firstT='React' secondT='Js' thirdT='Css' img={Sixth} code='https://codepen.io/Santi2007939/pen/RweVoNo' yes={false}/>
            </div>
            <div id="container" className='font-montserrat xss:mt-6 mt-0 flex place-content-center'>
                <a href="https://github.com/Santi2007939" target="_blank" rel="noopener noreferrer">
                    <button className="view-more">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">View More</span>
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Projects;