import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function FetchData() {
    const [lightData, setLightData] = useState([]);
    const [tempData, setTempData] = useState([]);
    const [humidData, setHumidData] = useState([]);
    const [moistData, setMoistData] = useState([]);

    const key = 'aio_NbBC029O8c9TIozOpL0GwBcA6Qpg'
    useEffect(() => {
        const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-light/data?x-aio-key=';
        fetch(url + key)
            .then(res => res.json())
            .then(data => {setLightData(data)})       
    }, [key]);

    useEffect(() => {
        const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-temp/data?x-aio-key=';
        fetch(url + key)
            .then(res => res.json())
            .then(data => {setTempData(data)})       
    }, [key]);

    useEffect(() => {
        const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-humid/data?x-aio-key=';
        fetch(url + key)
            .then(res => res.json())
            .then(data => {setHumidData(data)})
    }, [key]);

    useEffect(() => {
        const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-moist/data?x-aio-key=';
        fetch(url + key)
            .then(res => res.json())
            .then(data => {setMoistData(data)})
    }, [key]);

    console.log(lightData, tempData);
    // console.log(humidData)
}

export default FetchData;