import React from 'react'
import { useMutation } from 'react-query'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { _addTemp } from '../../Redux/actions';

import { receiptRepository } from '../../repository/receit'
import { path } from '../../router/path';
import ReceiptItem from './ReceiptItem'


export const Receipt = (props) => {
    const {mutate} = useMutation(receiptRepository.delete);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const eliminar = ()=>{
       if(!window.confirm('Esta seguro de eliminar este recibo'))
        return
        mutate(props.consecutive,{
            onSuccess: ()=>{
                alert('Se eliminor el recibo');
            },
            onError: ()=>{
                alert('error al eliminar el recibo');
            }
        })

    }
    const editar = ()=>{
        const {owner, addres, weight, price, consecutive} = props;
        dispatch(_addTemp({owner, addres, weight, price, consecutive}));
        navigate(path.updateRec);
        
    }
;
    return (
        <div className='w-[350px] border-2 border-blue-200 h-[400px] flex flex-col'>
            <div className='h-[50px] w-full flex justify-between items-center bg-blue-200 p-2'>
                <span className=' text-white-100 text-base'><ParseConsecutive consecutive={props.consecutive} /></span>
                <span className=' text-white-100 text-base bg-green pl-2 pr-2 p-1 rounded-md'>compra</span>
            </div>
            <div className='h-[300px] w-full bg-[#eee] p-2'>
                <ReceiptItem text='Titular' value={props.owner} />
                {props.addres && <ReceiptItem text='Dirreccion' value={props.addres} />}
                {props.weight && <ReceiptItem text='Peso' value={props.weight + ' kg'} />}
                {props.unitPrice && <ReceiptItem text='Precion unidad (kg)' value={'$ ' + props.unitPrice} />}
                <ReceiptItem text='Precio' value={'$ ' + props.price} />
                <ReceiptItem text='Creado Por' value={`${props.createdBy.name} ${props.createdBy.lastname}`} />
                <ReceiptItem text='Fecha Creación' value={new Date(Date.parse(props.createdAt)).toDateString()} />


            </div>
            <div className='h-[50px] w-full border-t-2 border-t-blue-200 flex justify-end items-center pr-3 gap-2'>
                <span
                    onClick={editar}
                    className=' text-white-100 text-base bg-blue-100 pl-2 pr-2 p-1 rounded-md'
                >
                    Editar
                </span>

                <span
                    onClick={eliminar}
                    className=' text-white-100 text-base bg-red pl-2 pr-2 p-1 rounded-md'
                >
                    Eliminar
                </span>

            </div>
        </div>
    )
}

const ParseConsecutive = ({ consecutive }) => {
    if (consecutive < 10)
        return '000' + consecutive
    if (consecutive < 100)
        return '00' + consecutive
    if (consecutive < 1000)
        return '0' + consecutive
    return consecutive
}