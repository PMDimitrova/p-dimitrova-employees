import './FileSelector.css';
import {useState} from "react";

export default function FileSelector() {

    const [csvFile, setCsvFile] = useState(null);
    const [csvArray, setCsvArray] = useState([]);

    const processCSV = (str, delim=', ') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            return headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {});
        })

        setCsvArray(newArray);
        showResult()

    }

    const showResult = () => {
        console.log(csvArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text);
        }

        reader.readAsText(file);
    }

    return(
        <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <button onClick={(e) => {
                e.preventDefault()
                if(csvFile)
                    {submit()}
            }}>
                Show longest time
            </button>
        </form>
    );

}