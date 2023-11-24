import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'
import { getUserAuthData } from 'entities/User'
import { Order } from '../../types/OrderSchema'
import { ordersPageAction } from 'pages/OrdersPage/model/slice/OrdersPageSlice'

export type FilterProps = {
  orderId: string,
}
export const deleteOrder = createAsyncThunk<Order, string ,ThunkConfig<string>>(
    'orderDetails/deleteOrder',
    async (orderId, thunkAPI) => {
        const {rejectWithValue, extra, getState, dispatch} = thunkAPI
        const userData = getUserAuthData(getState())
        try {
            const {data} = await extra.api.get<Order>(`/orders/${orderId}`)
            if (data.userId !== userData?.id) {
                throw new Error('Нет доступа')
            }
            if (!data) {
                throw new Error('err')
            }
            const response = await extra.api.delete(`/orders/${orderId}`)
            dispatch(ordersPageAction.orderDeleted(orderId))
            return response.data

        } catch (error) {
            return rejectWithValue(i18n.t('Клиент не найден'))
        }
    }
)