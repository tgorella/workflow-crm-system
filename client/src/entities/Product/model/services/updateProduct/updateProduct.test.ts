import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { updateProduct } from './updateProduct'
import { ProductType } from '../../types/Product'


const data = {data: {
    updateProduct: {
        _id: '1',
        name: 'Product 1',
        price: 100,
        description: 'Some description',
        discount: 0,
        count: 150,
        productType: ProductType.PRODUCT,
        img: [],
        category: '',
        subcategory: '',
        userId: ''
    }
}}
describe('UpdateProduct.test', () => {
    test('success', async () => {
       

        const thunk = new TestAsyncThunk(updateProduct, {
            productDetails: {
                form: data.data.updateProduct
            }
        })
        thunk.api.post.mockReturnValue(Promise.resolve({data}))

        const result = await thunk.callThunk('1')

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data.data.updateProduct)
    })
    test('fetch error', async () => {
        const thunk = new TestAsyncThunk(updateProduct,  {
            productDetails: {
                form: data.data.updateProduct
            }
        })
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))

        const result = await thunk.callThunk('1')

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})