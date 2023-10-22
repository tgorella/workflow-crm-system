import { useTranslation } from 'react-i18next'
import cls from './Pagination.module.scss'
import classNames from 'shared/lib/classNames/ClassNames'

interface PaginationProps {
  className?: string;
  itemsLength: number;
  itemsPerPage: number;
  currentPage: number;
  onPageUp: (page: number) => void;
  onPageDown: (page: number) => void;
}
export const Pagination = ({className, itemsLength, itemsPerPage, currentPage, onPageDown, onPageUp} : PaginationProps) => {
    const {t} = useTranslation()
    const totalPages = Math.ceil(itemsLength / itemsPerPage)
    return ( 
        <div className={classNames(cls.Pagination, {}, [className])}>
            <div className={cls.wrapper}>
                {currentPage !== 1 && (
                    <>
                        <div className={cls.page} onClick={() => onPageDown(2)}>
                            {t('«')}
                        </div>
                        <div
                            className={cls.page}
                            onClick={() => onPageDown(currentPage)}>
                            {t('←')}
                        </div>
                    </>
                )}
                <div className={cls.page} >{currentPage}</div>
                {currentPage !== totalPages && (
                    <>
                        <div className={cls.page} onClick={() => onPageUp(currentPage)}>
                            {t('→')}
                        </div>
                        <div className={cls.page} onClick={() => onPageUp(totalPages - 1)}>
                            {t('»')}
                        </div>
                    </>
                )}

            </div>
            <div className={cls.info}>{t('Всего страниц')}: {totalPages} </div>
            <div className={cls.info}>{t('Всего записей')}: {itemsLength}</div>
        </div>
    )
}