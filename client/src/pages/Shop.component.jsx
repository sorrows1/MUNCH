import { useState} from 'react';
import { useSelector} from 'react-redux'

import { Stack } from '@mui/material';

import Section from '../components/Section.component';
import { ProductFilterSidebar, ProductSort, ProductSearchBar, ProductShop } from '../components/shop';

import { selectProducts } from '../app/products/products.selector';
import useResponsive from '../hooks/useResponsive';

const Shop = ({sx}) => {
    
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
        <Section>

        </Section>
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
        </Section>
      </main>
      
    );
}
 
export default Shop;
