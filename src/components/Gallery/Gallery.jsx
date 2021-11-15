import { AddInformation, Hashtags, Author, Video } from '../index';
import style from './style.module.css';


export function Gallery({ dataArray }) {
    
    console.log(dataArray);

    return dataArray.map((element) => 
    (<>
        <Author
            id={element.id}
            avatar={element.authorMeta.avatar}
            name={element.authorMeta.nickName}
        />
            
        <Video
            text={element.text}
            url={element.videoUrl}
            id={element.id}
        />
        
        
        <Hashtags
            hash={element.hashtags}
            id={element.id}
        />
        <AddInformation
            comments={element.commentCount}
            likes={element.diggCount}
            id={element.id}
        />
    </>)
    )
        
    
}