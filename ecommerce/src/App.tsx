import { RouterProvider } from 'react-router';
import router from './router';
import { PrimeReactProvider } from 'primereact/api';

const App = () => {
  return(
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  )
}

export default App;