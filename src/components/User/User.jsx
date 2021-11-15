

export function User({ page, name, changPage, userData }) {
    
const handleClick=()=>{changPage('start')}

    return (<>
        <div>{page} {name}</div>
        <img src={userData.data.user.avatarMedium} alt="user avatar" />
        <h3>{userData.data.user.nickname}</h3>
        <div>
            <div>{userData.data.stats.followerCount}</div>
            <div>{userData.data.stats.followingCount}</div>
            <div>{userData.data.stats.heatCount}</div>
            <div>{userData.data.stats.videoCount }</div>
        </div>
        <button
            type="button"
            onClick={handleClick}
        >Go back</button>
    </>)
}