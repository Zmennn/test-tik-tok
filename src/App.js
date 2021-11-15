import "./App.css";
import { request, userRequest } from "./helpers/request";
import { Gallery, User } from "./components/index";
import { useEffect, useState } from "react";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState("start");
  const [name, setName] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    request().then((res) => {
      setDataArray(res.data);
    });
  }, []);

  useEffect(() => {
    if (name) {
      userRequest("info", name).then((res) => setUserData(res));
    }
  }, [name]);

  const changPage = (page) => {
    setPage(page);
  };
  const changName = (newName) => {
    setName(newName);
  };

  if (page === "start") {
    return (
      <Gallery
        dataArray={dataArray}
        changPage={changPage}
        changName={changName}
      />
    );
  } else {
    console.log(userData);
    if (userData.data) {
      return (
        <User
          page={page}
          name={name}
          changPage={changPage}
          userData={userData}
        />
      );
    }
  }
}

export default App;
