import { useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    const [userName, setUserName] = useState();
  
    //authentication
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: "Vinayak Trikha",
      };
      setUserName(data.name);
    }, []);
  
    return (
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    );
  };

  export default AppLayout;