import React from "react";

import { useDispatch } from "react-redux";
import { setDevices } from "../redux/action/devices";
import { setIsDone } from "../redux/action/transformData";

function Select({ statData }) {
  const dispatch = useDispatch();
  statData.map(item => {
    return item.idDevice
  })
  const buttonStatus = new Array(statData.length).fill(true);
  const [active, setAktive] = React.useState(buttonStatus);
  
  const handleActive = (iter) => {
    setAktive(
      [...active].map((item, i) => {
        if (i === iter) {
          return (item = !item);
        }
        return item;
      })
    );
  };

  React.useEffect(() => {
    dispatch(setDevices(active));
    dispatch(setIsDone(false))
  }, [active]);

  return (
    <div className="select__items">
      {statData.map((item, i) => {
        return (
          <div
            onClick={() => handleActive(i)}
            className={
              active[i] ? "select__item select__item--active" : "select__item"
            }
            key={item.idDevice}
          >
            {item.idDevice}
          </div>
        );
      })}
    </div>
  );
}

export default Select;
