import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar"
import { Dashboard } from "../Dashboard"
import { Footer } from "../Footer"
import { Positions } from "../Positions"
import { Governance } from "../Governance"
import { Test } from '../Test'
import { Breadcrumbs } from "../Breadcrumbs";
import './App.css'

export function App() {
  return (
    <div className="container-fluid" >
      <Navbar />
      <Breadcrumbs />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/test" element={<Test />} />          
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}