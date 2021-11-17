import style from "./App.module.css";
import { request, userRequest } from "./helpers/request";
import { Gallery, User, Error } from "./components/index";
import { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [status, setStatus] = useState("pending");
  const [name, setName] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    setStatus("pending");
    request()
      .then((res) => setDataArray(res.data))
      .then(() => setStatus("firstPg"))
      .catch((err) => setStatus("error"));
  }, []);

  useEffect(() => {
    if (name && status === "second") {
      setStatus("pending");
      userRequest("info", name)
        .then((res) => {
          if (res.data.stats) {
            return res;
          } else {
            throw new Error();
          }
        })
        .then((res) => setUserData(res))
        .then(() => setStatus("secondPg"))
        .catch((err) => setStatus("error"));

      // userRequest("feed", name)
      //   .then((res => { console.log(res) }))
    }
  }, [name, status]);

  const changStatus = (status) => {
    setStatus(status);
  };
  const changName = (newName) => {
    setName(newName);
  };

  return (
    <>
      {status === "firstPg" && (
        <Gallery
          dataArray={dataArray}
          changPage={changStatus}
          changName={changName}
        />
      )}

      {status === "pending" && (
        <div className={style.container}>
          <div className={style.spinContainer}>
            <Loader type="Circles" color="#00BFFF" height={120} width={120} />
          </div>
        </div>
      )}

      {status === "secondPg" && (
        <User
          changPage={changStatus}
          userData={userData}
          dataArray={dataArray}
        />
      )}

      {status === "error" && <Error />}
    </>
  );
}

export default App;
