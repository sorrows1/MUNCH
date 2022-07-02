import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik, FieldArray, getIn, FormikProvider } from 'formik'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import { Container, Stack, Grid, Typography, Button, Card, TextField, Switch, InputAdornment, Autocomplete, Popper} from '@mui/material'
import { styled } from '@mui/material/styles'

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';


import { createProduct, getProduct, updateProduct } from '../../app/products/products.action'
import { selectProduct } from '../../app/products/products.selector'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const PopperStyle = styled((props) => (
  <Popper placement='bottom-start' {...props} />
))({
  width: '280px !important',
});

const validationSchema = yup.object({
  title: yup
    .string('Product Name')
    .required('Name is required'),
  description: yup
    .string('Enter your password')
    .max(250, 'Description cannot be more than 250 characters')
    .required('Description is required'),
  active: yup
    .boolean(),
  price: yup.number().min(1).test(
      "maxDigitsAfterDecimal",
      "number field must have 2 digits after decimal or less",
      (number) => /^\d+(\.\d{1,2})?$/.test(number)
    ),
  healthScore: yup.number().min(1).max(100).required(),
  types: yup.array(),
  ingredients: yup.array().of(
    yup.object().shape({
      ingredientId: yup.number().required('ID is required'),
      amount: yup.number().min(1).test(
      "maxDigitsAfterDecimal",
      "number field must have 2 digits after decimal or less",
      (number) => /^\d+(\.\d{1,2})?$/.test(number)
      ),  
      original: yup.string().required("Description is required"),
      unit: yup.string().required("Unit is required")
    })
  )
  
});

const testing = [
  {id: 1, name: 'dairyFree'},
  {id: 2, name: 'glutenFree'},
  {id: 3, name: 'ketogenic'},
  {id: 4, name: 'lowFodmap'},
  {id: 5, name: 'vegan'},
  {id: 6, name: 'vegeterian'},
  {id: 7, name: 'veryHealthy'},
]

