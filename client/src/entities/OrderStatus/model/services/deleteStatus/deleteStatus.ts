import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'

export const deleteStatus = createAsyncThunk<string, string,ThunkConfig<string>>(
    'orderStatus/delete',
    // @ts-ignore
    async (orderStatusId, thunkAPI) => {
        const {rejectWithValue, extra} = thunkAPI
        try {
            const response = await extra.api.delete<string>('/order-statuses/'+ orderStatusId)
            
            if (!response) {
                throw new Error('err')
            }
            
            return response.data
        } catch (error) {
            return rejectWithValue(i18n.t('Что-то пошло не так. Попробуйте позже'))
        }
    }
)