import { AddInformation, Hashtags, Author, Video } from '../index';
import style from './style.module.css';

export function Gallery({ dataArray,changPage,changName }) {
    
try{
    return dataArray.map((element) =>
        
    (<div
        className={style.container}
        key={element.id}
    >
        <Author
            
            id={element.id}
            avatar={element.authorMeta.avatar}
            name={element.authorMeta.nickName}
            searchName={element.authorMeta.name}
            changPage={changPage}
            changName={changName}
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
        </div>)
    )} catch { changPage('error') }  
}