import { Github} from '../Icons/Tech/Github';
import { Netli } from '../Icons/Tech/Netli';
import { Code } from '../Icons/Tech/Code';
import Tech from './Tech';

const Project = (props:any) => {

    return (
        <div className='project md:w-10/12 w-11/12 h-52 xsm:m-4 m-0 font-montserrat box-border rounded-lg flex place-content-center justify-items-center items-center content-center'>
            <img src={props.img} alt={`Proyecto #${props.num}`}  className='md:w-3/12 xs:w-5/12 xsss:w-6/12 w-8/12 absolute rounded-lg'/>
            <div className="project__text flex flex-col bg-transparent justify-items-center items-center content-center h-fit place-content-center transition">
                <h3 className='lg:text-xl xss:text-lg text-xs text-center '>{props.name}</h3>
                <ul className={`project__icons flex justify-center transition ${props.yes ? '' : 'hidden'}`}> 
                    <li><a href={props.git} className='mx-3 cursor:hover' target="_blank" rel="noopener noreferrer"><Github /></a></li>
                    <li><a href={props.net} className='mx-3' target="_blank" rel="noopener noreferrer"><Netli /></a></li>
                </ul>
                <div className={`project__icons flex justify-center transition ${!props.yes ? '' : 'hidden'}`}> 
                    <a href={props.code} target="_blank" rel="noopener noreferrer"><Code /></a>
                </div>
                <div className='project__tech flex justify-items-center items-center content-center place-content-center'>
                    <Tech  i={props.firstT} />
                    <Tech  i={props.secondT} />
                    <Tech  i={props.thirdT} />
                </div>
            </div>
        </div>
    )
};

export default Project;