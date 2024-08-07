import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import i18n from '@/shared/config/i18n/i18n'
import { OrderStatusDetails } from '../../types/OrderStatus'

export const addOrderStatus = createAsyncThunk<OrderStatusDetails, Partial<OrderStatusDetails>,ThunkConfig<string>>(
    'orderStatus/add',
    // @ts-ignore
    async (data, thunkAPI) => {
        const {rejectWithValue, extra} = thunkAPI
        try {
            const newStatus = {
                ...data, isDefault: false
            }
            const response = await extra.api.post('/', {
                'query': 'mutation Mutation($data: OrderStatusInput) { addOrderStatus(data: $data) { _id color name } }',
                'operation-name': 'Mutation',
                'variables': {'data': newStatus}
            })
            
            if (!response) {
                throw new Error('err')
            }
            
            return response.data.data.addOrderStatus
        } catch (error) {
            return rejectWithValue(i18n.t('Что-то пошло не так. Попробуйте позже'))
        }
    }
)