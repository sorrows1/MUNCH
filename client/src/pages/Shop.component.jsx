import { useDispatch } from 'react-redux';
import { useState, useEffect} from 'react';
import { useSelector} from 'react-redux'

import { Stack } from '@mui/material';

import Section from '../components/Section.component';
import { ProductFilterSidebar, ProductSort, ProductSearchBar, ProductShop } from '../components/shop';

import { getProductAll } from '../app/products/products.action';
import { selectProducts } from '../app/products/products.selector';
import useResponsive from '../hooks/useResponsive';


const Shop = ({sx}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductAll());
        // eslint-disable-next-line
    }, []);

    const products = useSelector(selectProducts)
    
    const [ isOpenFilter, setIsOpenFilter ] = useState(false);

    const onOpenFilter = () => {
      setIsOpenFilter(true)
    }

    const onCloseFilter = () => {
      setIsOpenFilter(false)
    }

    const isDesktop = useResponsive('up', 'sm')

    return ( 
      <main>
        <Section sx={{mt: 6, ...sx}}>
          <Stack direction={isDesktop ? 'row' : 'column'} justifyContent='space-between' alignItems={isDesktop ? 'center': 'initial'} sx={{mb: 3}}>
            <ProductSearchBar size='small' placeholder='Search product...' />
            <Stack direction='row'>
              <ProductFilterSidebar isOpenFilter={isOpenFilter} onOpenFilter={onOpenFilter} onCloseFilter={onCloseFilter} />
              <ProductSort />
            </Stack>
          </Stack>
        </Section>
        <Section sx={{mt:5}}>
          <ProductShop products={products} />
        </Section>
      </main>
      
    );
}
 
export default Shop;
