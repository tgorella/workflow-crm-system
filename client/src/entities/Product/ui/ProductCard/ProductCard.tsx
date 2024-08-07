import cls from './Product.module.scss'
import classNames from '@/shared/lib/classNames/ClassNames'
import {memo, useState} from 'react'
import { Product } from '../../model/types/Product'
import { useTranslation } from 'react-i18next'
import { Box } from '@/shared/ui/Box'
import { EditSwitcher } from '@/widgets/EditeSwitcher'
import { VStack } from '@/shared/ui/Stack'

interface ProductProps {
  className?: string;
  product: Product
}
export const ProductCard = memo(({className, product} : ProductProps) => {
    const {t} = useTranslation('product')
    const [largeImg, setLargeImg] = useState(product.img[0])
    const price = product.price - product.discount
    const currency = '₽'
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode((prev) => !prev)
    }
    const handleChangeLargeImage = (index: number) => {
        setLargeImg(product.img[index])
    }
    return ( 
        <Box>
            <EditSwitcher 
                className={cls.edit_switcher}
                editMode={editMode} 
                onEdit={toggleEditMode} 
                onCancelEdit={toggleEditMode} />
            <div className={classNames(cls.Product, {}, [className])}>
                <VStack className={cls.product_images_wrapper}>
                    <img src={largeImg} alt={product.name} className={cls.img_large}/>
                    <div className={cls.img_preview_wrapper}>
                        {
                            product.img.map((img, index) => {
                                return <img key={index} src={img} alt={product.name} className={cls.img_preview} onClick={() => handleChangeLargeImage(index)}/>})
                        }
                    </div>
                </VStack>
                <div className={cls.description_wrapper}>
                    <p className={cls.category}>{t('Категория')}: {product.category}</p>
                    <h2>{product.name}</h2>
                    <p className={cls.price}>{t('Стоимость')}: {price + ' ' + currency } <span className={cls.oldPrice}>{product.price > price ? product.price + ' ' + currency : ''}</span></p>
                    <p className={cls.description_title}>{t('Описание')}:</p>
                    <p className={cls.description}>{product.description}</p>
                </div>

            </div>
        </Box>
        
    )
})