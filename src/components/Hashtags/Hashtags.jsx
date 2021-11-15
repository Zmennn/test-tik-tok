import style from './style.module.css';

export function Hashtags({ hash=[],id }) {
    return (<div
        className={style.container}
        key={id}>
        {hash.map((element) => (<>
            <div
                className={style.innerContainer}
                 key={element.id}
            >
                {`#${element.name}`} 
            </div>
           </>))}
    </div>)
    
}

