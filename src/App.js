import React, { useContext } from "react"
// import { themeProvider } from "./theme/themeProvider"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./Components/Pages/Navigation"
import Container from "./Components/Pages/Container"
import { ThemeContext } from "./Theme/ThemeContext"
//

//

function App() {
  const { darkMode } = useContext(ThemeContext)
  console.log(`darkMode`, darkMode)

  return (
    <>
      <Navigation />
      <Container />
    </>
  )
}

export default App
