// All reducers have two params:
// 1. Current state, usually provide a default state 
// 2. Info that came from any action

const seedData = [
    {
        food: "chicken breast",
        quantity: 14
    },
    {
        food: "bacon",
        quantity: 11
    },
    {
        food: "mahi mahi",
        quantity: 35
    },
    {
        food: "salmon",
        quantity: 59
    }
]
export default (state = seedData, action)=> {
    if(action.type === 'updateMeat') {
        // we make a copy of state because we NEVER mutate state
        const newState = [...state];
        const payload = action.payload;
        newState[payload.index].quantity += payload.qChange;
        return newState;
    }
    else if(action.type === 'clearInventory'){
        let newState = [...state];
        newState.forEach((item,i)=> {
            item.quantity = 0
        })
        return newState;
    }
    else {
        return state;
    }
}