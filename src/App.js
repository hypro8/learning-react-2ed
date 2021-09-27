import './App.css';
// from Recipts_Book
import Menu from './Recipts_Book/recipes';
import { data } from './Recipts_Book/recipes';
// from StarRating
import StarRating00 from './StarRating00/StarRating00';
import StarRating01 from './StarRating00/StarRating01';
import StarRating02 from './StarRating00/StarRating02';

function App() {
    return (
        <div className='App'>
            {/* <Menu recipes={data} title='Delicious Recipes' /> */}
            {/* <StarRating00 /> */}
            {/* <StarRating01 /> */}
            <StarRating02 totalStars={10} />
        </div>
    );
}

export default App;
