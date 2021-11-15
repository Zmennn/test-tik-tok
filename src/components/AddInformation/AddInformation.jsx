import style from './style.module.css';
import bubble from "../../img/bubble.png";
import heart from "../../img/heart.png";

export function AddInformation({comments,likes,id}) {
    return (
    <div
        className={style.container}
        key={id}
    >
        <div className={style.innerContainer} key="jdsj">
            <img className={style.icon} src={bubble} alt="logo comment" />
        <div>{comments}</div>           
        </div>
        <div className={style.innerContainer} key="rsss">
              <img className={style.icon} src={heart} alt="logo like" /> 
                {likes}
        </div>
    </div>
    )
}


