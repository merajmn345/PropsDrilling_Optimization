import { useState } from "react";
import ProfileContext from "../contexts/ProfileContext";
import Page from "./Page";
import TopNav from "./TopNav";

function MainContent() {
  const [username, setUsername] = useState("Meraj");

  // createContext method provide by reaact
  // consumer shoulsd be wraped in contextProvide

  return (
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TopNav />
        <Page />
      </div>
    </ProfileContext.Provider>
  );
}
export default MainContent;
