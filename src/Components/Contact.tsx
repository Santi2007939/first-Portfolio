import { Github } from "./Icons/Social/Github";
import { Mail } from "./Icons/Social/Mail";
import { Link } from "./Icons/Social/Link";
import { Twitter } from "./Icons/Social/Twitter";

import '../stylesheets/Contact.css';

const Contact = (props:any) => {
    return(
        <section id="contact" onClick={props.Open ? props.funcOpen : () => 'nada'} className='sm:text-6xl text-5xl text-center my-12 w-full font-montserrat p-1 flex flex-col h-full place-content-center'>
            <h2 className="contact__title nn:h-16 xns:h-32 dw:h-36 h-max">How do you take your coffee?</h2>
            <ul className='contact-links flex flex-wrap justify-center mt-12'>
                <li className="p-2"><a href={props.Github} target="_blank" rel="noopener noreferrer"><Github /></a></li>
                <li className="p-2"><a href={props.Mail} target="_blank" rel="noopener noreferrer"><Mail /></a></li>
                <li className="p-2"><a href={props.Link} target="_blank" rel="noopener noreferrer"><Link /></a></li>
                <li className="p-2"><a href={props.Twitter} target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
            </ul>
        </section>
    );
};

export default Contact;