const ingredientsTesting = [
    
    {
        "ingredientId": 15260,
        "ingredient": "canned salmon"
    },
    {
        "ingredientId": 15076,
        "ingredient": "grilled salmon"
    },
    {
        "ingredientId": 15072,
        "ingredient": "salmon caviar"
    },
    {
        "ingredientId": 10015076,
        "ingredient": "salmon steaks"
    },
    {
        "ingredientId": 1103,
        "ingredient": "1 percent chocolate milk"
    },
    {
        "ingredientId": 1082,
        "ingredient": "1 percent milk"
    },
    {
        "ingredientId": 18235,
        "ingredient": "100 percent whole wheat crackers"
    },
    {
        "ingredientId": 4017,
        "ingredient": "1000 island dressing"
    },
    {
        "ingredientId": 1174,
        "ingredient": "2% milk"
    },
    {
        "ingredientId": 23567,
        "ingredient": "85% lean ground beef"
    },
    {
        "ingredientId": 23562,
        "ingredient": "90 percent ground beef"
    },
    {
        "ingredientId": 5665,
        "ingredient": "93% lean mince turkey"
    },
    {
        "ingredientId": 99094,
        "ingredient": "acai berry powder"
    },
    {
        "ingredientId": 98896,
        "ingredient": "acai juice"
    },
    {
        "ingredientId": 10093648,
        "ingredient": "achiote seeds"
    },
    {
        "ingredientId": 93647,
        "ingredient": "acini di pepe"
    },
    {
        "ingredientId": 11482,
        "ingredient": "acorn squash"
    },
    {
        "ingredientId": 6979,
        "ingredient": "adobo sauce"
    },
    {
        "ingredientId": 1012020,
        "ingredient": "adobo seasoning"
    },
    {
        "ingredientId": 16002,
        "ingredient": "adzuki beans"
    },
    {
        "ingredientId": 11663,
        "ingredient": "agar-agar"
    },
    {
        "ingredientId": 19912,
        "ingredient": "agave"
    },
    {
        "ingredientId": 1002069,
        "ingredient": "aged balsamic vinegar"
    },
    {
        "ingredientId": 15117,
        "ingredient": "ahi tuna steak"
    },
    {
        "ingredientId": 93758,
        "ingredient": "aioli"
    },
    {
        "ingredientId": 10311819,
        "ingredient": "aji amarillo"
    },
    {
        "ingredientId": 1006973,
        "ingredient": "aji amarillo paste"
    },
    {
        "ingredientId": 99017,
        "ingredient": "ajwain seeds"
    },
    {
        "ingredientId": 15126,
        "ingredient": "albacore tuna in water"
    },
    {
        "ingredientId": 10414003,
        "ingredient": "ale"
    },
    {
        "ingredientId": 1062009,
        "ingredient": "aleppo pepper"
    },
    {
        "ingredientId": 10111001,
        "ingredient": "alfalfa sprouts"
    },
    {
        "ingredientId": 93606,
        "ingredient": "alfredo pasta sauce"
    },
    {
        "ingredientId": 8001,
        "ingredient": "all-bran"
    },
    {
        "ingredientId": 1002050,
        "ingredient": "almond extract"
    },
    {
        "ingredientId": 19065,
        "ingredient": "almond joy"
    },
    {
        "ingredientId": 4529,
        "ingredient": "almond oil"
    },
    {
        "ingredientId": 12071,
        "ingredient": "almond paste"
    },
    {
        "ingredientId": 93607,
        "ingredient": "almondmilk"
    },
    {
        "ingredientId": 99095,
        "ingredient": "aloe vera juice"
    },
    {
        "ingredientId": 10118371,
        "ingredient": "alum powder"
    },
    {
        "ingredientId": 18371,
        "ingredient": "aluminum-free baking powder"
    },
    {
        "ingredientId": 20001,
        "ingredient": "amaranth"
    },
    {
        "ingredientId": 93763,
        "ingredient": "Amaranth Stone Ground Flour"
    },
    {
        "ingredientId": 93766,
        "ingredient": "amaretti biscuits"
    },
    {
        "ingredientId": 10014534,
        "ingredient": "amaretto liqueur"
    },
    {
        "ingredientId": 98964,
        "ingredient": "amchoor"
    },
    {
        "ingredientId": 10031015,
        "ingredient": "anaheim peppers"
    },
    {
        "ingredientId": 10211962,
        "ingredient": "ancho chili pepper"
    },
    {
        "ingredientId": 15001,
        "ingredient": "anchovy fillets"
    },
    {
        "ingredientId": 1004053,
        "ingredient": "anchovy oil"
    },
    {
        "ingredientId": 10015002,
        "ingredient": "anchovy paste"
    },
    {
        "ingredientId": 98917,
        "ingredient": "andes mints"
    },
    {
        "ingredientId": 7064,
        "ingredient": "andouille sausages"
    },
    {
        "ingredientId": 18088,
        "ingredient": "angel food cake"
    },
    {
        "ingredientId": 18087,
        "ingredient": "angel food cake mix"
    },
    {
        "ingredientId": 10020420,
        "ingredient": "angel hair"
    },
    {
        "ingredientId": 93653,
        "ingredient": "angostura bitters"
    },
    {
        "ingredientId": 2002,
        "ingredient": "anise"
    },
    {
        "ingredientId": 10611111,
        "ingredient": "anise extract"
    },
    {
        "ingredientId": 1009252,
        "ingredient": "anjou pear"
    },
    {
        "ingredientId": 10711111,
        "ingredient": "any color food coloring"
    },
    {
        "ingredientId": 20081,
        "ingredient": "AP flour"
    },
    {
        "ingredientId": 19294,
        "ingredient": "apple butter spread"
    },
    {
        "ingredientId": 1009016,
        "ingredient": "apple cider"
    },
    {
        "ingredientId": 10019297,
        "ingredient": "apple jelly"
    },
    {
        "ingredientId": 9016,
        "ingredient": "apple juice"
    },
    {
        "ingredientId": 19312,
        "ingredient": "apple pie filling"
    },
    {
        "ingredientId": 9021,
        "ingredient": "apricot"
    },
    {
        "ingredientId": 19719,
        "ingredient": "apricot jam"
    },
    {
        "ingredientId": 9036,
        "ingredient": "apricot nectar"
    },
    {
        "ingredientId": 20003,
        "ingredient": "arrowroot starch flour"
    },
    {
        "ingredientId": 11007,
        "ingredient": "artichoke"
    },
    {
        "ingredientId": 98959,
        "ingredient": "artichoke bottoms"
    },
    {
        "ingredientId": 93828,
        "ingredient": "artichoke heart quarters"
    },
    {
        "ingredientId": 1032035,
        "ingredient": "asafoetida powder"
    },
    {
        "ingredientId": 99179,
        "ingredient": "ash gourd"
    },
    {
        "ingredientId": 1001033,
        "ingredient": "asiago"
    },
    {
        "ingredientId": 4058,
        "ingredient": "asian sesame oil"
    },
    {
        "ingredientId": 4016,
        "ingredient": "asian toasted sesame dressing"
    },
    {
        "ingredientId": 10111583,
        "ingredient": "asian vegetables"
    },
    {
        "ingredientId": 11011,
        "ingredient": "asparagus tips"
    },
    {
        "ingredientId": 6996,
        "ingredient": "au jus"
    },
    {
        "ingredientId": 4581,
        "ingredient": "avocado oil"
    },
    {
        "ingredientId": 9037,
        "ingredient": "avocadoes"
    },
    {
        "ingredientId": 93631,
        "ingredient": "baby artichokes"
    },
    {
        "ingredientId": 11959,
        "ingredient": "baby arugula leaves"
    },
    {
        "ingredientId": 10111080,
        "ingredient": "baby beets"
    },
    {
        "ingredientId": 10311821,
        "ingredient": "baby bell peppers"
    },
    {
        "ingredientId": 93636,
        "ingredient": "baby bok choy"
    },
    {
        "ingredientId": 10011168,
        "ingredient": "baby corns"
    },
    {
        "ingredientId": 10011209,
        "ingredient": "baby eggplant"
    },
    {
        "ingredientId": 10011246,
        "ingredient": "baby leeks"
    },
    {
        "ingredientId": 11032,
        "ingredient": "baby lima beans"
    },
    {
        "ingredientId": 11953,
        "ingredient": "baby zucchini"
    },
    {
        "ingredientId": 10010204,
        "ingredient": "baby-back loin ribs"
    },
    {
        "ingredientId": 11960,
        "ingredient": "baby-cut carrots"
    },
    {
        "ingredientId": 4609,
        "ingredient": "bacon drippings"
    },
    {
        "ingredientId": 18408,
        "ingredient": "bagel"
    },
    {
        "ingredientId": 99098,
        "ingredient": "bagel chips"
    },
    {
        "ingredientId": 18033,
        "ingredient": "baguettes"
    },
    {
        "ingredientId": 10093663,
        "ingredient": "baharat"
    },
    {
        "ingredientId": 99151,
        "ingredient": "bajra"
    },
    {
        "ingredientId": 19433,
        "ingredient": "baked tortilla chips"
    }
]

