import CountUI from "../component/Count"
import {connect} from "react-redux"
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../store/countAction"

//优化前
//const mapStateToProps = state=>({count:state})
// const mapDispatchToProps = dispatch=>({
//     add:number=>dispatch(createIncrementAction(number)),
//     reduce:number=>dispatch(createDecrementAction(number)),
//     addAsync:number=>dispatch(createIncrementAsyncAction({value:number,time:300})),
// })


// export default connect(mapStateToProps,mapDispatchToProps )(CountUI)

//优化后（根据api优化方法）
export default connect(
   state=>({count:state}),
   {
    add:createIncrementAction,
    reduce:createDecrementAction,
    addAsync:createIncrementAsyncAction
   } 
)(CountUI)