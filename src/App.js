import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <HomeScreen/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
