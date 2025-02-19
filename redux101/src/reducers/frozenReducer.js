// All reducers have two params:
// 1. Current state, usually provide a default state 
// 2. Info that came from any action

const seedData = [
    {
        food: "TV dinners",
        quantity: 10
    },
    {
        food: "Frozen Veggies",
        quantity: 21
    },
    {
        food: "Frozen Pizzas",
        quantity: 25
    }
]
export default (state = seedData, action)=> {
    if(action.type === 'updateFrozen') {
        // we make a copy of state because we NEVER mutate state
        const newState = [...state];
        if(action.payload.operation === '+') {
            newState[action.payload.index].quantity++ 
        } else if(action.payload.operation === '-') {
           newState[action.payload.index].quantity--
        }
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