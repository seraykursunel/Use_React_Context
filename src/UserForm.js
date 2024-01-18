import React, { useContext } from "react";
import UserContext from "./UserContext";

const Form = () => {
  const { setLocation, setName } = useContext(UserContext);

  return (
    <div className="user-form">
      {/* Context'te kullanıcının adını değiştir */}
      <div className="input-item">
        <label className="label">İsmi Güncelle: </label>
        <input className="input" onChange={(e) => setName(e.target.value)} />
      </div>

      {/* Context'te kullanıcının konumunu değiştir */}
      <div className="input-item">
        <label className="label">Konumu Güncelle: </label>
        <input
          className="input"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
