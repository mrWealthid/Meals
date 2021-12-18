import Home from './component/Home';
// import About from './component/views/About';
// import Signup from './component/Signup';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App min-h-screen justify-center py-8 items-center flex'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:id' component={Home} />
        {/* <Route path='/About' component={About} />
        <Route path='/Signup' component={Signup} /> */}
      </Switch>
    </div>
  );
}

export default App;
