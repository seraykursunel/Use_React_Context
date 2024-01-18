const { createContext, useState } = require("react");

const UserContext = createContext();

function Provider({ children }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const valueToShare = {
    name,
    location,
    setName,
    setLocation
  };

  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  );
}

export default UserContext;
export { Provider };
