//React Queryを　Suspence Error Boundaryと連携
import { useQuery } from "react-query";

const sleep = delay => new Promise(resolve => setTimeout(resolve,delay));

const fetchWeather = async() => {
    await sleep(4000);
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=1c27c1c6554653dac79ee2181c3df56d')
    if(res.ok) {return res.json()};
    throw new Error(res.statusText);
}



const QuerySuspence = () => {
    const {data} = useQuery('weather' , fetchWeather)
  return (
    <figure>
    <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}  alt={data?.weather?.[0]?.main}/>
    <figcaption>{data?.weather?.[0]?.description}</figcaption>
   </figure>  
  )
}

export default QuerySuspence