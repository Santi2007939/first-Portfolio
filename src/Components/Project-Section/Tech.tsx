import { Sass } from "../Icons/Tech/Sass";
import { Boot } from "../Icons/Tech/Boot";
import { Css } from "../Icons/Tech/Css";
import { Html } from "../Icons/Tech/Html";
import { Js } from "../Icons/Tech/Js";
import { React } from "../Icons/Tech/React";
import { Vite } from "../Icons/Tech/Vite";

const Tech = (props:any) => {

    let tech:any;
    let icon:any;
    const arr = [['Sass', <Sass />], ['Boot', <Boot />], ['Css', <Css />], ['Html', <Html />], ['Js', <Js />], ['React', <React />], ['Vite', <Vite />]]

    switch (props.i) {
        case 'Sass':
            tech = arr[0][0];
            icon = arr[0][1];
            break;
        case 'Boot':
            tech = arr[1][0];
            icon = arr[1][1];
            break;
        case 'Css':
            tech = arr[2][0];
            icon = arr[2][1];
            break;
        case 'Html':
            tech = arr[3][0];
            icon = arr[3][1];
            break;
        case 'Js':
            tech = arr[4][0];
            icon = arr[4][1];
            break;
        case 'React':
            tech = arr[5][0];
            icon = arr[5][1];
            break;
        case 'Vite':
            tech = arr[6][0];
            icon = arr[6][1];
            break;
    }

    return(
        <div className="p-1 m-1 bg-sbutton text-secondary divide-secondary rounded-sm items-center justify-items-center">
            {icon}
        </div>
    )
};

export default Tech;