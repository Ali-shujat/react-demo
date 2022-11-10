import { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateDeveloper() {
    const superDeveloperName = useRef("");
    const qualification = useRef("");
    const expertise = useRef("");
    const imgUrl = useRef("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://localhost:7073/SuperDeveloper/${id}`).then((response) => {
            console.log(response);
            superDeveloperName.current.value = response.data.developerName;
            qualification.current.value = response.data.qualification;
            expertise.current.value = response.data.expertise;
            imgUrl.current.value = response.data.imageUrl;
        });
    }, []);
    function updateDeveloperHandler() {
        var payload = {
            developerName: superDeveloperName.current.value,
            qualification: qualification.current.value,
            expertise: expertise.current.value,
            imageUrl: imgUrl.current.value,
            id: id,
        };

        axios
            .post("https://localhost:7073/SuperDeveloper", payload)
            .then((response) => {
                navigate("/");
            });
    }


    return (
        <>
            <legend>Update Developer</legend>
            <form>
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
            <Button variant="info" type="button" onClick={updateDeveloperHandler}>
                Submit
            </Button>
        </>
    )
}

export default UpdateDeveloper
