import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddSuperDeveloper() {
    const superDeveloperName = useRef("");
    const qualification = useRef("");
    const expertise = useRef("");
    const imgUrl = useRef("");

    const navigate = useNavigate();
    function addDeveloperHandler() {
        var payload = {
            developerName: superDeveloperName.current.value,
            qualification: qualification.current.value,
            expertise: expertise.current.value,
            imageUrl: imgUrl.current.value,
        };

        axios
            .post("https://localhost:7073/SuperDeveloper", payload)
            .then((response) => {
                navigate("/");
            });
    }

    return (
        <><legend>Add A New Developer </legend>
            <form style={{ width: '30rem' }}>
                <Form.Group className="mb-3" controlId="formSuperDeveloperName">
                    <Form.Label>Developer Name</Form.Label>
                    <Form.Control type="text" ref={superDeveloperName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formQualification">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control type="text" ref={qualification} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formExpertise">
                    <Form.Label>Expertise</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={expertise} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImgUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" ref={imgUrl} />
                </Form.Group>
            </form>
            <Button variant="success" type="button" onClick={addDeveloperHandler}>
                ADD
            </Button>
        </>
    )
}

export default AddSuperDeveloper