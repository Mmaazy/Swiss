import React, { useState } from 'react';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Register = () => {
  // const [registerMain, setRegisterMain] = useState(1);
  const [register1, setRegister] = useState(1);

  const pageChange = () => {
    setRegister(2);
  };

  const pageChange2 = () => {
    setRegister(3);
  };

  const pageChange3 = () => {
    setRegister(4);
  };

  const pageChange4 = () => {
    setRegister(5);
  };

  return (
    <>
      <Container>
        <div className='d-flex justify-content-center my-5'>
          <img
            src='images/swiss_logo.png'
            alt='Logo'
            style={{ width: '96px', height: '74px' }}
          />
        </div>

        {/* {registerMain === 1 ? (<Register />) : registerMain === 2 ? <Register2 /> : registerMain === 3 ? <Register3 /> : registerMain === 4 ? <Register4 />} */}

        {register1 === 1 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <p className='steps'>STEP 1 OF 4</p>
                <h1 className='my-4 login'>Enter your name</h1>

                <Form>
                  <Form.Group className='mb-4' controlId='formFirstName'>
                    <Form.Control type='email' placeholder='First Name' />
                  </Form.Group>

                  <Form.Group className='mb-4' controlId='formLastName'>
                    <Form.Control type='password' placeholder='Last Name' />
                  </Form.Group>

                  <Button
                    variant='primary'
                    type='button'
                    className='login-btn d-block w-100'
                    onClick={pageChange}
                  >
                    NEXT
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : register1 === 2 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <p className='steps'>STEP 2 OF 4</p>
                <h1 className='my-4 login'>Enter your email</h1>

                <Form>
                  <Form.Group className='mb-4' controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Email Address' />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check
                      type='small-text'
                      label='Yes, I would like to recieve updates, special offers and other updates from SWISS.'
                      className='checkbox'
                    />
                  </Form.Group>

                  <Button
                    variant='primary'
                    type='button'
                    className='login-btn d-block w-100'
                    onClick={pageChange2}
                  >
                    NEXT
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : register1 === 3 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <h1 className='my-4 login'>Check your email inbox</h1>
                <p className='small-text'>
                  We need to verify your email address. We’ve sent you an email
                  to maaz@codexnow.com containing a 6-digit code which expires
                  in 15 minutes. Please enter it below..
                </p>

                <Form>
                  <Form.Control
                    size='lg'
                    type='text'
                    placeholder='000000'
                    className='mb-4 resend-code'
                  />

                  <Button
                    variant='primary'
                    type='button'
                    className='login-btn d-block w-100'
                    onClick={pageChange3}
                  >
                    CONTINUE
                  </Button>
                  <p className='small-text-resend my-4'>
                    Didnt recieve the email? Try checking your junk for spam
                    folders.
                  </p>

                  <Form.Group className='mb-4' controlId='formForgotPassword'>
                    <a href='#' className='email-resend'>
                      Forgot Password
                    </a>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        ) : register1 === 4 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <p className='steps'>STEP 3 OF 4</p>
                <h1 className='my-4 login'>Create a password</h1>

                <Form>
                  <Form.Group className='mb-4' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>

                  <p className='small-text'>
                    Use a minimum of 6 characters (case sensitive) with atleast
                    one number or special character.
                  </p>

                  <Button
                    variant='primary'
                    type='button'
                    className='login-btn d-block w-100 mt-5'
                    onClick={pageChange4}
                  >
                    NEXT
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : register1 === 5 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <p className='steps'>STEP 4 OF 4</p>
                <h1 className='my-4 login'>Start Learning Today</h1>

                <p className='small-text'>
                  The details below will be used as billing information for your
                  SWISS subscription.
                </p>

                <Form>
                  <Row>
                    <Col>
                      <div className='subscription'>
                        <div>
                          <p1>Monthly</p1>
                        </div>
                        <div>
                          <p1>USD 9.99</p1>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className='subscription'>
                        <div>
                          <p1>Yearly</p1>
                        </div>
                        <div>
                          <p1>USD 99.00</p1>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Form.Group className='mb-2' controlId='formFirstName'>
                    <Form.Label className='last-form-text'>
                      NAME ON CARD
                    </Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>

                  <Form.Group className='mb-2' controlId='formLastName'>
                    <Form.Label className='last-form-text'>
                      CARD NUMBER
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='1234 1234 1234 1234'
                    />
                  </Form.Group>

                  <Row className='mt-2'>
                    <Col>
                      <Form.Label className='last-form-text'>
                        EXPIRATION DATE
                      </Form.Label>
                      <Form.Control placeholder='First name' />
                    </Col>
                    <Col>
                      <Form.Label className='last-form-text'>
                        SECURITY CODE
                      </Form.Label>
                      <Form.Control placeholder='Last name' />
                    </Col>
                  </Row>

                  <Form.Group className='mb-4 mt-2' controlId='formLastName'>
                    <Form.Label className='last-form-text'>
                      POSTAL CODE
                    </Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>

                  <Button
                    variant='primary'
                    type='button'
                    className='login-btn d-block w-100'
                    onClick={pageChange4}
                  >
                    SUBSCRIBE
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : null}
      </Container>
    </>
  );
};

export default Register;
