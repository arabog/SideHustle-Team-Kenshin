import "./Loading.css"
import styled from "styled-components"


const Wrapper = styled.div `
    height: 100vh;

    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
`


const Loading = () => {

    return (
        <Wrapper>
            Loading ....
        </Wrapper>
    )
}


export default Loading
