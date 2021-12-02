import CountUI from "../component/Count"
import {connect} from "react-redux"
import {createIncrementAction} from "../store/countAction"

const mapStateToProps = (state)=>{
    return {
        count:state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        add:number=>dispatch(createIncrementAction(number))
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(CountUI)