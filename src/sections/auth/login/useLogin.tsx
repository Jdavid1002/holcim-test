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
      url: '/api/auth/login',
      method: 'POST',
      data: {
        password: params?.password || '',
        email: params?.email || '',
      },
      dont_use_another_port : true
    })

    if (response?.code === 200) {
      dispatch(LoginAction({ isLoggedIn: true }))
      dispatch(updateUserAction({ ...response?.response}))
      router.push('/dashboard')
    }
  }

  return {
    onLogin,
  }
}