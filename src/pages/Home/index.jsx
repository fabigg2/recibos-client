import { Button } from "../../components/ui/Button"
import { path } from "../../router/path"

export const Home = () => {

  return (
    <div className="w-full h-[300px] flex flex-col justify-center items-center z-10">

      <h2 className="z-10 text-white-100 text-[60px]">Welcome to reciept manager</h2>
      <div className="felx flex-row gap-2 justify-center items-center">
        <Button text='Registrarse' path={path.signUp} />
        <Button text='Iniciar sesion' path={path.logIn}/>
      </div>
    </div>
  )
}
