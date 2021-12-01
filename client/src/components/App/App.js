import Tours from '../Tours/Tours';

// api
const url = 'https://course-api.com/react-tours-project';

function App() {

    return (
        <>
            <Tours data={url} />
        </>
    )
}

export default App;
