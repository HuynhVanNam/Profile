import Sidebar from './Components/Sidebar/Sidebar';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';
import styles from'./App.scss';
import Layout from './Components/Layout/Layout';
import useCursorGlow from './Hooks/useCursorGlow';
import useSmoothScroll from './Hooks/useSmoothScroll';

function App() {
  useCursorGlow();
  useSmoothScroll();
  return (
   
    <>
    <div id="cursor-glow" className="cursor-glow"></div>
    
      <div className="container">
        <Sidebar />
        <Layout>
       <main className={`content ${styles.content}`}>
          <About />
          <Education />
          <Skills />
          <Projects />
          <Featured />
        </main>
        </Layout>
      </div>
     
      <Footer />
    </>
    
  );
}

export default App;
