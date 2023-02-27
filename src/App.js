import "./App.css";

import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  
const appRouter= createBrowserRouter([

  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])
  return (
    <Provider store={store}>
      <div>
        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    menu items
         *  Main container
         *      button list
         *      video container
         *        video card
         *
         *
         *
         * / */}

        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>

    
  );
}

export default App;
