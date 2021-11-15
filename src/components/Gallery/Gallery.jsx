import { AddInformation, Hashtags, Author, Video } from '../index';
import style from './style.module.css';
import { toast } from 'react-toastify';


export function Gallery({ dataArray,changPage,changName }) {
    
    // console.log(dataArray);

    return dataArray.map((element) => 
    (<>
        <Author
            key="qwwq"
            id={element.id}
            avatar={element.authorMeta.avatar}
            name={element.authorMeta.nickName}
            searchName={element.authorMeta.name}
            changPage={changPage}
            changName={changName}
        />
            
        <Video
            key="jdssjkd"
            text={element.text}
            url={element.videoUrl}
            id={element.id}
        />
        
        
        <Hashtags
            key="nnjdhvd"
            hash={element.hashtags}
            id={element.id}
        />
        <AddInformation
            key="skdsdj"
            comments={element.commentCount}
            likes={element.diggCount}
            id={element.id}
        />
    </>)
    )
        
    
}