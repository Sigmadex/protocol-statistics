import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar"
import { Dashboard } from "../Dashboard"
import { Footer } from "../Footer"
import { Positions } from "../Positions"
import { Governance } from "../Governance"
import { Test } from '../Test'
import { Breadcrumbs } from "../Breadcrumbs";
import { Admin } from "../Admin";
import './App.css'

export function App() {
  return (
    <div className="container-fluid" >
      <Router>
        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/test" element={<Test />} />          
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}