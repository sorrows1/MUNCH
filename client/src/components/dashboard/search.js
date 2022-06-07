// import { Autocomplete } from '@mui/material

// import parse from 'autosuggest-highlight/parse';
// import match from 'autosuggest-highlight/match';
// const PopperStyle = styled((props) => (
//   <Popper placement='bottom-start' {...props} />
// ))({
//   width: '280px !important',
// });
{
  /* <Autocomplete
  options={top100Films}
  getOptionLabel={(option) => option.title}
  popupIcon={null}
  PopperComponent={PopperStyle}
  sx={{ width: 280 }}
  autoHighlight
  renderInput={(params) => (
    <TextField {...params} placeholder='Search product...' />
  )}
  renderOption={(props, option, { inputValue }) => {
    const matches = match(option.title, inputValue);
    const parts = parse(option.title, matches);

    return (
      <li {...props}>
        <div>
          {parts.map((part, index) => (
            <Typography
              key={index}
              variant='subtitle1'
              sx={{
                fontWeight: part.highlight ? 700 : 400,
                color: part.highlight ? 'primary.main' : '',
              }}
              component='span'
            >
              {part.text}
            </Typography>
          ))}
        </div>
      </li>
    );
  }}
/>; */
}
