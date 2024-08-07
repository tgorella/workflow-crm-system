import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NoteBlock.module.scss'
import { Box } from '@/shared/ui/Box'
import { EditSwitcher } from '@/widgets/EditeSwitcher'
import { AppButton, ButtonTheme } from '@/shared/ui/AppButton/AppButton'
import classNames from '@/shared/lib/classNames/ClassNames'
interface NoteBlockProps {
  className?: string;
  value?: string;
  onChange: (el: string) => void;
  onSave: () => void;
  onCancelEdit: () => void;
  onlyRead?: boolean;

}
export const NoteBlock = memo(({className, value = '', onCancelEdit, onChange, onSave, onlyRead = false} : NoteBlockProps) => {
    const {t} = useTranslation()
    const [noteEdit, setEdit] = useState(false)

    function changeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
        onChange?.(e.target.value)
    }

    const toggleEditMode = () => setEdit(!noteEdit)

    const handleCancelEdit = () => {
        onCancelEdit()
        toggleEditMode()
    }

    const handleSave = () => {
        onSave()
        toggleEditMode()
    }
    return ( 
        <Box header={t('Заметки')} className={classNames(cls.NoteBlock, {}, [className])}>
            {!onlyRead && 
            <div className={cls.edit_icon}>
                <EditSwitcher editMode={noteEdit} onCancelEdit={handleCancelEdit} onEdit={toggleEditMode} />
            </div>
            }
            
            {!noteEdit && <p
                className={cls.notes}
                dangerouslySetInnerHTML={{
                    __html: value
                        .replace('<', '')
                        .replace('>', '')
                        .split(/\n/g)
                        .map((el) => `<p>${el}</p>`)
                        .join('')
                        .replace('[b]', '<b>')
                        .replace('[/b]', '</b>'),
                }}></p>}
            {noteEdit && <div className={cls.form_wrapper}>
                <p>
                    {t('Используйте [b]текст[/b], чтобы сделать текст жирным')}
                    <br />
                </p>
                <textarea
                    name="notes"
                    rows={10}
                    onChange={changeHandler}
                    value={value}
                    className={cls.text_area}
                />
                <AppButton
                    onClick={handleSave}
                    theme={ButtonTheme.OUTLINED}
                    className={cls.btn}
                >{t('Сохранить')}</AppButton>
            </div>}
        </Box>
    )
})