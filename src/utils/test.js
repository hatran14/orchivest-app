import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


// const FetchData = () => {
//     const [lightData, setLightData] = useState([]);
//     const [tempData, setTempData] = useState([]);
//     const [humidData, setHumidData] = useState([]);
//     const [moistData, setMoistData] = useState([]);

//     const key = 'aio_NbBC029O8c9TIozOpL0GwBcA6Qpg'
//     useEffect(() => {
//         const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-light/data?x-aio-key=';
//         fetch(url + key)
//             .then(res => res.json())
//             .then(data => {setLightData(data)})       
//     }, [key]);

//     useEffect(() => {
//         const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-temp/data?x-aio-key=';
//         fetch(url + key)
//             .then(res => res.json())
//             .then(data => {setTempData(data)})       
//     }, [key]);

//     useEffect(() => {
//         const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-humidity/data?x-aio-key=';
//         fetch(url + key)
//             .then(res => res.json())
//             .then(data => {setHumidData(data)})
//     }, [key]);

//     useEffect(() => {
//         const url = 'https://io.adafruit.com/api/v2/Thai_Tran/feeds/dadn-cnpm.1-soilmoist/data?x-aio-key=';
//         fetch(url + key)
//             .then(res => res.json())
//             .then(data => {setMoistData(data)})
//     }, [key]);

//     // useEffect(() => {
//     //     const url = 'https://io.adafruit.com/api/v2/hatran14/feeds/test-feed/data?x-aio-key=';
//     //     fetch(url + 'aio_Nkrh55KYxGJftv0IfU3OiiXq8GAq')
//     //         .then(res => res.json())
//     //         .then(data => {console.log(data)})
//     // }, []);

//     console.log(lightData, tempData, moistData, humidData);
//     // console.log(humidData)
// }

const FetchData = async (url, setContent) => {
    const rsp = await axios
        .get(url)
        .then((res) => res.data)
        .then((data) => {
            return data
        })
        .catch((err) => console.log(err));
    setContent(rsp);
}

const PostData = async (url, data) => {
    const rsp = await axios
        .post(url, data)
        .then((res) => res.data)
        .then((data) => {
            return data
        })
        .catch((err) => console.log(err));
    return rsp;
}

export { FetchData, PostData };