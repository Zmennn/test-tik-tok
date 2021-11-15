import style from './style.module.css';

export function Author({ avatar, id, name, changPage, changName,searchName }) {
    
    const clickHandler = () => {
        changPage('second');
        changName(searchName)
    }

    return (<>
        <div
            onClick={clickHandler}
            className={style.container}
            key={id}>
            <img
               className={style.avatar} 
               src={avatar}
               alt="author avatar"
            />
            <h3 className={style.name}>
               {name}
            </h3>
        </div>
    </>)
    
}