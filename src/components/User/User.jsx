import style from './style.module.css';
import { UserCard, Pagination } from '../index';
import { useEffect, useState } from 'react';

export function User({ changPage, userData, dataArray }) {
  const [numberPage, setNumberPage] = useState(1);
  const [resultArr, setResultArr] = useState([]);

  const isNumberPage = (res) => { setNumberPage(res) };

  useEffect(() => {setResultArr( dataArray.slice(((numberPage-1)*10),(numberPage-1)*10+10)); }, [numberPage, dataArray]);

    try{
    return (<>
        
        <button
            className={style.button}
            type="button"
            onClick={() => { changPage("firstPg") }}
        >Go back
        </button>
        <div className={style.container}>
          <img className={style.img} src={userData.data.user.avatarMedium} alt="user avatar" />
          <div className={style.textContainer}>
            <h3 className={style.name}>{userData.data.user.nickname}</h3>
            <ul className={style.list}>
              <li className={style.listElement}>followers--- {userData.data.stats.followerCount} </li>
              <li className={style.listElement}>following--- {userData.data.stats.followingCount} </li>
              <li className={style.listElement}>hearts------ {userData.data.stats.heartCount} </li>
              <li className={style.listElement}>videos------ {userData.data.stats.videoCount } </li>
            </ul>
          </div>
        </div>   
        <div className={style.gallery}>
      </div>
      <ul className={style.videoContainer}>
        <UserCard
          dataArray={resultArr }/>
      </ul>
      <ul className={style.buttonList}>
        <Pagination
          isNumberPage={isNumberPage}
        />
      </ul>
    </>)
} catch{changPage('error')}
}