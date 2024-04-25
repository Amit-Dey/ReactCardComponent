import './App.css'
import ProfilComponent from './Components/ProfileComponent'

function App() {

  // Profile Crad Component
  return (
    <>
      <ProfilComponent
        name="John Doe"
        location="London, UK"
        coverImg="/coverImg.jpg"
        profileImg="/profileImg.png"
        followers="1.5K"
        likes="2.5K"
        photos="3.5K"
      />
    </>
  )
}

export default App
