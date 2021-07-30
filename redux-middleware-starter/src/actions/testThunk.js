export default () => {
    return(dispatch, getState)=> {
        setTimeout(() => {
            const reduxState = getState();
            if(reduxState.weather.main){
                dispatch({
                    type: "testThunk"
                })                
            }
            console.log(reduxState)
        }, 2000);
    }
}