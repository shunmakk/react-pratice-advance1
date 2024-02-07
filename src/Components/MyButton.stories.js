import MyButton from "./MyButton";


export default {
    title: 'Myapp/MyButton',
    component: MyButton,
   };

   
export const Index =  ({
    render: () => <MyButton primary size="medium" label="ボタン" onClick={() => console.log('Hello storybook!')} />
 });
 
 
 export const White =  ({
    render: () => <MyButton size="small" label="ボタン" backgroundColor="#fff" />
 });
 