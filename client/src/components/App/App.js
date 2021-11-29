import Loading from '../Loading/Loading';
import Tours from '../Tours/Tours';

// api
const url = 'https://course-api.com/react-tours-project';

function App() {


          return (
                    <div className="wrapper">
                              <Loading />

                              <Tours data={url} />
                    </div>
          )
}

export default App;
