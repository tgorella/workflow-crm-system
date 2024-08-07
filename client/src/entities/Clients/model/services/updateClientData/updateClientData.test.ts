import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { updateClientData } from './updateClientData'

describe('updateProfileData.test', () => {

    test('success', async() => {
        const data = {data: { 
            updateClient: {
                id:'643c5fe7013e22868a6eb63c',
                avatarUrls: 'https://amur.info/wp-content/uploads/2023/07/3-16-768x518.jpg',
                name: 'Джонни Депп',
                profession: 'актер',
                email: 'name@mydomain.com',
                phone: '89001234567',
                notes: 'американский актёр, кинорежиссёр, музыкант, сценарист и продюсер.'
            }}}

        const thunk = new TestAsyncThunk(updateClientData, {
            clientDetails: {
                form: data.data.updateClient
            }
        })

        thunk.api.post.mockReturnValue(Promise.resolve({data}))

        const result = await thunk.callThunk()

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data.data.updateClient)

    })
    test('error fetch', async() => {
        
        const thunk = new TestAsyncThunk(updateClientData)
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk()
        
        expect(result.meta.requestStatus).toBe('rejected')
    })
})