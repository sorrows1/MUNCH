import { styled } from '@mui/material/styles';

const Image = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    loading: 'lazy',
})

export default Image