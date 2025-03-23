import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1>About Class Component</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>SWIGGY</h2>
      <UserClass name={"First"} location={"Dehradun Class"} />
    </div>
  );
};

export default About;
