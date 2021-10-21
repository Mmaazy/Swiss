import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { AiFillCreditCard } from 'react-icons/ai';

const Register = () => {
  const [register1, setRegister] = useState(1);
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    code: '',
    password: '',
  });

  const changeHandlerField = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const stepChanged1 = localStorage.getItem('step1');
    const stepChanged2 = localStorage.getItem('step2');
    const stepChanged3 = localStorage.getItem('step3');
    const stepChanged4 = localStorage.getItem('step4');

    if (stepChanged1 === '1') {
      setRegister(2);
    }
    if (stepChanged2 === '1') {
      setRegister(3);
    }
    if (stepChanged3 === '1') {
      setRegister(4);
    }
    if (stepChanged4 === '1') {
      setRegister(5);
    }
  }, []);

  const pageChange = () => {
    localStorage.setItem('step1', '1');
    setRegister(2);
  };

  const pageChange2 = () => {
    localStorage.setItem('step2', '1');
    localStorage.removeItem('step1');
    setRegister(3);
  };

  const pageChange3 = () => {
    localStorage.setItem('step3', '1');
    localStorage.removeItem('step2');
    setRegister(4);
  };

  const pageChange4 = () => {
    localStorage.setItem('step4', '1');
    localStorage.removeItem('step3');
    setRegister(5);
  };

  const changeHandlerBack = () => {
    localStorage.removeItem('step1');
    setRegister(1);
  };

  const changeHandlerBack1 = () => {
    localStorage.removeItem('step2');
    setRegister(2);
    localStorage.setItem('step1', '1');
  };

  const changeHandlerBack2 = () => {
    localStorage.removeItem('step3');
    setRegister(3);
    localStorage.setItem('step2', '1');
  };

  const changeHandlerBack3 = () => {
    localStorage.removeItem('step4');
    setRegister(4);
    localStorage.setItem('step3', '1');
  };

  return (
    <>
      <Container fluid>
        <div>
          <a href='/' className='top-btn'>
            Login
          </a>
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <img src='images/swiss_logo.png' alt='Logo' className='main-logo' />
        </div>

        {/* STEP 1 */}

        {register1 === 1 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <p className=' mt-5 steps'>STEP 1 OF 4</p>
                <h1 className='mb-4 login'>Enter your name</h1>

                <Form>
                  <Form.Group className='mb-4' controlId='formFirstName'>
                    <Form.Control
                      type='text'
                      placeholder='First Name'
                      autoComplete='off'
                      value={registerData.firstName}
                      name='firstName'
                      onChange={(e) => changeHandlerField(e)}
                    />
                  </Form.Group>

                  <Form.Group className='mb-5' controlId='formLastName'>
                    <Form.Control
                      type='text'
                      placeholder='Last Name'
                      autoComplete='off'
                      value={registerData.lastName}
                      name='lastName'
                      onChange={(e) => changeHandlerField(e)}
                    />
                  </Form.Group>

                  <Button
                    variant='primary'
                    type='button'
                    className='login-btn d-block w-100'
                    onClick={pageChange}
                    disabled={
                      registerData.firstName !== '' &&
                      registerData.lastName !== ''
                        ? false
                        : true
                    }
                  >
                    NEXT
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : // STEP 2
        register1 === 2 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <div className='mb-5'>
                  <IoArrowBackCircleOutline
                    style={{ color: 'white', fontSize: '25px' }}
                    onClick={changeHandlerBack}
                  />
                </div>
                <p className='steps'>STEP 2 OF 4</p>
                <h1 className='mb-4 login'>Enter your email</h1>

                <Form>
                  <Form.Group className='mb-4' controlId='formBasicEmail'>
                    <Form.Control
                      type='email'
                      placeholder='Email Address'
                      required
                      name='email'
                      value={registerData.email}
                      autoComplete='off'
                      onChange={(e) => changeHandlerField(e)}
                    />
                  </Form.Group>

                  <Form.Group
                    className='mt-2 mb-4'
                    controlId='formBasicCheckbox'
                  >
                    <Form.Check
                      type='checkbox'
                      label='Yes, I would like to recieve updates, special offers and other updates from SWISS.'
                      className='checkbox'
                    />
                  </Form.Group>

                  <Button
                    variant='primary'
                    type='submit'
                    className='login-btn d-block w-100'
                    onClick={pageChange2}
                    disabled={registerData.email !== '' ? false : true}
                  >
                    NEXT
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : // RECIEVE CODE STEP
        register1 === 3 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <div className='mb-4'>
                  <IoArrowBackCircleOutline
                    style={{ color: 'white', fontSize: '25px' }}
                    onClick={changeHandlerBack1}
                  />
                </div>
                <h1 className='my-4 login'>Check your email inbox</h1>
                <p className='small-text'>
                  We need to verify your email address. We’ve sent you an email
                  to maaz@codexnow.com containing a 6-digit code which expires
                  in 15 minutes. Please enter it below..
                </p>

                <Form>
                  <Form.Control
                    size='lg'
                    type='number'
                    name='code'
                    placeholder='000000'
                    className='mb-4 resend-code'
                    onChange={(e) => changeHandlerField(e)}
                  />

                  <Button
                    variant='primary'
                    type='button'
                    className='login-btn d-block w-100'
                    onClick={pageChange3}
                    disabled={registerData.code !== '' ? false : true}
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
        ) : // STEP 3
        register1 === 4 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <div className='mb-5'>
                  <IoArrowBackCircleOutline
                    style={{ color: 'white', fontSize: '25px' }}
                    onClick={changeHandlerBack2}
                  />
                </div>
                <p className='steps'>STEP 3 OF 4</p>
                <h1 className='mb-3 login'>Create a password</h1>

                <Form>
                  <Form.Group className='mb-4' controlId='formBasicPassword'>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      name='password'
                      onChange={(e) => changeHandlerField(e)}
                    />
                  </Form.Group>

                  <p className='small-text'>
                    Use a minimum of 6 characters (case sensitive) with atleast
                    one number or special character.
                  </p>

                  <Button
                    variant='primary'
                    type='submit'
                    className='login-btn d-block w-100 mt-5'
                    onClick={pageChange4}
                    disabled={registerData.password !== '' ? false : true}
                  >
                    NEXT
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        ) : // STEP 4
        register1 === 5 ? (
          <div>
            <Row className='d-flex justify-content-center'>
              <Col className='form-adjustment'>
                <div className='mb-4'>
                  <IoArrowBackCircleOutline
                    style={{ color: 'white', fontSize: '25px' }}
                    onClick={changeHandlerBack3}
                  />
                </div>
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
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault1'
                          />
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
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='flexRadioDefault1'
                          />
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
                      placeholder=' 1234 1234 1234 1234'
                    />
                  </Form.Group>

                  <Row className='mt-2'>
                    <Col>
                      <Form.Label className='last-form-text'>
                        EXPIRATION DATE
                      </Form.Label>
                      <Form.Control placeholder='' />
                    </Col>
                    <Col>
                      <Form.Label className='last-form-text'>
                        SECURITY CODE
                      </Form.Label>
                      <Form.Control placeholder='' />
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
