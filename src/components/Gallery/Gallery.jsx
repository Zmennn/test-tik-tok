import { AddInformation, Hashtags, Author, Video } from '../index';

export function Gallery({ dataArray,changPage,changName }) {
    
try{
    return dataArray.map((element) =>
        
    (<>
        <Author
            key={`qw${element.id}`}
            id={element.id}
            avatar={element.authorMeta.avatar}
            name={element.authorMeta.nickName}
            searchName={element.authorMeta.name}
            changPage={changPage}
            changName={changName}
        />
            
        <Video
            key={`sw${element.id}`}
            text={element.text}
            url={element.videoUrl}
            id={element.id}
        />
        
        
        <Hashtags
            key={`fw${element.id}`}
            hash={element.hashtags}
            id={element.id}
        />
        <AddInformation
            key={`hw${element.id}`}
            comments={element.commentCount}
            likes={element.diggCount}
            id={element.id}
        />
        </>)
    )} catch { changPage('error') }  
}