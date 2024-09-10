import { PlantList } from './plants/PlantList';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header></Header>
      <PlantList />
    </main>
  );
}

export default App;
