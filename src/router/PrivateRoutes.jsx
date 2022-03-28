import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { path } from '../router/path';
import {useDispatch} from 'react-redux';

import {_logout} from '../Redux/actions';

export const PrivateRoutes = ({ children }) => {
  const { logged, data:{user} } = useSelector(state => state.auth);
  const dispath = useDispatch();
  const logOut = ()=>{
    dispath(_logout())
  }
  return (
    <>
      {
        logged
          ? <div className='w-full h-full'>
            <div className='w-full h-[60px] bg-blue-100 flex p-2 justify-between items-center'>
              <span onClick={logOut} className='text-white-100 text-xl cursor-pointer hover:text-[#000000dd]'>Salir</span>
              <div className='flex items-center gap-1'>
                <div className='text-white-100 text-xl'>{user.name} {user.lastname}</div>
                <div className='font-bold text-2xl text-white-100 w-[50px] h-[50px] bg-green rounded-[25px] flex justify-center items-center'>{user.name[0]}</div>
              </div>
            </div>
            {children}
          </div>
          : <Navigate to={path.home} />
      }
    </>
  )
}
