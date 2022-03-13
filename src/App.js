import './App.module.css';
import styles from './App.module.css';
import FileSelector from "./FileSelector";
import Result from "./Result";
import {useState} from "react";

function App() {
    const [maxDaysData, displayMaxDaysData] = useState(null);

    const updateDays = (data) => {
        displayMaxDaysData(data);
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bodyContainer}>
                <h1 className={styles.headingSelectFile}>Please select file:</h1>
                <FileSelector onChange={updateDays} />
                {maxDaysData && <Result dataToDisplay={maxDaysData}/>}

            </div>
        </div>
    );
}

export default App;
