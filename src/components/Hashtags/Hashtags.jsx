import style from './style.module.css';

export function Hashtags({ hash=[],id }) {
    return (<div
        key={id}>
        {hash.map((element) => (<>
        <div
         key={element.id}
        >
           {`#${element.name}`} 
        </div>
           </>))}
    </div>)
    
}

