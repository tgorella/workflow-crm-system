import { ReducersMapObject } from '@reduxjs/toolkit'
import { Decorator } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { Project } from 'entities/Project'
import { projectsPageReducer } from 'pages/ProjectsPage'
import { projectEditReducer } from 'widgets/ProjectEdit'

export const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    ProjectEdit: projectEditReducer,
    ProjectSelect: projectEditReducer,
    projectPage: projectsPageReducer
}

const projectsArr: Project[] = [
    {
        _id: 'jhmgjh54rhre',
        name: 'Разработка бренд бука',
        userId: 'апвапр',
        stages: [
            {
                _id: '',
                name: 'Подготовка',
                userId: '',
                projectId: '',
                index: 0,
                steps: [
                    {_id: 'skjfsh',
                        name: 'Подписать договор',
                        projectId: '',
                        userId: '',
                        stageId: '',
                        index: 1,
                    },
                    {_id: 'wrwerr453',
                        name: 'Заполнить бриф / ТЗ',
                        projectId: '',
                        userId: '',
                        stageId: '',
                        index: 2,
                    },
                    {_id: 's3443ghfhsh',
                        name: 'Аванс',
                        projectId: '',
                        userId: '',
                        stageId: '',
                        index: 3,
                    }
                ]
            }
        ]
    },
    {
        _id: 'jha8475fdsgf',
        name: 'Разработка логотипа',
        userId: 'апвапр',
        stages: []
    },
    {
        _id: 'ksjdhfhdf343',
        name: 'Разработка фирменного стиля',
        userId: 'апвапр',
        stages: []
    }]
export const projects: DeepPartial<StateSchema> = {
    ProjectSelect: {
        isLoading: false,
        data: projectsArr
    },
    ProjectEdit: {
        isLoading: false,
        data: projectsArr
    },
    projectPage: {
        isLoading: false,
        data: projectsArr
    }
}
export const projectEditError: DeepPartial<StateSchema> = {
    ProjectEdit: {
        isLoading: false,
        error: 'error'
    },
    projectPage: {
        isLoading: false,
        error: 'error'
    },
    ProjectSelect: {
        isLoading: false,
        error: 'error'
    }
}
export const ProjectEditIsLoading: DeepPartial<StateSchema> = {
    ProjectEdit: {
        isLoading: true
    },
    ProjectSelect: {
        isLoading: true
    }

}

export const EditProjectStoreDecorator: Decorator = (Story) => (
    <StoreProvider initialState={projects} asyncReducers={defaultAsyncReducers}>
        {Story()}
    </StoreProvider>
)
export const orderStatusesErrorStoreDecorator: Decorator = (Story) => (
    <StoreProvider initialState={projectEditError} asyncReducers={defaultAsyncReducers}>
        {Story()}
    </StoreProvider>
)
export const orderStatusesIsLoadingStoreDecorator: Decorator = (Story) => (
    <StoreProvider initialState={ProjectEditIsLoading} asyncReducers={defaultAsyncReducers}>
        {Story()}
    </StoreProvider>
)
