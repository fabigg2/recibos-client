import {Link} from 'react-router-dom';

export const Button = ({ text, path }) => {
    return (
        <Link to={path} className="relative shadow-[#00000050] z-10 bottom-[-10px] m-3">
            <span className=" text-blue-100 bg-white-100 p-2 px-3 rounded-[10px] shadow-[#00000050] shadow-md">{text}</span>
        </Link>
    )
}

export const ButtonSubmit = ({ text }) => {
    return (
        <button type="submit" className=" outline-none text-white-100 text-lg font-semibold rounded-lg w-full h-[40px] bg-blue-100 justify-center items-center">
            {text}
        </button>
    )
}

export const ButtonEliminar = ({ text='Eliminar' }) => {
    return (
        <span className=' text-white-100 text-base bg-red pl-2 pr-2 p-1 rounded-md'>
            {text}
        </span>

    )
}
export const ButtonEditar = ({ text='Editar' }) => {
    return (
        <span className=' text-white-100 text-base bg-green pl-2 pr-2 p-1 rounded-md'>
            {text}
        </span>

    )
}
