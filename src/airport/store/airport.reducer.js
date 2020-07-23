const getAirports = data => ({type:"FETCH_AIRPORT", payload: data})
    /*액션을 설정,
    Data = 외부에서 들어오는 데이터*/

const airportReducer = (state=[], action) => {
    /*state = [ ]의 뜻은 const initailState = []와 같다.*/
    switch(action.type){
        /*useState 안쓴다고 하면 switch와 action.type으로 대신 사용한다*/
        case "FETCH_AIRPORT": return action.payload
        default: return state
    }
}

export default airportReducer