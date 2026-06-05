import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Page from './app/Page'
import { initGA } from "./sections/Analytics.js";
import {ToastContainer} from "react-toastify"
initGA();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
    <ToastContainer position='top-right' autoClose={3000}/>
  </StrictMode>,
)
