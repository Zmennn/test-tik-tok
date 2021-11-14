

export function Video({ url }) {

    const clickHandler = (event) => {
        if (event.target.tagName !== "VIDEO") { return };
        if(event.target.paused){    
            event.target.play()   
        }else{event.target.pause()}
    }
    return (<video
        // controls="controls"
        onClick={clickHandler}
    src={url}
    >
  
</video>)
}