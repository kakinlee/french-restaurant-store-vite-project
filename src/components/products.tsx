import './products.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cardProducts from '../data/cardProducts.json';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function Products() {
    const products = cardProducts;

    return (
        <div>
            <p className="categories_titel">法式餐包</p>
            <div className="products_list">

                {products.map((product) => {
                    return (
                        <Box>
                        <Card sx={{ maxWidth: 320, margin: 1 }} key={product.id}>
                            <div className="flex">
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image={product.imageUrl}
                                    title={product.title}
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {product.description}
                                </Typography>


                            </CardContent>
                            <Grid display="flex" justifyContent="start" alignItems="left" >
                                <Typography className='price'>
                                    <Typography variant="caption" className='ori_price' gutterBottom component="div">
                                        原價{product.origin}元
                                    </Typography>

                                    <Typography variant="body1" className='onsale_price' gutterBottom component="div">
                                        NT {product.price}元
                                    </Typography>
                                </Typography>
                                <CardActions disableSpacing>
                                    <IconButton>
                                        <AddShoppingCartIcon fontSize='large' />
                                    </IconButton>
                                </CardActions>

                            </Grid>







                        </Card>
                        </Box>
                    );

                    return null;
                })}

            </div>

        </div>
    );
}

export default Products;
