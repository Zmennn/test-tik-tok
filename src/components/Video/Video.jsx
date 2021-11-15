import style from './style.module.css';

export function Video({ url,id,text }) {

    function position(event) {
        return event.target.getBoundingClientRect(event);
    };

    function handleScroll(event){ if (-position(event).top > position(event).height*0.4
                ||position(event).bottom>window.innerHeight+position(event).height*0.4) {
        event.target.pause();
        window.removeEventListener('scroll', () => {               
              handleScroll(event) 
            }); 
    }
    };

    const clickHandler = (event) => {
        if (event.target.tagName !== "VIDEO") { return };

        if(event.target.paused){    
            event.target.play();            
            window.addEventListener('scroll', () => {               
              handleScroll(event) 
            });    
        } else {
            event.target.pause();
            window.removeEventListener('scroll', () => {               
              handleScroll(event) 
            }); 
        }
    }

    return (<>
        <div>
            {text}
        </div>
        <video
        key={id}
        onClick={clickHandler}
        src={url}
        />
        </>)
}