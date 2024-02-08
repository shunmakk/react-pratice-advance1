import MyButton from "./MyButton";


export default {
    title: 'Myapp/MyButton',
    component: MyButton,
   };

   export const White =  {
      render: () => <MyButton size="small" label="ボタン" backgroundColor="#fff" />
      
    };
   
export const Index =  {
   //  render: () => <MyButton primary size="medium" label="ボタン" onClick={() => console.log('Hello storybook!')} />
   //argsを使ってストーリーをオブジェクト形式で組み立てることができる
   args: {
      primary: true,
      size: 'medium',
      label: 'ボタン',
      onclick: () => console.log('Hello World!')
   }
 };
 


 export const Yello = {
   args:{
      ...White.args,
      backgroundColor: 'lightyellow'
   }

}

