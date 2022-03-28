import { Link, useNavigate } from "react-router-dom"
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';


import { ButtonSubmit } from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import { path } from "../../router/path"
import { userRepository } from "../../repository/user";
import { useForm } from "react-hook-form";
import Alert from "../../components/ui/Alert";
import { _login } from "../../Redux/actions";


export const Login = () => {
  const {mutate, isError} = useMutation(userRepository.logIn);
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logIn = (data)=>{
      mutate(data,{
          onSuccess: (data)=>{
            dispatch(_login(data.data.data));
            navigate(path.dashboard);
          },
          onError: (error)=>{
            console.log(error?.response);
          }
      })
  }

    return (
        <div className=" w-full min-h-screen flex justify-center items-center z-10">
            <form 
            onSubmit={handleSubmit(logIn)}
            className="flex flex-col gap-5 justify-center rounded-xl bg-white-100 w-[400px] min-h-[500px] p-4 shadow-[#00000060] shadow-md z-10" >
                
                {isError && <Alert text='Usuario o contraseña incorrecto' />}

                <Input name='email' label="Email" type="email" register={register}/>
                <Input name='password' label="Password" type="password" register={register}/>
                <ButtonSubmit text='Iniciar sesion' />
                <span>No tengo cuenta: <Link to={path.signUp}><b>Crear cuenta</b></Link></span>


            </form>
        </div>
    )
}
