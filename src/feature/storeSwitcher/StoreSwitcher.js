import React from "react";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { store } from "../redux";

import { CharacterCounter as CharacterCounterRecoil } from "../recoil";
import { CharacterCounter as CharacterCounterRedux } from "../redux";

function StoreSwitcher({ storeType }) {
  switch (storeType) {
    case "redux":
      return (
        <Provider store={store}>
          <h1>Redux</h1>
          <CharacterCounterRedux />
        </Provider>
      );
    case "recoil":
      return (
        <RecoilRoot>
          <h1>Recoil</h1>
          <CharacterCounterRecoil />
        </RecoilRoot>
      );

    default:
      throw new Error("You should provide the store type");
  }
}

export default React.memo(StoreSwitcher);
