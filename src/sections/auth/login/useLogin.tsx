'use client';
import { http } from '@/utils/http';
import { useRouter } from 'next/navigation';
import { LoginAction } from '@/redux/features/authSlice';
import { updateUserAction } from '@/redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export interface IFormLoginInputs {
  email : string
  password : string
}

export const useLogin = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const auth = useAppSelector(state => state?.authSlice)
  if (auth?.isLoggedIn) router.push('/dashboard')

  const onLogin = async (params: {password : string, email : string}) => {

    const response = await http({
      url: '/users',
      method: 'POST',
      data: {
        password: params?.password || '',
        email: params?.email || '',
      }
    })

    if (response) {
      dispatch(LoginAction({ isLoggedIn: true }))
      dispatch(updateUserAction({ ...response }))
      router.push('/dashboard')
    }
  }

  return {
    onLogin,
  }
}