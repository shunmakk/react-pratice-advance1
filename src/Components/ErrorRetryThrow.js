import React from 'react'

const ErrorRetryThrow = () => {

    //60%の確率でエラーを発生
    if(Math.random() < 0.6){
        throw new Error('Error is occured in MyApp.');
    }

  return (
   <p>正しく表示されました</p>
  )
}

export default ErrorRetryThrow