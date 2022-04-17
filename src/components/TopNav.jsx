import { useContext } from "react";
import ProfileContext from "../contexts/ProfileContext";

function TopNav() {
  const profileContextValues = useContext(ProfileContext);
  console.log("values", profileContextValues);
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      {profileContextValues.username}
    </div>
  );
}
export default TopNav;
