import {Container} from "@mui/material"
import './App.css'
import {SettingsCounter} from "../SettingsCounter.tsx";
import {Counter} from "../Counter.tsx";
import {containerSx} from "../Counter.styles.ts";


function App() {

  return (
      <Container sx={containerSx}>
          <SettingsCounter/>
          <Counter/>
      </Container>
  )
}

export default App
