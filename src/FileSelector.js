import './FileSelector.css';
import {useState} from "react";

export default function FileSelector(props) {

    const [csvFile, setCsvFile] = useState(null);

    const processCSV = (str, delim = ', ') => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n') + 1).split('\n');

        const newArray = rows.map(row => {
            const values = row.split(delim);
            return headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {});
        })
        showResult(newArray);
    }

    const showResult = (input) => {
        /*
             projectsLibrary = {
                projectID: [totaldays, empl1, empl2],
                projectID: [totaldays, empl1, empl2], ...
             }
        */
        let projectsLibrary = {};

        console.log(input);

        input.map(line => {
            // console.log(line);
            let currentProjId = `project${line.ProjectID}`;
            if (projectsLibrary[currentProjId] === undefined){ //on first meet with this project id
                projectsLibrary[currentProjId] = [0];
            }
            let currentEmployee = line.EmpID;
            let startingDate = new Date(line.DateFrom);
            let endDate = (line.DateTo === 'null' || line.DateTo === 'null\r') ? new Date() : new Date(line.DateTo);
            let daysWorkedOnProject = Math.ceil((endDate.getTime() - startingDate.getTime())/ (1000 * 3600 * 24));

            projectsLibrary[currentProjId][0] = projectsLibrary[currentProjId][0] + daysWorkedOnProject;
            projectsLibrary[currentProjId].push(currentEmployee);
        })

        console.log(projectsLibrary);

        let maxDaysWorked = {
            days: 0,
            projectName: '',
            empl1: '',
            empl2: ''
        };

        for (const [key, value] of Object.entries(projectsLibrary)){
            console.log(projectsLibrary[key])
            //if (days worked on project are more than the current max && there's more than one employee who has worked on the project
            if (maxDaysWorked.days < projectsLibrary[key][0] && projectsLibrary[key].length > 2){
                maxDaysWorked.days = projectsLibrary[key][0];
                maxDaysWorked.projectName = key;
                maxDaysWorked.empl1 = projectsLibrary[key][1];
                maxDaysWorked.empl2 = projectsLibrary[key][2];
            }
        }
        console.log(maxDaysWorked);

        props.onChange(maxDaysWorked);
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text);
        }

        reader.readAsText(file);
    }

    return (
        <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0]);
                }}
            >
            </input>
            <br/>
            <button onClick={(e) => {
                e.preventDefault();
                if (csvFile) {
                    submit()
                }
            }}>
                Show longest time
            </button>
        </form>
    );

}