import './App.css';
// from Recipts_Book
import Menu from './Recipts_Book/recipes';
import { data } from './Recipts_Book/recipes';
// from 

function App() {
    return (
        <div className='App'>
            <Menu recipes={data} title='Delicious Recipes' />
        </div>
    );
}

export default App;
