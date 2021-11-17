import style from './style.module.css';
import { useEffect, useState,useCallback } from 'react';


export function Video({ url, id, text }) {
    const [status, setStatus] = useState(false);
    
    const clickHandler = useCallback((event) => {
        if (event.target.tagName !== "VIDEO") { return };
        if (!status) { return };
        if (event.target.paused) {
            event.target.play();
        } else {
            event.target.pause();
        }
    }, [status]);
    
    useEffect(
       function addObserver() {
       const observer = new IntersectionObserver((ev)=>{startMusic(ev)}, {
           threshold: 0.9
        })
        observer.observe(document.getElementById(id));
       return()=>observer.disconnect()  
    });

    
    const startMusic = (ev)=>{
        const target = ev[0].target.children[1];
        const status = (ev[0].isIntersecting);
        if (status) {            
                target.play();
                setStatus(true);              
        } else {
            target.pause();
            setStatus(false);
        }
    };

    return (<>
    <div id={id}
           
        >
        <div className={style.text}>
            {text}
        </div>
            
        <video          
            className={style.video}
            key={id}
            onClick={clickHandler}
            src={url}
        />
    </div>
    </>   
    )
};