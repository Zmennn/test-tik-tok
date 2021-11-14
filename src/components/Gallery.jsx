import { AddInformation, Hashtags, Author, UserInfo, Video } from './index';


export function Gallery({ dataArray }) {
    
    console.log(dataArray);

    return dataArray.map((element) => 
    (<>
        
            <UserInfo />
        <Video
            text={element.text}
            url={element.videoUrl}
            id={element.id}
        />
        {console.log(element.authorMeta.avatar)}
        <Author
            id={element.id}
            avatar={element.authorMeta.avatar}
            name={element.authorMeta.nickName}
        />
            <Hashtags/>
            <AddInformation/>
    </>)
    )
        
    
}