import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PortalBasic from './Components/PortalBasic';
// import ErrorRoot from './Components/ErrorRoot';
// import ErrorRetryRoot from './Components/ErrorRetryRoot';
import MaterialBasic from './Components/MaterialBasic';
import MaterialDrawer from './Components/MaterialDrawer';
import MaterialGrid from './Components/MaterialGrid';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme  from './Components/theme'
import MaterialMode from './Components/MaterialMode';
import FormMui from './Components/FormMui';
import QueryPre from './Components/QueryPre';
import QueryBasic from './Components/QueryBasic';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import QuerySuspence from './Components/QuerySuspence';



const root = ReactDOM.createRoot(document.getElementById('root'));

 //React Queryを実行する準備
 const cli = new QueryClient();

 //QuerySuspenceの方。　　suspenceモードを有効化
 const cli2 = new QueryClient({
   defaultOptions: {
     queries: {
       suspense: true,
     },
   },
 });

root.render(
  <React.StrictMode>
   {/* portalとerror系 エラー系はコメントアウト */}
   <>
   <div id="dialog"></div>
   <PortalBasic/>
   </>
   {/* <ErrorRoot/>
  <ErrorRetryRoot/>
  {/* MUI */}
  <ThemeProvider theme={theme}>
  <CssBaseline/>
  <MaterialBasic/>
  <br></br>
  <MaterialDrawer/>
  <MaterialGrid/>
  </ThemeProvider> 
  <MaterialMode/>
  <FormMui/>
  {/* React Query */}
  <QueryPre/>
  <QueryClientProvider client={cli}>
    <QueryBasic/>
  </QueryClientProvider>
  <Suspense fallback={<p>Loading...</p>}>
    <ErrorBoundary fallback={<p>エラーが発生しました</p>}>
      <QueryClientProvider client={cli2}>
        <QuerySuspence/>
      </QueryClientProvider>
    </ErrorBoundary>
  </Suspense>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
