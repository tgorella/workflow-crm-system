import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'
import httpService from 'shared/api/api'
import { EventType } from '../../types/EventType'

export const updateEventType = createAsyncThunk<EventType, Partial<EventType>,ThunkConfig<string>>(
    'eventType/update',
    // @ts-ignore
    async (data, thunkAPI) => {
        const {rejectWithValue} = thunkAPI
        try {
            const response = await httpService.patch<EventType>('/event-type/'+ data._id, data)
            
            if (!response) {
                throw new Error('err')
            }
            
            return response.data
        } catch (error) {
            return rejectWithValue(i18n.t('Что-то пошло не так. Попробуйте позже'))
        }
    }
)