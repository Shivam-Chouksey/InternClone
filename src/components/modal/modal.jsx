import classes from './modal.module.css';
import {createPortal} from 'react-dom';
export default function Modal(props){
    return createPortal( 
        <div>
        <div className={classes.backdrop}></div>
        <div className={classes.modal}>{props.children}</div>
        </div>,document.querySelector('#overlay')
        
    )
}