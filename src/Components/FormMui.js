//React Hook Form とMUIを連携する
import { Button, FormContorl, FormContorlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField, useFormControl } from '@mui/material'
import { useForm } from 'react-hook-form';

const FormMui = () => {
 
 //既定値を取得
 const defaultValues = {
     name: '田中太郎',
     email: 'example@dodod.com',
     gender: 'female',
     memo: ''
 }

 //フォームの初期化
 const {register, handleSubmit, formState: {errors}} = useForm({
     defaultValues
 });
 
 //サブミット時の処理
 const onsubmit = data => console.log(data);
 const onError = err  => console.log(err);

  return (
   <form>
       
   </form>
  )
}

export default FormMui