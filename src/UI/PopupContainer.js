import './PopupContainer.css'
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux'
import { addTankAction } from '../store/addRefilOption-slice'

const PopupContainer = ({
    type,
    className,
    futterBtnText,
    futterBtnTwoText,
    popupTitle,
    children,
    onSubmit,
}) => {

    const dispatch = useDispatch()
    
    const closeHandler = () => {
        dispatch(addTankAction.closeinputHandler())
    }

    return (
        <>

            <div className='popup-wrapper'>
                <div>
                    <form
                        onSubmit={onSubmit}
                        className={`popup-container ${className}`}>
                        <div className='pupup-header'>
                            <p className='popup-title'>{popupTitle}</p>
                            <span onClick={closeHandler} className='popup-close'>X</span>
                        </div>

                        <div className='popup-body'>{children}</div>

                        <div className='popup-buttom'>
                            <button type={type} className='popup-button popup-button-next'>{futterBtnText}</button>
                            <button onClick={closeHandler} className='popup-button popup-button-close'>{futterBtnTwoText}</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default PopupContainer
