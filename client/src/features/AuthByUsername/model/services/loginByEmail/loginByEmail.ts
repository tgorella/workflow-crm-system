import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { tokenService } from 'entities/Token'
import { User, userAction } from 'entities/User'
import httpService from 'shared/api/api'
import i18n from 'shared/config/i18n/i18n'

interface loginByEmailProps {
email: string,
password: string
}

export const loginByEmail = createAsyncThunk<User, loginByEmailProps,ThunkConfig<string>>(
    'login/loginByEmail',
    async (authData, thunkAPI) => {
        const {dispatch, rejectWithValue, extra} = thunkAPI

        try {
            const response = await extra.api.post('/auth/signInWithPassword',authData)
            if (!response.data) {
                throw new Error('user not found')
            }

            tokenService.setTokens(response.data)
            const user = await httpService.get('/user/'+ response.data.userId)
            

            dispatch(userAction.setAuthData(user.data))

            return user.data
        } catch (error) {
            return rejectWithValue(i18n.t('Неправильные логин или пароль'))
        }
    }
)