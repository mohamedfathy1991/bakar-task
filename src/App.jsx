import { useState } from 'react'
  import Visa from './components/Visa'
  import Transaction from './components/Transcation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
    

  const routeee=  createBrowserRouter([{

   path:'',element:<Layout/>,children:[{
    index:true ,element:<Home/>,
    
   },{
    path:'/trasaction',element:<Transaction/>
   }
   ,{
    path:'/visa',element:<Visa/>
   }
  ]

  }])
 
 function App() {


 
  return (
    <RouterProvider  router={routeee}>
      <Layout/>



    </RouterProvider>
    
    
   
 
 
 

 
    
   
  )
}

export default App
