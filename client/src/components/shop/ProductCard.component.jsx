import { Link as RouterLink } from 'react-router-dom';

import { Box, Card, Link, Typography, Stack } from '@mui/material';

import Image from '../Image.component';
import TagPreview from '../TagPreview.component';

const ProductCard = ( {product} ) => {
    const {id, title, image, price, types} = product;
    return (
    <Link to={`product/${id}`} underline='none' component={RouterLink}>
        <Card>
            <Box sx={{pt: '60%', position:'relative'}}>
                <Image src={image} alt={title} effect='blur' sx={{top: 0, position: 'absolute'}} />
            </Box>
            <Stack padding={2.4} spacing={1.6} sx={{pb: 3.2 }}>
                <TagPreview types={types} />
                <Typography variant='subtitle1' textTransform='capitalize'>
                    {title}
                </Typography>
                <Stack direction='row' alignItems="center" justifyContent="space-between">
                    <Typography variant='subtitle1'>
                        {`$${price}`}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    </Link>
    );
}
 
export default ProductCard;