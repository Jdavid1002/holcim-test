import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DashboardPage from '@/sections/dashboard/page';
import { Provider } from 'react-redux';
import { store } from '@/utils/test_store';
import AnimalsForm from '@/components/AnimalsForm/AnimalsForm';


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

jest.mock('../src/utils/http', () => ({
  http: jest.fn(),
  endpoints: {
    auth: {
      logout: {
        method: 'POST',
        url: '/api/auth/logout'
      },
      login: {
        method: 'POST',
        url: '/api/auth/login'
      },
      register: {
        method: 'POST',
        url: '/api/auth/register'
      },
    },
    animals: {
      list: {
        method: 'GET',
        url: '/animals'
      },
      create: {
        method: 'POST',
        url: '/animals'
      },
      update: {
        method: 'PUT',
        url: '/animals/'
      },
      delete: {
        method: 'DELETE',
        url: '/animals/'
      },
    },
  }
}));

jest.mock('../src/redux/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn()
}));

function sleep(ms : number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


describe('DashboardPage component', () => {
  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <DashboardPage />
      </Provider>
    );

    // Verifica que el botón "Create animal" esté presente
    expect(screen.getByText('Create animal')).toBeInTheDocument();

    // Verifica que el mensaje de alerta esté presente
    expect(screen.getByText("Currently, you don't have animals")).toBeInTheDocument();
  });

  test('clicking on "Create animal" button opens modal', async () => {

    render(
      <Provider store={store}>
        <DashboardPage />
      </Provider>
    )

    // Simula hacer clic en el botón "Create animal"
    fireEvent.click(screen.getByText('Create animal'));

    render(
      <Provider store={store}>
        <AnimalsForm />
      </Provider>
    );

  });
});
