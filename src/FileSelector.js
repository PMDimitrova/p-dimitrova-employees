import {Button, Form} from "react-bootstrap";
import './FileSelector.css';

export default function FileSelector() {
    return (
        <>
            <Form className="formWrapper">
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className="caption">Please select file with data for the employees working days:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button className="proceedBtn" variant="light">Proceed</Button>
            </Form>
        </>
    )
}