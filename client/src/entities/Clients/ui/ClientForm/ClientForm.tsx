import { Input } from '@/shared/ui/Input/Input'
import cls from './ClientForm.module.scss'
import { Client } from '../../model/types/clientSchema'
import { useTranslation } from 'react-i18next'
import { AppButton, ButtonTheme } from '@/shared/ui/AppButton/AppButton'
import { FileUploadArea } from '@/shared/ui/FileUpload'
import { VStack } from '@/shared/ui/Stack'
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar'

interface ClientFormProps {
  errors: Client,
  data: Client,
  withButton?: boolean,
  onChangeAvatar: (value: string) => void,
  onChangeClientName: (value: string) => void,
  onChangeClientEmail: (value: string) => void,
  onChangeClientPhone: (value: string) => void,
  onChangeClientAddress: (value: string) => void,
  onChangeClientProfession: (value: string) => void,
  onChangeClientInstagram: (value: string) => void,
  onChangeClientTelegram: (value: string) => void,
  onSaveUser: () => void

}
export const ClientForm = ({
    data, 
    errors, 
    withButton = true,
    onChangeAvatar, 
    onChangeClientName,
    onChangeClientEmail,
    onChangeClientPhone,
    onChangeClientAddress,
    onChangeClientProfession,
    onChangeClientInstagram,
    onChangeClientTelegram,
    onSaveUser

} : ClientFormProps) => {
    const {t} = useTranslation('clients')
   
    return ( 
        <div className={cls.info_container}>
            <VStack max gap='20'>
                <Avatar
                    size={AvatarSize.XL}
                    src={data?.avatarUrls}>
                </Avatar>
                <FileUploadArea 
                    multiple={false}
                    onUpdateLinks={( link: string[]) => onChangeAvatar(link[0])}
                    dropDownArea={false}
                    label={t('Загрузить аватар')}
                />
            </VStack>
            <Input 
                label={t('Имя')} 
                value={data?.name}  
                onChange={onChangeClientName} 
                name='name' 
                error={errors.name}
            />
            <Input 
                label={t('Почта')} 
                value={data?.email}  
                onChange={onChangeClientEmail} 
                name='email' 
                error={errors.email}
            />
            <Input 
                label={t('Телефон')} 
                value={data?.phone}  
                onChange={onChangeClientPhone} 
                name='phone' 
                type='tel'
                error={errors.phone}
            />
            <Input 
                label={t('Адрес')} 
                value={data?.address}  
                onChange={onChangeClientAddress} 
                name='address' 
                error={errors.address}
            />
            <Input 
                label={t('Профессия')} 
                value={data?.profession}  
                onChange={onChangeClientProfession} 
                name='profession' 
                error={errors.profession}
            />
            <Input 
                label={t('Инстаграм')} 
                value={data?.instagram}  
                onChange={onChangeClientInstagram} 
                name='instagram' 
                error={errors.instagram}
            />
            <Input 
                label={t('Телеграм')} 
                value={data?.telegram}  
                onChange={onChangeClientTelegram} 
                name='telegram' 
                error={errors.telegram}
            />
            {withButton && <AppButton 
                theme={ButtonTheme.OUTLINED} 
                onClick={onSaveUser} 
                disabled={Object.values(errors).filter((item) => item !== '').length > 0 ? true : false}
            >
                {t('Сохранить')}
            </AppButton>}
        </div>
    )
}