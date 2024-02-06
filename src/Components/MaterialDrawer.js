import { useState } from "react";
import {Home, Mail , Info, AccountTree}  from '@mui/icons-material'
import {Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material'

//表示用のメニュー
const menu = [
    {title: 'ホーム', href: 'home.html', icon: <Home />},
    {title: 'お問い合わせ', href: 'contact.html', icon: <Mail />},
    {title: '会社概要', href: 'comapany.html', icon: <Info />},
    {title: 'サイトマップ', href: 'sitemap.html', icon: <AccountTree />}
];


const MaterialDrawer = () => {
  
    //ドロワー開閉のためのフラグ
    const [show, setShow] = useState(false);
    //ボタンクリック時に呼び起こされるハンドラー
    const handleDrew = () => setShow(!show);

  return (
    <>
    <Button onClick={handleDrew}>ドロワーを表示する</Button>
    <Drawer anchor="left" open={show}>
     <Box sx={{height: '100vh'}} onClick={handleDrew}>
        <List>
       {/* あらかじめ用意された配列をメニューとして展開 */}
       {menu.map(obj => {
           return(
               <ListItem key={obj.title}>
                  <ListItemButton href={obj.href}>
                 <ListItemIcon>{obj.icon}</ListItemIcon>
                 <ListItemText primary={obj.title}/>
                  </ListItemButton>
               </ListItem>
           )
       })}
       </List>
     </Box>
    </Drawer>
    </>
  )
}

export default MaterialDrawer
