import { Form, Button } from "react-bootstrap";
const FormExample = () => {
return (
<Form>
<Form.Group controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control
type="email" 
placeholder="Enter email"/>
</Form.Group>
<Button variant="primary" type="submit">
 	Submit
</Button>
</Form>
);
};
export default FormExample;