import Bio from './Bio.js';
import Mascot from './Mascot.js';
import Projects from './Projects.js';
import AnimatedCursor from "react-animated-cursor";
import './App.css';

function App() {
  function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }
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
      {/* <div className="scroll-down-arrow" style={{
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: '1rem',
        color: '#005A43',
        cursor: 'pointer',
        fontSize: '3rem',
      }} onClick={() => {
        scrollToProjects();
        setShowProjects(true);
      }}>
        &darr;
      </div> */}
      <Projects />
    </div>
  );
}

export default App;
