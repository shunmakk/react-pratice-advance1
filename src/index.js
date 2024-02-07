import React from 'react';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
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
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
