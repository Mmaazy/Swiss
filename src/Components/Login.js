import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const changeHandlerField = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container>
        <div className='d-flex justify-content-center mt-5'>
          <img
            src='images/swiss_logo.png'
            alt='Logo'
            style={{ width: '96px', height: '74px' }}
          />
        </div>

        <Row className='d-flex justify-content-center lg={12} md={12} sm={12}'>
          <Col className='form-adjustment'>
            <h1 className='my-4 login'>Login</h1>

            <Form>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Control
                  type='email'
                  placeholder='Email Address'
                  required
                  name='email'
                  value={data.email}
                  autoComplete='off'
                  onChange={(e) => changeHandlerField(e)}
                />
              </Form.Group>

              <Form.Group className='mb-4' controlId='formBasicPassword'>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={data.password}
                  onChange={(e) => changeHandlerField(e)}
                />
              </Form.Group>

              <Form.Group
                className='mb-4'
                controlId='formForgotPassword'
                required
              >
                <a href='#' className='forgot-password'>
                  Forgot Password
                </a>
              </Form.Group>

              <Button
                variant='primary'
                type='submit'
                className='login-btn d-block w-100'
                disabled={
                  data.email !== '' && data.password !== '' ? false : true
                }
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
