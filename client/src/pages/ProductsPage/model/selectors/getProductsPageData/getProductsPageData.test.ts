import { StateSchema } from '@/app/providers/StoreProvider'
import { ProductType } from '@/entities/Product'
import { getProductsPageData } from './getProductsPageData'

const data = [{
    _id: '1',
    name: 'Диффузор для дома "Дыня"',
    price: 100,
    description: 'Диффузор для дома создаст приятную атмосферу и освежит любое помещение. Соленая карамель - это отличный декор и аромат вашего дома. Диффузор Terin House — ароматизатор воздуха на селективных французских ароматических маслах со стойкостью до 1-2 месяца. Композиция ароматизатора для квартиры «Соленая карамель» с насыщенными, но не приторными нотами создаут атмосферу свежести на площади до 30 м². Парфюм Представляет собой емкость с ароматическими маслами, в которую вставляются фибровые аромапалочки, мягко распространяющие аромат по всему пространству комнаты. Ароматизатор для дома подходит для любых помещений. Может не только наполнить туалет или ванную утонченным ароматом, но и сделать другие домашние комнаты более уютными. Тщательно продуманная формула яркого и интригующего нежного аромата освежителя для комнаты поможет нейтрализовать запахи еды на кухне. ',
    discount: 10,
    count: 150,
    productType: ProductType.PRODUCT,
    img: [
        'https://basket-12.wbbasket.ru/vol1742/part174261/174261502/images/big/1.webp',
    ],
    category: 'Товары для дома',
    subcategory: '',
    userId: ''
},
{
    _id: '2',
    name: 'Диффузор для дома "Дыня"',
    price: 150,
    description: 'Диффузор для дома создаст приятную атмосферу и освежит любое помещение. Соленая карамель - это отличный декор и аромат вашего дома. Диффузор Terin House — ароматизатор воздуха на селективных французских ароматических маслах со стойкостью до 1-2 месяца. Композиция ароматизатора для квартиры «Соленая карамель» с насыщенными, но не приторными нотами создаут атмосферу свежести на площади до 30 м². Парфюм Представляет собой емкость с ароматическими маслами, в которую вставляются фибровые аромапалочки, мягко распространяющие аромат по всему пространству комнаты. Ароматизатор для дома подходит для любых помещений. Может не только наполнить туалет или ванную утонченным ароматом, но и сделать другие домашние комнаты более уютными. Тщательно продуманная формула яркого и интригующего нежного аромата освежителя для комнаты поможет нейтрализовать запахи еды на кухне. ',
    discount: 20,
    count: 450,
    productType: ProductType.PRODUCT,
    img: [
        'https://basket-12.wbbasket.ru/vol1695/part169548/169548656/images/big/1.webp',
    ],
    category: 'Товары для дома',
    subcategory: '',
    userId: ''
} 
]

describe('getProductsPageData.test', () => {
    test('should return value', () => {
        const state : DeepPartial<StateSchema> = {
            productPage: {
                data: data
            }
        }

        expect(getProductsPageData(state as StateSchema)).toEqual(data)
    })
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProductsPageData(state as StateSchema)).toEqual(undefined)
    })
})