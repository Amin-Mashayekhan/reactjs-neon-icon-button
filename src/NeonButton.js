import {useState} from 'react';
import './NeonButton.css';
const NeonButton = ({iconName}) => {

    const [button, setButton] = useState({btn1: false})

    return(
        <button
            onClick={()=> setButton({...button, btn1: !button.btn1})}
            className={button.btn1 ? 'active neon-btn' : 'neon-btn'}>
            <i className='material-icons'>{iconName}</i>
        </button>
    )
}

export default NeonButton