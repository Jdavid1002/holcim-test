'use client'

import React from 'react'
import style from './Navbar.module.css'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import CustomButton from '../CustomButton/CustomButton'
import { useRouter } from 'next/navigation'
import { LogoutAction } from '@/redux/features/authSlice'
import { clearUserAction } from '@/redux/features/userSlice'
import { endpoints, http } from '@/utils/http'

export interface INavbar {

}

const Navbar = (props : INavbar) => {

  const isLoggedIn = useAppSelector(state => state?.authSlice?.isLoggedIn)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const logOut = async () => {
    await http({
      url: endpoints.auth.logout.url,
      method: endpoints.auth.logout.method,
      data: null,
      dont_use_another_port : true
    })

    dispatch(LogoutAction())
    dispatch(clearUserAction())
    router.push('/')
    
  }

  return (
    <div className={style.Navbar} >

      {isLoggedIn ? 
        <div className={style.navbarContainer} >
          <CustomButton className={style.firstButton} text='Sign off' onClick={() => logOut()} />
        </div>
      :
        <div className={style.navbarContainer} >
          <CustomButton className={style.firstButton} text='Sign In' onClick={() =>router.push('/auth/login') } />
          <CustomButton className={style.secondButton} text='Register' onClick={() =>router.push('/auth/register') } />
        </div>
      }

    </div>
  );
}
 
export default Navbar;