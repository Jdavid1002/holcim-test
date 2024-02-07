'use client';
import { http } from '@/utils/http';
import { useRouter } from 'next/navigation';
import { LoginAction } from '@/redux/features/authSlice';
import { updateUserAction } from '@/redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Swal from 'sweetalert2';

export interface IOnRegister {
  email : string
  password : string
  confirm_email : string
  name : string
}

export const useRegister = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const auth = useAppSelector(state => state?.authSlice)
  if (auth?.isLoggedIn) router.push('/dashboard')

  const onRegister = async (params: IOnRegister) => {

    if (params?.email !== params?.confirm_email) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'The emails do not match.'
      })
    }

    if (!params?.email || !params?.confirm_email || !params?.name || !params?.password) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'The emails do not match.'
      })
    }

    const response = await http({
      url: '/api/auth/register',
      method: 'POST',
      data: {
        password: params?.password || '',
        email: params?.email || '',
        name: params?.name || '',
      },
      dont_use_another_port : true
    })

    if (response?.code === 200) {
      dispatch(LoginAction({ isLoggedIn: true }))
      dispatch(updateUserAction({ ...response?.response }))
      router.push('/dashboard')
    }
  }

  return {
    onRegister
  }
}