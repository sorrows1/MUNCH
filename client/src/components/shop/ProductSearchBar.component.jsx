import { TextField, InputAdornment } from '@mui/material'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const ProductSearchBar = ({sx, ...other})  => {
    return (
        <TextField
          margin='none'
          {...other}
          sx={{transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', ':focus-within': {width: '30%'}, ...sx }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon  sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            )
          }}
        />
    )
};

export default ProductSearchBar;