import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.jsx'
import DemandeCompte from './pages/DemandeCompte.jsx'
import './css/index.css'
import Dashboard from './pages/dashboard.jsx'
import TraitementDemande from './pages/TraitementDemande.jsx'
import AchatNonConfirmee from './pages/AchatNonConfirmee.jsx'
import Categorie from './pages/Categorie.jsx'
import Pointage from './pages/Pointage.jsx'
import Personnels from './pages/Personnels.jsx'
import Virement from './pages/Virement.jsx'
import Settings from './pages/Settings.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/DemandeCompte",
    element: <DemandeCompte/>
  },
  {
    path: "/settings",
    element: <Settings/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/traitementdemande",
    element: <TraitementDemande />
  },
  {
    path: "achatnonconfirmee",
    element: <AchatNonConfirmee></AchatNonConfirmee>
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>
  },
  {
    path: "categorie",
    element: <Categorie></Categorie>
  },
  {
    path: "pointage",
    element: <Pointage></Pointage>
  },
  {
    path: "personnels",
    element: <Personnels></Personnels>
  },
  {
    path: "virement",
    element: <Virement></Virement>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
    </React.StrictMode>,
)
