import axios from 'axios'
import airportReducer from './airport.reducer'
/*이 화면에서 데이터를 주고받아야 하기에 reducer가 작동해야함*/

const airportSearch = next => (dispatch) => {
    axios.get(``)
        .then(response => {
            dispatch(airportReducer(response.data))
            /*dispatch 내부에는 액션이 들어가야 한다.
            * 여기의 액션은 reducer 내부에 있다.
            * 그 data를 dispatch해서 보내버림
            */
        })
        .catch(error=>{throw(error)})

}
export {airportSearch}
// const airportSearch = () => (dispatch) => {} <- 방식이 redux-thunk