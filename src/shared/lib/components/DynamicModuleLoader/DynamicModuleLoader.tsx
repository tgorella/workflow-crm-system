import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
reducers: ReducersList,
removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {children, reducers, removeAfterUnmount} = props

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({type:`@DESTROY ${name} reducer`})
                })
            }
        }
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

    return ( 
        <>
            {children}
        </>
    )
}