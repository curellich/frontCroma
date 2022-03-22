import DashboardComponent from "./components/Dashboard/DashboardComponent";
import themeConfig from "./themeConfig";
import {ThemeProvider} from "@mui/material";




function App() {
    return (
        <ThemeProvider theme={themeConfig}>
            <DashboardComponent/>

        </ThemeProvider>
    );
}

export default App;

