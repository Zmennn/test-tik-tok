import { AddInformation, Hashtags, Text, UserInfo, Video } from './index';


export function Gallery({ dataArray }) {
    

    return dataArray.map((element) => 
    (<>
        <div> Hi</div>
            <UserInfo />
        <Video
            url={element.videoUrl}
        />
            <Text/>
            <Hashtags/>
            <AddInformation/>
    </>)
    )
        
    
}