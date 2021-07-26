export default (qChange, index)=> {
    return {
        type: 'updateProduce',
        payload: {
            qChange,
            index
        }
    }
}