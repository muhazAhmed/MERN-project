import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LadingPage from './screens/ladingPage/LadingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNotes from './screens/ladingPage/myNotes/MyNotes';

const App = () => 
<BrowserRouter>
<Header/>
<main className='App'>
  <Route exact path = '/' component={LadingPage} />
  <Route path = '/mynotes' component={MyNotes}/>
</main>
<Footer/>
</BrowserRouter>
 

export default App;
