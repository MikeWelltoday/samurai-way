import {useDispatch} from 'react-redux'
import {AppThunkDispatchType} from '../../redux/store'

export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()