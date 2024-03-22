import cls from './SettingPage.module.scss'
import classNames from 'shared/lib/classNames/ClassNames'
import {memo, useState} from 'react'
import { useTranslation } from 'react-i18next'
import { OrderStatusEdit } from 'widgets/OrderStatusEdit'
import { BulletMenu } from 'shared/ui/BulletMenu'
import { bulletMenuItemSchema } from 'shared/ui/BulletMenu/model/types/bulletMenuItemSchema'
import { ProfilePage } from 'pages/ProfilePage'
import { EventTypesEdit } from 'widgets/EventTypesEdit'
import { ProjectEdit } from 'widgets/ProjectEdit'
import { VStack } from 'shared/ui/Vstack/Vstack'


interface SettingPageProps {
  className?: string;
}

const SettingPage = memo(({className} : SettingPageProps) => {
    const {t} = useTranslation('settings')
    const [path, setPath] = useState('profile')
    const [pageContent, setPageContent] = useState(<ProfilePage />)

    const items: bulletMenuItemSchema[]  = [{
        text: 'Профиль',
        elementName: 'profile'

    },
    {
        text: 'Статусы заказов',
        elementName: 'stats'
    },
    {
        text: 'Проекты',
        elementName: 'projects'
    },
    {
        text: 'Категории событий',
        elementName: 'events'
    }
    ]
    const togglePages = (name: string) => {
        if (name === 'stats') {
            setPageContent(<OrderStatusEdit />)
            setPath(name)
        }
        if (name === 'projects') {
            setPageContent(<ProjectEdit />)
            setPath(name)
        }
        if (name === 'events') {
            setPageContent(<EventTypesEdit />)
            setPath(name)
        }
  
        if (name === 'profile') {
            setPageContent(<ProfilePage />)
            setPath(name)
        }
    }
    return ( 
        <VStack gap='20' className={classNames(cls.SettingPage, {}, [className])}>
            <h1>{t('Настройки')}</h1>
            <BulletMenu  
                items={items} 
                path={path} 
                onClick={togglePages}/>
            {pageContent}
        </VStack>
        
    )
})

export default SettingPage