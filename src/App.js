import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Page/Body';

function App() {
  const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    }
])
  return (
    <div className="">
        <RouterProvider router={AppRouter}/>

    </div>
  );
}

export default App;
