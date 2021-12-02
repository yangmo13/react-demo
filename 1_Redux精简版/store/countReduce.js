
const initState = 0
export default function countReduce(preState = initState, action) {
    const { type, data } = action

    switch (type) {
        case 'increment':
            return preState + data * 1
        case "decreament":
            return preState - data * 1
        default:
            return preState

    }
}