import './footer.scss';
import AppBar from "@mui/material/AppBar";
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
        <p>實體店面：100台灣台北市中正區重慶南路一段122號</p>
        <p>營業時間：09:00-22:00</p>
      </div>
      <div>
        <p>作者：kakinlee <a href="https://github.com/kakinlee" target="_blank"></a><a href="" target="_blank"></a></p>
        <p>練習作品｜<a href="https://www.pokemon.com/us/" target="_blank"></a></p> 
      </div>
    </div>
  </footer>
                       
            </AppBar>
      
        </ThemeProvider>
    )
}

export default Footer
