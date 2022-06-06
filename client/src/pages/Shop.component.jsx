import { useState } from 'react';
import { Stack} from '@mui/material';


import Section from '../components/Section.component';
import { ProductFilterSidebar, ProductSort, ProductSearchBar, ProductShop } from '../components/shop';
import useResponsive from '../hooks/useResponsive';

const products = [
    {
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },{
        "id": 2,
        "title": "testing update",
        "price": "11.00",
        "image": "static/imgs/meal-1.webp",
        "description": "testing recipe",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-25T06:58:57.000Z",
        "updatedAt": "2022-05-26T12:00:13.000Z",
        "types": [
            {
                "id": 4,
                "name": "lowFodmap",
                "productType": {
                    "productId": 2,
                    "typeId": 4
                }
            }
        ]
    },
    {
        "id": 3,
        "title": "testing 123",
        "price": "11.00",
        "image": "static/imgs/meal-2.webp",
        "description": "testing",
        "healthScore": "100.00",
        "active": true,
        "createdAt": "2022-05-26T11:47:24.000Z",
        "updatedAt": "2022-05-26T11:47:24.000Z",
        "types": [
            {
                "id": 1,
                "name": "dairyFree",
                "productType": {
                    "productId": 3,
                    "typeId": 1
                }
            },
            {
                "id": 2,
                "name": "glutenFree",
                "productType": {
                    "productId": 3,
                    "typeId": 2
                }
            },
            {
                "id": 3,
                "name": "ketogenic",
                "productType": {
                    "productId": 3,
                    "typeId": 3
                }
            }
        ]
    },
]

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
          <ProductShop products={products} />
        </Section>
      </main>
      
    );
}
 
export default Shop;
