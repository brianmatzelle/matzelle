import Bio from './Bio.js';
import Mascot from './Mascot.js';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div style={{
      backgroundColor: '#1A1A1A',
      // minHeight: '100vh',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }}>
      <RemoveScrollBar />
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='0, 93, 64'
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
      />
      <div className='name-and-mascot' style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}>
        <Bio />
        <Mascot />
      </div>
    </div>
  );
}

export default App;
