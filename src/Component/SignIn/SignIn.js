import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignIn.css';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_Uri = location.state?.from || '/home';

    // handle Google SignIn
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_Uri);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="signin">
            <div className="w-50">
                {/* Sing In form */}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
                <h5 className="text-center mt-5">Sign In </h5>
                <Button onClick={handleGoogleSignIn} className="text-center" variant="secondary" type="submit">Google Sign In</Button>
            </div>
        </div>
    );
};

export default SignIn;