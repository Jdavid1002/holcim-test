// Mock de dependencias externas
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('AppPage Component', () => {

});
