import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Feedback from './components/Menu/FeedBack/Feedback';
import Menu from './components/Menu/MenuContainer/Menu';
import NewsFeed from './components/Menu/NewsFeed/NewsFeed';
import StateProvider from './contextApli/StateProvider';

function App() {
  return (
    <div className="App">
     <StateProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}>
          <Route path='/' element={<NewsFeed/>}/>
          <Route path='feedback' element={<Feedback/>}/>
         <Route path='newsfeed' element={<NewsFeed/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
     </StateProvider>
    </div>
  );
}

export default App;
