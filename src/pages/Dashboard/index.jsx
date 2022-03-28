import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Receipt } from '../../components/ui/Receipt';
import { receiptRepository } from '../../repository/receit';
import { path } from '../../router/path';

export const ViewReceipt = () => {
    const { data, isError, isLoading } = useQuery('receipts', receiptRepository.findAll);
    useEffect(() => {
        console.log(data);
    }, [data])

    if (isLoading) return <h2>Loanding...</h2>
    return (
        <div className=' p-8 flex flex-wrap gap-7 relative'>
            <div className='w-full'>
                <Link to={path.createRec} className=' text-white-100 p-3 bg-blue-200 rounded-sm top-3 left-3'>Crear Recibo</Link>
            </div>


            {
                data.data.data.map(reciept => (
                    <Receipt {...reciept} />
                ))
            }

        </div>
    )
}
