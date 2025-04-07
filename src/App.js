
import './App.css';
import ReduxPosts from "./components/ReduxPosts";
import ZustandPosts from "./components/ZustandPosts";
import QueryPosts from "./components/QueryPosts";


function App() {
  return (
    <div className="App">
      <ReduxPosts/>
       <ZustandPosts/>
       <QueryPosts/>
    </div>
  );
}

export default App;