const EditProduct = () => {

    const dispatch = useDispatch()

    const {id} = useParams()
    useEffect(() => {
        dispatch(getProduct(id))
    }, [])

    const product = useSelector(selectProduct)

    const formik = useFormik({
      initialValues: {
        title: '',
        description: '',
        image: null,
        active: false,
        price: '',
        healthScore: '',
        ingredients: [
          {ingredient: '', ingredientId: '', amount: '', original: '', unit: ''}
        ],
        types: []
      },
      validationSchema: validationSchema,
      onSubmit:  (values, {resetForm}) => {
        try{
           const formData = new FormData();
           formData.append('title', values.title)
           formData.append('description', values.description)
           formData.append('image', values.image)
           formData.append('active', values.active)
           formData.append('price', values.price)
           formData.append('healthScore', values.healthScore)
           formData.append('ingredients', JSON.stringify(values.ingredients))
           formData.append('types', JSON.stringify(values.types))
           console.log(values)
           dispatch(updateProduct(id, formData));
           resetForm()
           alert('Product successfully updated')
        } catch (err) {
          alert(err)
        }
      },
    });


    useEffect(() => {
        if(product[0]?.ingredients) {
            const ingredients = product[0].ingredients.map(val => { 
                const ingredientId = val.ingredientId;
                const ingredient = val.ingredient
                return {ingredient, ingredientId, ...val.recipe}
            })
           formik.setValues({...product[0], ingredients})
        }
    }, [product])

    const handleTypesChange = (event, value) => {
      formik.setFieldValue('types', value)
    }

    return ( 
    <Container>
      <Typography variant="h4" gutterBottom sx={{mb: 5}}>
        Update Product
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <Card sx={{p: 2.4, mb:2}}>
                <Stack spacing={2}>
                    <TextField
                      fullWidth
                      id="title"
                      name="title"
                      label="Product Name"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      error={formik.touched.title && Boolean(formik.errors.title)}
                      helperText={formik.touched.title && formik.errors.title}
                    />
                    <div>
                      <Typography variant='subtitle2' color='grey.600' gutterBottom>
                        Description
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Write something awesome..."
                        multiline
                        rows={6}
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                      />
                    </div>
                    <div>
                      <Typography variant='subtitle2' color='grey.600' gutterBottom>
                        Image
                      </Typography>
                      
                      <Button
                        variant="contained"
                        component="label"
                      >
                        Upload File
                        <input required id="image" hidden type="file" name="image" className="file_input"
                        onChange={(event) => {
                            formik.setFieldValue("image", event.currentTarget.files[0]);
                        }} />
                      </Button>
                    </div>
                </Stack>
            </Card>
            <Card sx={{p: 2.4, mb: 2}}>
              <div>
                      <Typography variant='subtitle2' color='grey.600' gutterBottom>
                        Ingredients
                      </Typography>
                    <FormikProvider value={formik}>
                      <FieldArray name="ingredients">
                        {({ push, remove }) => (
                          <Stack spacing={2}>
                            {formik.values.ingredients.map((ing, index) => {
                              const id = `ingredients[${index}].ingredientId`;
                              const ingredient = `ingredients[${index}].ingredient`;
                                
                              const amount = `ingredients[${index}].amount`;
                              const touchedAmount = getIn(formik.touched, amount);
                              const errorAmount = getIn(formik.errors, amount);

                              const original = `ingredients[${index}].original`;
                              const touchedOriginal = getIn(formik.touched, original);
                              const errorOriginal = getIn(formik.errors, original);
                              
                              const unit = `ingredients[${index}].unit`;
                              const touchedUnit = getIn(formik.touched, unit);
                              const errorUnit = getIn(formik.errors, unit);

                              return (
                                  <Stack direction='row' spacing={2} alignItems='center' key={index}>
                                    <Autocomplete
                                    options={ingredientsTesting}
                                    popupIcon={null}
                                    getOptionLabel={(option) => option.ingredient}
                                    PopperComponent={PopperStyle}
                                    onChange={(event, value) => formik.setFieldValue(id, value.ingredientId)}
                                    sx={{ width: 280 }}
                                    autoHighlight
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                      <TextField {...params} size='small' required placeholder='Search Ingredient...' />
                                    )}
                                    renderOption={(props, option, { inputValue }) => {
                                      const matches = match(option.ingredient, inputValue);
                                      const parts = parse(option.ingredient, matches);

                                      return (
                                        <li {...props}>
                                          <div>
                                            {parts.map((part, index) => (
                                              <Typography
                                                value={ingredient}
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
                                  />
                                  <TextField
                                    size='small'
                                    label='Amount'
                                    id={amount}
                                    name={amount}
                                    placeholder='0.00'
                                    value={ing.amount}
                                    error={touchedAmount && Boolean(errorAmount)}
                                    helperText={touchedAmount && errorAmount}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                  />

                                  <TextField
                                    size='small'
                                    variant="outlined"
                                    label="Description"
                                    name={original}
                                    value={ing.original}
                                    required
                                    helperText={
                                      touchedOriginal && errorOriginal
                                    }
                                    error={touchedOriginal && Boolean(errorOriginal)}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <TextField
                                    size='small'
                                    variant="outlined"
                                    label="Unit"
                                    name={unit}
                                    value={ing.unit}
                                    required
                                    helperText={
                                      touchedUnit && errorUnit
                                    }
                                    error={touchedUnit && Boolean(errorUnit)}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <Button
                                    type="button"
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => remove(index)}
                                  >
                                    x
                                  </Button>
                                </Stack>
                              );
                            })}
                            <Button
                              sx={{width:20}}
                              type="button"
                              variant="contained"
                              onClick={() =>
                                push({id: '', amount: '', original: '', unit: ''})
                              }
                            >
                              Add
                            </Button>
                          </Stack>
                        )}
                      </FieldArray>
                    </FormikProvider>
                    </div>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card sx={{p: 2.4, mb: 2}} >
              <Stack spacing={2}>
                <div>
                  <Typography variant='subtitle2' color='grey.600' sx={{mb: 1}}>
                    Product Status
                  </Typography>
                  <Stack direction={'row'} alignItems='center' justifyContent='flex-start' sx={{ml: -1.1}}>
                    <Switch id='active' checked={formik.values.active} onChange={formik.handleChange} />
                    <Typography variant='subtitle1'>
                      Active
                    </Typography>
                  </Stack>
                </div>
                <TextField
                  fullWidth
                  label='price'
                  id="price"
                  name="price"
                  placeholder='0.00'
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                  InputProps= {
                    {
                      startAdornment: (
                        <InputAdornment position="start">
                          $
                        </InputAdornment>
                      )
                    }
                  }
                />
                <TextField
                  fullWidth
                  label='Health Score'
                  id="healthScore"
                  name="healthScore"
                  value={formik.values.healthScore}
                  onChange={formik.handleChange}
                  error={formik.touched.healthScore && Boolean(formik.errors.healthScore)}
                  helperText={formik.touched.healthScore && formik.errors.healthScore}
                />
              <Autocomplete
                multiple
                id="types"
                name='types'
                value={formik.values.types}
                onChange={handleTypesChange}
                options={testing}
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Diets"
                    placeholder="Types of diets"
                    error={formik.touched.types && Boolean(formik.errors.types)}
                    helperText={formik.touched.types && formik.errors.types}
                />
                )}
              />
              </Stack>
            </Card>
            <Button color="primary" variant="contained" fullWidth type="submit" sx={{p: '10px 22px'}}>
                  Update Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>    

     );
}
 
export default EditProduct;