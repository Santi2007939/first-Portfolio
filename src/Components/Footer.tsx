const Footer = (props:any) => {
    return(
        <footer onClick={props.Open ? props.funcOpen : () => 'nada'} className="text-center font-montserrat">
            Creado por {props.autor} ({props.año})©
        </footer>
    );
};

export default Footer;