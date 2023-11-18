import { Client } from './model/types/clientSchema'
import { ClientCard } from './ui/ClientCard/ClientCard'
import { getClientById } from './model/services/getClientById/getClientById'
import type { ClientDetailsSchema } from './model/types/clientDetailsSchema'
import { getClientDetailsData } from './model/selectors/getClientDetailsData/getClientDetailsData'
import { getClientDetailsError } from './model/selectors/getClientDetailsError/getClientDetailsError'
import { getClientDetailsForm } from './model/selectors/getClientDetailsForm/getClientDetailsForm'
import { getClientDetailsIsLoading } from './model/selectors/getClientDetailsIsLoading/getClientDetailsIsLoading'
import { updateClientData } from './model/services/updateClientData/updateClientData'
import { clientDetailsAction, clientDetailsReducer } from './model/slice/clientDetailsSlice'
import { ClientsList } from './ui/ClientsList/ClientsList'
import { ClientForm } from './ui/ClientForm/ClientForm'


export {
    Client,
    ClientDetailsSchema,
    getClientById,
    updateClientData,
    ClientCard,
    clientDetailsAction,
    ClientsList,
    ClientForm,
    getClientDetailsData,
    getClientDetailsError,
    getClientDetailsForm,
    getClientDetailsIsLoading,
    clientDetailsReducer,
}