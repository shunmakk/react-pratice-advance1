import React from 'react'
import { useQuery } from 'react-query';

//sleep関数
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

//天気を取得するための関数
const fetchWeather = async() => {
    await sleep(3000);
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=1c27c1c6554653dac79ee2181c3df56d')
    if(res.ok){return res.json();}
    throw new Error(res.statusText);
}


const QueryBasic = () => {

   //fetchweather関数でデータを取得
   const {data, isLoading, isError, error} = useQuery('weather', fetchWeather);

   //ロード中
   if(isLoading){
       return <p>ローディング中です</p>;
   };

   //エラーが発生した場合はエラーメッセージを表示
   if(isError){
       return  <p>error: {error.message}</p>
   }
    
  return (
    <figure>
    <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}  alt={data?.weather?.[0]?.main}/>
    <figcaption>{data?.weather?.[0]?.description}</figcaption>
</figure>
  )
}

export default QueryBasic