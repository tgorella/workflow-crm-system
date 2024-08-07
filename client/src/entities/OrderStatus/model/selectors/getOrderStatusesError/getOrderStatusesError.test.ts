import { StateSchema } from '@/app/providers/StoreProvider'
import { getOrderStatusesError } from './getOrderStatusesError'

describe('getOrderStatusesError.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            orderStatuses: {
                error: 'error'
            }
        }
        expect(getOrderStatusesError(state as StateSchema)).toEqual('error')
    })
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getOrderStatusesError(state as StateSchema)).toEqual(undefined)
    })
})