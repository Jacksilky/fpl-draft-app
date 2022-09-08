import './App.css';
import Header from './components/Header';
import ItemView from './components/ItemView';
import ResultsPage from './components/ResultsPage';
import SearchBar from './components/SearchBar';

const player =     {
      "title": "Everett Santos in excepteur",
      "description": "ex ut sint aute sit mollit nisi reprehenderit commodo aliquip nulla quis sit in fugiat commodo excepteur id sunt do enim aliqua laboris cillum ipsum dolor do irure veniam ea pariatur laboris consequat ipsum laborum esse consectetur nulla eiusmod adipisicing non aute aliqua ex adipisicing laboris voluptate aliquip nisi aliquip ea commodo ut in deserunt",
      "image": "https://preview.redd.it/jr7p22aq00g71.jpg?width=640&crop=smart&auto=webp&s=17c35afbe0abd70fb65ff55a89790c0cfc5a5e75",
      "tags": [
        "dolor",
        "exercitation",
        "nisi",
        "adipisicing"
      ]
    }
function App() {
  return (
    <div className="font-Poppins">
        <Header />
        <SearchBar/>
        {/* <SearchBar /> */}
        {/* <CustomAccordion /> */}
        {/* <ItemCard /> */}
        {/* <ResultsPage /> */}
        <ItemView player={player}/>
    </div>
  );
}

export default App;
