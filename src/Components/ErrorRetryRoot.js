import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorRetryThrow from './ErrorRetryThrow'

const ErrorRetryRoot = () => {

 //エラー時に実行される処理
 const handleFallback = ({error, resetErrorBoundary}) => {
  const handleClick = () => resetErrorBoundary();
  return(
      <div>
          <h4>エラーが発生しました</h4>
          <p>{error.message}</p>
          <button type='button' onClick={handleClick}>Retey</button>
      </div>
  );
 };

 //リセット時に実行処理
 const handleReset = () => console.log('Retty!!');


  return (
   <>
   <h3>ErrorBoundaryの基礎</h3>
   <ErrorBoundary onReset={handleReset} fallbackRender={handleFallback}>
       <ErrorRetryThrow/>
   </ErrorBoundary>
   </>
  )
}

export default ErrorRetryRoot