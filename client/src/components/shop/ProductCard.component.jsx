import { Link as RouterLink } from 'react-router-dom';

import { Box, Card, Link, Typography, Stack } from '@mui/material';

import Image from '../Image.component';

const ProductCard = ( {product} ) => {
    const {id, title, cover, price} = product;
    return (
    <Link to={id} underline='none' component={RouterLink}>
        <Card>
            <Box>
                <picture>
                    <Image src={cover} alt={title} />
                </picture>
            </Box>
            <Stack>
                <Typography variant='subtitle2'>
                    {title}
                </Typography>
                <Stack direction='row' alignItems="center" justifyContent="space-between">
                    <Typography variant='subtitle1'>
                        {price}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    </Link>
    );
}
 
export default ProductCard;