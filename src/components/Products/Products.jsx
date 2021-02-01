import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Skeletons', description: 'Spooky skellingtons.', price: '$5', image:'https://clippings-me-blog.imgix.net/blog/wp-content/uploads/2019/12/skeleton-2-1.jpg?auto=format%2Cenhance%2Ccompress&w=1024&h=1024' },
    { id: 2, name: 'Bats', description: 'Bats are also spooky.', price: '$10', image: 'https://i.pinimg.com/originals/e4/c8/1d/e4c81db283638cd33d5404861ffa5ac5.jpg' },
    { id: 3, name: 'Pumpkins', description: 'Pumpkins are pretty tasty', price: '$15', image: 'https://www.clipartkey.com/mpngs/m/5-56820_cute-halloween-pumpkin-clipart-cute-halloween-pumpkin-png.png' },
    { id: 4, name: 'Ghouls', description: 'Ghouls. Just ghouls.', price: '$20', image: 'https://image.freepik.com/free-vector/adorable-cute-zombie_116205-20.jpg' },
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))};
            </Grid>
        </main>
    )
}

export default Products;