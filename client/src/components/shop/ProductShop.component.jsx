import { Grid } from "@mui/material";

import ProductCard from "./ProductCard.component";

const ProductShop = ({products, ...other}) => {
    return (
        <Grid container spacing={3} {...other} >
            {products.map((product, indx) => (
                <Grid item key={indx} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
     );
}
 
export default ProductShop;