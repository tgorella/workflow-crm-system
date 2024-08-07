import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
    test('should return value', () => {
        const data = {
            firstname:'Name',
            lastname:'Lastname',
            age:24,
            currency:Currency.RUB,
            country:Country.Russia,
            city:'City',
            username:'tratata',
            avatar:'https://avatars.githubusercontent.com/u/107557323?v=4'
        }
        const state : DeepPartial<StateSchema> = {
            profile: {
                data: data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('with empty state', () => {
        const state : DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})