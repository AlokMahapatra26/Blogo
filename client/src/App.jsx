import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Category from "./pages/Category"
import Header from "./components/Header"
import Archive from "./pages/Archive"

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header isAuthenticated={false} userName={""}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/category" element={<Category/>}/>
        <Route path="/blog-archive" element={<Archive/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
