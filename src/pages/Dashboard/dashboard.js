import StatusCard from "./row1";
import InfoGroup from "./row2";
import { FetchData } from "../../utils/test";
import { useEffect, useMemo, useState } from "react";


function Dashboard() {
  const [TempData, setTempData] = useState([]);
  const [HumidData, setHumidData] = useState([]);
  const [LightData, setLightData] = useState([]);
  const [MoistData, setMoistData] = useState([]);
  const [run, setRun] = useState(false);


  const feed_keys = ['dadn-cnpm.1-temp', 'dadn-cnpm.1-humidity', 'dadn-cnpm.1-light', 'dadn-cnpm.1-soilmoist']
  const setters = [setTempData, setHumidData, setLightData, setMoistData]

  useMemo(() => {
    const furl = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/';
    const surl = '/data?x-aio-key=aio_NbBC029O8c9TIozOpL0GwBcA6Qpg';
    if (run) {
      const interval = setInterval(() => {
        feed_keys.map((key, index) =>
          FetchData(furl + key + surl, setters[index]))
      }, 3000);
      return () => clearInterval(interval);
    }
    else {
      setRun(true);
      feed_keys.map((key, index) =>
        FetchData(furl + key + surl, setters[index]))
    }
  }, [run])

  const Data = [TempData, HumidData, LightData, MoistData]

  // console.log(LightData)
  console.group(run)
  console.log(Data)
  console.groupEnd();

  return (
    <div>
      <StatusCard data={Data} />
      <InfoGroup />
    </div>
  );
}

export default Dashboard;