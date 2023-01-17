import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';

import Homepage from './Components/Main/Homepage';
import Content from './Components/Content';

const pages = [
    {name: 'Kezdőlap', path: '/', element: <Homepage/>}
    /* {name: 'Rólam', path: '/rolam', element: <About/>},
     {name: 'Munkáim', path: '/munkaim', element: <Works/>},
     {name: 'Hobbijaim', path: '/hobbijaim', element: <Hobbies/>},
     {name: 'Kapcsolat',  path: '/kapcsolat', element: <Contact/>}*/
];


function App() {
    return (
        <Router>
            <div className="App">
                <div className="row">
                    <div className="container-fluid d-flex flex-column mh-100 min-vh-100">
                        <Content routes={pages}/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
