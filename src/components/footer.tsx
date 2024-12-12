import './footer.scss'; 
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  // const [count, setCount] = useState(0)
  return (
    <>
   <AppBar component="footer" position="static">
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="caption">
                    <footer>
                    {/* <div class="shop">
      <img src="../assets/img/shop.png" alt="">
    </div> */}
    <div className="container">
      {/* <img src="../assets/img/pokemon_store.png" alt=""> */}
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
                    </Typography>
                </Box>
            </Container>
        </AppBar>
    </>
  )
}

export default Footer
