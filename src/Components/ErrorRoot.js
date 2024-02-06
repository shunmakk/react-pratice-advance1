import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorThrow from './ErrorThrow'


const ErrorRoot = () => {
  return (
   <>
   <h3>Error Boundaryの基礎</h3>
   <ErrorBoundary fallback={<div>エラーが発生しました</div>} onError={err => alert(err.message)}>
       <ErrorThrow/>
   </ErrorBoundary>
   </>
  )
}

export default ErrorRoot