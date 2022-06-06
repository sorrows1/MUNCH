import { OutlinedInput, InputAdornment, styled } from '@mui/material'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchStyle = styled((props) => <OutlinedInput {...props} />)(({theme}) => ({
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '300ms'
  }),
  '&.Mui-focused': {width: 450},
  width: 300
}))


const ProductSearchBar = ({...other})  => {
    return (
        <SearchStyle
          margin='none'
          {...other}
          startAdornment={
              <InputAdornment position="start">
                <SearchOutlinedIcon  sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
          }
        />
    )
};

export default ProductSearchBar;