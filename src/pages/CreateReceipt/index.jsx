import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import Alert from "../../components/ui/Alert"
import { ButtonSubmit } from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import { receiptRepository } from "../../repository/receit"
import { path } from "../../router/path"


export const CreateReceipt = () => {
    const { mutate, isError, isSuccess } = useMutation(receiptRepository.create);
    const { register, handleSubmit, reset } = useForm();
    const {user} = useSelector(state=>state.auth.data);

    const registrar = (data) => {
        data.userId = user.uid;
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
                className="flex flex-col gap-5 justify-center  bg-white-100 w-[500px] min-h-[500px] p-4 shadow-[#00000060] shadow-md z-10"
            >
                {isError && <Alert text='Error al guardar el recibo , intente nuevamente' />}
                {isSuccess && <Alert text='Registro exitoso' type="success" />}
                <Input name='owner' label="Titular" register={register} />
                <Input name='addres' label="Direccion" register={register} />
                <Input name='weight' label="Peso (kg)" type="number" register={register} />
                <Input name='price' label="Precio" type="number" register={register} />
                {/* <Input name='unitPrice' label="Precio unidad (kg)" type="number" register={register} /> */}
                <ButtonSubmit text='Guardar' />
                <Link to={path.dashboard}> {'<- Regresar'}</Link>
            </form>
        </div>
    )
}
