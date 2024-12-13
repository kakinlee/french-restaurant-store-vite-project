import './footer.scss';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import logo from '../assets/img/logo.jpg';
const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#fff', // 自訂背景色
            boxShadow: 'none',
          },
        },
      },
    },
  });
function Footer() {
    // const [count, setCount] = useState(0)
    return (
       
        
    <ThemeProvider theme={theme}>
            <AppBar component="footer" position="static">
                
                        <footer>
 

    <div className="container">
    <img src={logo} alt=""  style={{width: '50px', height: '40px'}} />
    <div className="info">
        <p>實體店面：真新鎮大木路一段6號</p>
        <p>營業時間：00:00-24:00</p>
      </div>
      <div>
        <p>作者：icguanyu <a href="https://github.com/icguanyu" target="_blank">Github</a>｜<a href="https://codepen.io/icguanyu/" target="_blank">Codepen</a></p>
        <p>練習作品｜<a href="https://www.pokemon.com/us/" target="_blank">圖片來源：https://www.pokemon.com/us/</a></p> 
      </div>
    </div>
  </footer>
                       
            </AppBar>
      
        </ThemeProvider>
    )
}

export default Footer
