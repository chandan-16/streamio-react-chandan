import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './components/Head';
import Body from './components/Body';

import { Provider } from 'react-redux';
import store from './utils/store';

import './App.css';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {

  const appRouter = createBrowserRouter([{
    path : "/",
    element : <Body />,
    children : [
      {
        path : "/",
        element : <MainContainer/>
      },
      {
        path : "watch",
        element : <WatchPage />
      }
    ]
  }])

  return (
    <>
        <Provider store={store}>
      {/* <div>
        <RouterProvider router={appRouter}/>
        </div> */}
      <RouterProvider router={appRouter}>
        <Head /> 


      </RouterProvider>
    </Provider>
    </>


  );
}

export default App;
