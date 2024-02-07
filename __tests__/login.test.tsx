import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { store } from '@/utils/test_store';
import LoginPage from '@/sections/auth/login/page';


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../src/utils/http', () => ({
  http: jest.fn(),
  endpoints : {
    auth: {
      logout: {
        method : 'POST',
        url : '/api/auth/logout'
      },
      login: {
        method : 'POST',
        url : '/api/auth/login'
      },
      register: {
        method : 'POST',
        url : '/api/auth/register'
      },
    },
    animals: {
      list: {
        method : 'GET',
        url : '/animals'
      },
      create: {
        method : 'POST',
        url : '/animals'
      },
      update: {
        method : 'PUT',
        url : '/animals/'
      },
      delete: {
        method : 'DELETE',
        url : '/animals/'
      },
    },
  }
}));



jest.mock('../src/redux/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn()
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));


describe('LoginPage component', () => {
  test('validates form fields and submits form correctly', async () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    // Simulamos llenar el formulario con datos correctos
    fireEvent.change(screen.getByPlaceholderText('xxxxx@xxxx.xxx'), {
      target: { value: 'validemail@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('***********'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Sign in with Mail'));
  });
});
