import { useState } from "react";
import "./App.css";
import StoreSwitcher from "./feature/storeSwitcher/StoreSwitcher";

function App() {
  const [storeType, setStoreType] = useState("recoil");

  return (
    <div>
      <form>
        <div>
          <label htmlFor="recoil-store">Recoil</label>
          <input
            type="radio"
            name="storeType"
            id="recoil-store"
            onChange={() => setStoreType("recoil")}
            value={storeType}
            checked={storeType === "recoil"}
          />
        </div>
        <div>
          <label htmlFor="redux-store">Redux</label>
          <input
            type="radio"
            name="storeType"
            id="redux-store"
            onChange={() => setStoreType("redux")}
            checked={storeType === "redux"}
          />
        </div>
      </form>
      <StoreSwitcher storeType={storeType} />
    </div>
  );
}

export default App;
