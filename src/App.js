import './App.module.css';
import styles from './App.module.css';
import FileSelector from "./FileSelector";
import Results from "./Results";

function App() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.bodyContainer}>
            <h1 className={styles.headingSelectFile}>Please select file:</h1>
            <FileSelector/>
            <Results/>
        </div>
    </div>
  );
}

export default App;
