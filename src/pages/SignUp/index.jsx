import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { Link } from "react-router-dom"
import Alert from "../../components/ui/Alert"
import { ButtonSubmit } from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import { userRepository } from "../../repository/user"
import { path } from "../../router/path"


export const SignUp = () => {
    const { mutate, isError, isSuccess } = useMutation(userRepository.create);
    const { register, handleSubmit, reset } = useForm();

    const registrar = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                console.log(data);
                reset()
            },
            onError: (error) => {
                console.log(error?.response);
            }
        })
    }
    return (
        <div className=" w-full min-h-screen flex justify-center items-center z-10">
            <form
                onSubmit={handleSubmit(registrar)}
                className="flex flex-col gap-5 justify-center rounded-xl bg-white-100 w-[400px] min-h-[500px] p-4 shadow-[#00000060] shadow-md z-10"
            >
                {isError && <Alert text='Error al registrarse, intente nuevamente' />}
                {isSuccess && <Alert text='Registro exitoso' type="success" />}
                <Input name='name' label="Nombre" register={register} />
                <Input name='lastname' label="Apellido" register={register} />
                <Input name='email' label="Email" type="email" register={register} />
                <Input name='password' label="Password" type="password" register={register} />
                <ButtonSubmit text='Registrarse' />
                <span>Tengo cuenta: <Link to={path.logIn}><b>Iniciar sesion</b></Link></span>
            </form>
        </div>
    )
}
