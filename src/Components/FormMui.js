//React Hook Form とMUIを連携する
import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
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
   <form onSubmit={handleSubmit(onsubmit, onError)} noValidate>
    <div>
        <TextField  label="名前" margin='normal'
         {...register('name',{
             required: '名前は必須項目です',
             maxLength: {
                 value: 20,
                 message: '名前は20文字以内で入力してください'
             }
         })}
         error = {'name' in errors}
         helperText= {errors.name?.message}
        />
    </div>
    <div>
        <FormControl>
            <FormLabel component="legend">性別：</FormLabel>
            <RadioGroup>
                <FormControlLabel value="male" control={<Radio/>} label="男性" 
                  {...register('gender',{
                      required: '名前は必須です',
                  })}
                />
                <FormControlLabel value="female" control={<Radio/>} label="女性" 
                  {...register('gender',{
                      required: '名前は必須です',
                  })}
                />
            </RadioGroup>
            <FormHelperText error={'gender' in errors}>
                {errors.gender?.message}
            </FormHelperText>
        </FormControl>
    </div>
    <div>
        <TextField type="email" label="メールアドレス" margin='normal'
         {...register('email' , {
             required: 'メールアドレスは必須です',
             pattern: {
                value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                message: 'メールアドレスの形式が不正です。'
             }
         })}
         error = {'email' in errors}
        helperText = {errors.email?.message}
        />
    </div>
    <div>
        <TextField label="メモ" margin='normal' multiline
         {...register('memo' ,{
             required: '備考は必須です',
            minLength:{
                value: 10,
                message: 'メモを入力してください'
            }
         })}
         error={'memo' in errors}
         helperText = {errors.memo?.message}
        />
    </div>
    <div>
        <Button variant='contained' type="submit">送信</Button>
    </div>
   </form>
  )
}

export default FormMui