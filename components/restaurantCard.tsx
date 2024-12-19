import './restaurantCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import productsJson from '../data/resraurantMeau.json';

function ResraurantCard() {
    const products = productsJson;


    return (
        <div>
            <p className="categories_titel">法國菜前菜</p>
            <div className="products_list">

                {products.map((product) => {
                    if (product.category === '法國菜前菜') {
                        return (
                            <Card sx={{ maxWidth: 320, margin: 1 }} key={product.index}>
                                <div className="flex">
                                    <CardMedia
                                        sx={{ height: 250 }}
                                        image={product.image}
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
                            </Card>
                        );
                    }
                    return null;
                })}

            </div>

            <p className="categories_titel">法國菜主食</p>
            <div className="products_list">
                {products.map((product) => {
                    if (product.category === '法國菜主食') {
                        return (
                            <Card sx={{ maxWidth: 320, margin: 1 }} key={product.index}>
                                <div className="flex">
                                    <CardMedia
                                        sx={{ height: 250 }}
                                        image={product.image}
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
                            </Card>
                        );
                    }
                    return null;
                })}
            </div>

            <p className="categories_titel">法國菜甜點</p>
            <div className="products_list">
                {products.map((product) => {
                    if (product.category === '法國菜甜點') {
                        return (
                            <Card sx={{ maxWidth: 320, margin: 1 }} key={product.index}>
                                <div className="flex">
                                    <CardMedia
                                        sx={{ height: 250 }}
                                        image={product.image}
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
                            </Card>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default ResraurantCard;
