import { AddInformation, Hashtags, Author, UserInfo, Video } from './index';


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
        {console.log(element.authorMeta.avatar)}
        
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