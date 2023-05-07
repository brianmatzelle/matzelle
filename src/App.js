import './App.css';
import Name from './Name.js';

function App() {
  return (
    <div style={{
      backgroundColor: '#1A1A1A',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }}>
      <Name />
    </div>
  );
}

export default App;
