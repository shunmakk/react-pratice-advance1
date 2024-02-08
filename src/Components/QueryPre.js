//Fetchだけ使って外部APIを獲得

import { useEffect, useState } from "react";

//delay秒だけ処理を休止するsleep関数
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

//天気情報を取得するための関数
const fetchWeather = async() => {
    //処理を遅延させるためのダミーの休止処置
    await sleep(2000);
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=1c27c1c6554653dac79ee2181c3df56d');
    if(res.ok) {return res.json();}
    //エラー時はその内容をスロー
    throw new Error(res.statusText);
};

const QueryPre = ({id}) => {
 
    //天気情報(info), loading(ロード中か？),error(エラー情報)を準備
    const [data, setData] = useState(null);
    const [isLoading , setLoading] = useState(true);
    const [error , setError] = useState('');


    //コンポーネント起動時に天気情報を取得
    useEffect(() => {
        setLoading();
        fetchWeather()
        //成功時はinfoを更新
        .then(result => setData(result))
        //失敗時はerrorを更新
        .catch(err => setError(err.message))
        //成功、失敗問わずに isloadungを更新
        .finally(() => setLoading(false));
    },[])

    //ロード中であればメッセージを表示
    if(isLoading){
        return <p>ローディング中</p>;
    }
    //通信エラーが発生した場合には、エラーメッセージを表示
    if(error){
        return <p>Error:{error}</p>
    }

  return (
   <figure>
       <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}  alt={data?.weather?.[0]?.main}/>
       <figcaption>{data?.weather?.[0]?.description}</figcaption>
   </figure>
  )
}

export default QueryPre;