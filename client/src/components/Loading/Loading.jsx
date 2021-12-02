import "./Loading.css"
<<<<<<< HEAD
import styled from "styled-components"


const Wrapper = styled.div `
    height: 100vh;

    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
`
=======
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
>>>>>>> d16bbb7fd48f8711aa05ba79faba6e48195367e1

const Loading = ({loading}) => {

    return (
<<<<<<< HEAD
        <Wrapper>
            Loading ....
        </Wrapper>
=======
        <div className="box">
            <ClimbingBoxLoader color={"hsl(205, 63%, 48%)"} loading={loading} size={40}/>
        </div>
>>>>>>> d16bbb7fd48f8711aa05ba79faba6e48195367e1
    )
}


export default Loading
