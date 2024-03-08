
import '../App.css';
import { AiFillAudio } from "react-icons/ai";

type IconProps = {
    icon: 'microfono'
    size?: number
}

export const Icon = (props: IconProps) => {
  return (
    <div className="iconbutton">
        {props.icon === 'microfono' &&
            <button>
                <AiFillAudio size={props.size} />
                {' Icono'}
            </button>
        }
    </div>
  )
}
