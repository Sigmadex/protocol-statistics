import { Navbar } from "../Navbar"
import { Dashboard } from "../Dashboard"
import { Footer } from "../Footer"
import { Positions } from "../Positions"
import { Governance } from "../Governance"

export function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Positions />
      <Governance />
      <Footer />
    </div>
  )
}