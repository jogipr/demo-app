export const initialState=[
    {
        team1:"England",
        team2:"India",
        venue:"Delhi",
        date:"some date"
    },
    {
        team1:"Australia",
        team2:"India",
        venue:"Pune",
        date:"some date"
    }
]

export const matchesReducer=(state,action)=>{
    switch(action.type){
        case 'SET_MATCH':
            return [
                ...state,
                action.value
            ]
        
        default:
             return state;
    }
}

export default {
    matchesReducer,
    initialState
}
