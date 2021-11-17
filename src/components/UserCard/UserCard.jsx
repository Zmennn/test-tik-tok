import style from './style.module.css';

export function UserCard({dataArray}) {
    
    return dataArray.map((el) => 
        (
        <li key={el.id}
            className={style.galleryElement}>     
                <div
                    className={style.text}
                    >views-{el.playCount}
                </div>
                <video
                    controls="controls"
                    src={el.videoUrl}
                    className={style.video}
                ></video>
        </li>
    ))
}