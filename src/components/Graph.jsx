import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData, setLoaded } from "../redux/action/statistics";
import { setTransformData } from "../redux/action/transformData";
import Select from "./Select";
import dataBulder from "../helpers/dataBuilder";
import transformData from "../helpers/transformData";

function Graph() {
  const dispatch = useDispatch();
  const dataForShedule = useSelector(
    ({ transformData }) => transformData.dataForShedule
  );
  const isDone = useSelector(({ transformData }) => transformData.isDone);
  const devices = useSelector(({ devices }) => devices.devices);
  const isSetDevices = useSelector(({ devices }) => devices.isSetDevices);
  const statistics = useSelector(({ statistics }) => statistics.item);
  const isLoaded = useSelector(({ statistics }) => statistics.isLoaded);
  const isLoadedData = useSelector(({ statistics }) => statistics.isLoadedData);
  const data = useSelector(({ statistics }) => statistics.data);
  if (isLoaded) {
    dispatch(setData(dataBulder(statistics.data.o)));
    dispatch(setLoaded(false));
  }

  if (isLoadedData && isSetDevices && !isDone) {
    dispatch(setTransformData(transformData(data, devices)));
  }

  return (
    <div className="">
      <div className="wrapper">
        <div className="select">
          {isLoadedData && <Select statData={data} />}
        </div>
        <div className="graph">
          <h3 className="graph__title">Total views: Age (by day of week)</h3>

          <div className="graph__inner">
            <div className="graph__count">
              <div className="graph__count-item">2,400</div>
              <div className="graph__count-item">1,800</div>
              <div className="graph__count-item">1,200</div>
              <div className="graph__count-item">600</div>
              <div className="graph__count-item">0</div>
            </div>

            {isDone && (
              <div className="graph__schedule">
                <div className="graph__schedule-colums">
                  <div className="graph__schedule-colum graph__schedule-colum--sun">
                    <div
                      className="graph__colum graph__colum--undefined"
                      style={{ height: `${dataForShedule.Sun.undefined}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--kids"
                      style={{ height: `${dataForShedule.Sun.kid}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--youngadult"
                      style={{ height: `${dataForShedule.Sun.young}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--adult"
                      style={{ height: `${dataForShedule.Sun.adult}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--senior"
                      style={{ height: `${dataForShedule.Sun.old}px` }}
                    ></div>
                  </div>
                  <div className="graph__schedule-colum graph__schedule-colum--mon">
                    <div
                      className="graph__colum graph__colum--undefined"
                      style={{ height: `${dataForShedule.Mon.undefined}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--kids"
                      style={{ height: `${dataForShedule.Mon.kid}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--youngadult"
                      style={{ height: `${dataForShedule.Mon.young}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--adult"
                      style={{ height: `${dataForShedule.Mon.adult}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--senior"
                      style={{ height: `${dataForShedule.Mon.old}px` }}
                    ></div>
                  </div>
                  <div className="graph__schedule-colum graph__schedule-colum--tue">
                    <div
                      className="graph__colum graph__colum--undefined"
                      style={{ height: `${dataForShedule.Tue.undefined}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--kids"
                      style={{ height: `${dataForShedule.Tue.kid}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--youngadult"
                      style={{ height: `${dataForShedule.Tue.young}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--adult"
                      style={{ height: `${dataForShedule.Tue.adult}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--senior"
                      style={{ height: `${dataForShedule.Tue.old}px` }}
                    ></div>
                  </div>
                  <div className="graph__schedule-colum graph__schedule-colum--wed">
                    <div
                      className="graph__colum graph__colum--undefined"
                      style={{ height: `${dataForShedule.Wed.undefined}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--kids"
                      style={{ height: `${dataForShedule.Wed.kid}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--youngadult"
                      style={{ height: `${dataForShedule.Wed.young}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--adult"
                      style={{ height: `${dataForShedule.Wed.adult}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--senior"
                      style={{ height: `${dataForShedule.Wed.old}px` }}
                    ></div>
                  </div>
                  <div className="graph__schedule-colum graph__schedule-colum--thu">
                    <div
                      className="graph__colum graph__colum--undefined"
                      style={{ height: `${dataForShedule.Thu.undefined}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--kids"
                      style={{ height: `${dataForShedule.Thu.kid}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--youngadult"
                      style={{ height: `${dataForShedule.Thu.young}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--adult"
                      style={{ height: `${dataForShedule.Thu.adult}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--senior"
                      style={{ height: `${dataForShedule.Thu.old}px` }}
                    ></div>
                  </div>
                  <div className="graph__schedule-colum graph__schedule-colum--fri">
                    <div
                      className="graph__colum graph__colum--undefined"
                      style={{ height: `${dataForShedule.Fri.undefined}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--kids"
                      style={{ height: `${dataForShedule.Fri.kid}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--youngadult"
                      style={{ height: `${dataForShedule.Fri.young}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--adult"
                      style={{ height: `${dataForShedule.Fri.adult}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--senior"
                      style={{ height: `${dataForShedule.Fri.old}px` }}
                    ></div>
                  </div>
                  <div className="graph__schedule-colum graph__schedule-colum--sat">
                    <div
                      className="graph__colum graph__colum--undefined"
                      style={{ height: `${dataForShedule.Sat.undefined}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--kids"
                      style={{ height: `${dataForShedule.Sat.kid}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--youngadult"
                      style={{ height: `${dataForShedule.Sat.young}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--adult"
                      style={{ height: `${dataForShedule.Sat.adult}px` }}
                    ></div>
                    <div
                      className="graph__colum graph__colum--senior"
                      style={{ height: `${dataForShedule.Sat.old}px` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="graph__schedule-days">
            <div className="graph__schedule-day">Sun</div>
            <div className="graph__schedule-day">Mon</div>
            <div className="graph__schedule-day">Tue</div>
            <div className="graph__schedule-day">Wed</div>
            <div className="graph__schedule-day">Thu</div>
            <div className="graph__schedule-day">Fri</div>
            <div className="graph__schedule-day">Sat</div>
          </div>

          <div className="graph__description">
            <div className="graph__description-item graph__description-item--gray">
              Undefined
            </div>
            <div className="graph__description-item graph__description-item--green">
              Kids
            </div>
            <div className="graph__description-item graph__description-item--blue">
              Young Adult
            </div>
            <div className="graph__description-item graph__description-item--darkblue">
              Adult
            </div>
            <div className="graph__description-item graph__description-item--red">
              Senior
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
