import './products.scss';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
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
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';


// 產品數據結構
interface Product {
    id: number;
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    origin: number;
}

const products: Product[] = cardProducts;
const Products: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { handleAddToCart } = useOutletContext<{ handleAddToCart: (product: Product) => void }>();

    return (
        <Box>
            <p className="categories_titel">法式餐包</p>
            <Box className="products_list">

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
                                        <IconButton onClick={() => { handleAddToCart(product); handleClickOpen(); }} >
                                            <AddShoppingCartIcon fontSize='large' />
                                        </IconButton>


                                    </CardActions>

                                </Grid>
                            </Card>
                        </Box>
                    );

                })}

            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <DialogTitle>已加入購物車!</DialogTitle>

                </DialogContent>

            </Dialog>
        </Box>
    );
}

export default Products;
