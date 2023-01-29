import { FETCH_CITY_REQUEST, FETCH_CITY_SUCCESS, FETCH_CITY_FAILURE } from "../actions/cityAction";

const initialState={
    loading: false,
    cities:[],
    error: '',
}

const searcher = (state=initialState, action) =>{
    switch(action.type){
        
        case FETCH_CITY_REQUEST:

        case FETCH_CITY_SUCCESS:

        case FETCH_CITY_FAILURE:



        default: return state;
    }
}

export default searcher;