import "./Loading.css"
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const Loading = ({loading}) => {

    return (
        <div className="box">
            <ClimbingBoxLoader color={"hsl(205, 63%, 48%)"} loading={loading} size={40}/>
        </div>
    )
}


export default Loading
