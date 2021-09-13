import './App.css';
import kayLogo from './assets/images/kay-logo.png';

function App() {
    return (
        <div className="App">
            <div className="in-header">
                <img
                    alt="The Pokemon Inkay displayed in a red circle"
                    src={kayLogo}
                    className="kay-logo"
                />
                <h1>Inkana</h1>
            </div>
        </div>
    );
}

export default App;
