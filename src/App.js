import Main from "./pages/main/main"
import './App.css'
import { Grid } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import NavBar from './pages/main/components/navBar';
import { Context } from "./context/context";
import { MuiThemeProvider, createTheme } from "@material-ui/core";

function App() {
  
  const themeDark = createTheme({
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });



  return (
    <BrowserRouter>
    <Context>
    <MuiThemeProvider theme={ themeDark}>
    <Grid container direction="column">
      <Grid item>
       <NavBar />
    </Grid>

    <Grid item>
      <Grid container>
      <Grid item xs={false} sm={3}></Grid>
      <Main />
      <Grid item xs={false} sm={3}></Grid>
      </Grid>
    </Grid>
    </Grid>
    </MuiThemeProvider>
    </Context>
    </BrowserRouter>
  );
}

export default App;
