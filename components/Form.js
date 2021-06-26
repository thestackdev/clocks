import { useDispatch } from 'react-redux'
import { updateKey } from 'redux/times'

const Form = () => {
    const dispatch = useDispatch();
    return <div className='form__container'>
        <img src='/search.svg' alt='search' />
        <input className='form__input' placeholder='search timezones' onChange={(e) => dispatch(updateKey(e.target.value))}></input>
    </div>
}
export default Form