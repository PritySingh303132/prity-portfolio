import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Diseases from './pages/Diseases/Diseases.jsx'
import DiseaseDetail from './pages/DiseaseDetail/DiseaseDetail.jsx'
import MealPlanner from './pages/MealPlanner/MealPlanner.jsx'
import AiAssistant from './pages/AiAssistant/AiAssistant.jsx'
import Auth from './pages/Auth/Auth.jsx'
import DoctorRegistration from './pages/DoctorRegistration/DoctorRegistration.jsx'

function App() {
  return (
    <>
      <Routes>
        {/* No Navbar/Footer */}
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />

        {/* With Navbar/Footer — note: no leading slash on nested paths */}
        <Route path="*" element={
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/diseases" element={<Diseases />} />
                <Route path="/diseases/:id" element={<DiseaseDetail />} />
                <Route path="/diet" element={<MealPlanner />} />
                <Route path="/ai" element={<AiAssistant />} />
                <Route path="/doctor/*" element={<DoctorRegistration />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
