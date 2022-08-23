import { observer } from "mobx-react";
import moment from "moment";
import React from "react";
import MainStore from "../store/store";
import SettingsStore from "../store/setting";
import Coin from "./coin";
const Sample1 = observer(() => {
  return (
    <div>
      Multiple Store mobx
      {MainStore.coins.map((coin, index) => (
        <>
          <Coin key={index} coin={coin} />
          {coin.lastMove !== "none" && (
            <div
              style={{
                margin: 15,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: coin.lastMove === "up" ? "#43a202" : "#f44236",
              }}
            />
          )}
        </>
      ))}
      <button onClick={SettingsStore.toggleFormat}>Toggle Time Format</button>
    </div>
  );
});

export default Sample1;
