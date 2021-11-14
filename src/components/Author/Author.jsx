import style from './Author.module.css';

export function Author({avatar,id,name}) {
    return (<>
        <div className={style.container}>
            <img
               className={style.avatar} 
               src={avatar}
               alt="author avatar"
            />
            <a className={style.name}>
               {name}
            </a>
        </div>
    </>)
    
}