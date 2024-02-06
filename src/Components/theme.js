//MUIのテーマを定義する
import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";


const theme = createTheme({
    //アプリで利用するカラーリングの設定
    palette:{
        primary: {
        main:  orange[500],
        },
        secoundry: {
         main:  green[500],
        }
    },
    spacing: 10,
})


export default theme;