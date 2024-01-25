import { useState } from 'react';
import { Col, Form, Row } from 'antd';
import { Link as NavLink, Navigate } from 'react-router-dom';

import Link from 'components/Link';
import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import AuthLayout from 'components/Auth';
import Password from 'components/Password';
import { LOGIN_PATH } from 'constants/route';
import { useRegister } from 'services/query/auth';

import './index.scss';
import { emailRegex } from 'constants';

const SignUp = () => {
  const [initialFormValues, setInitialFormValues] = useState({});

  const registerMutation = useRegister();

  const onFinish = values => {
    setInitialFormValues(values);
    const userDetails = {
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name
    };
    registerMutation.mutateAsync(userDetails);
  };

  const checkboxValidator = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Please accept the terms and conditions!'));
    }
    return Promise.resolve();
  };

  return (
    <AuthLayout>
      {registerMutation.isSuccess ? (
        <Navigate to="/login" />
      ) : (
        <div className="sign-up-screen">
          <Row>
            <Col span={24}>
              <Title level={3} className="title">
                Sign Up
              </Title>
            </Col>
          </Row>
          <Form
            name="signUp_form"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={true}
            className="form"
            initialValues={{ country: 'IN +91', ...initialFormValues }}
          >
            <Row gutter={[16, 0]}>
              <Col span={12}>
                <Input
                  name="first_name"
                  autoFocus={true}
                  label="FirstName"
                  placeholder="FirstName"
                  rules={[
                    { required: true, message: 'Please enter your First name!' },
                    {
                      pattern: new RegExp(/^[A-Za-z-' ].+$/),
                      message: 'Please enter a First name start with alphabets'
                    }
                  ]}
                />
              </Col>
              <Col span={12}>
                <Input
                  name="last_name"
                  label="LastName"
                  placeholder="LastName"
                  rules={[{ required: true, message: 'Please enter your Last name!' }]}
                />
              </Col>
              <Col span={24}>
                <Input
                  name="email"
                  label="Email"
                  placeholder="Email"
                  rules={[
                    { required: true, message: 'Please enter your Email!' },
                    {
                      pattern: new RegExp(emailRegex),
                      message: 'Please enter Email'
                    }
                  ]}
                  className={'mb-0'}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Password
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  rules={[{ required: true, message: 'Please enter your Password!' }]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  min={8}
                  rules={[
                    { required: true, message: 'Please enter your Confirm Password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (value && getFieldValue('password') !== value) {
                          return Promise.reject('The new password that you entered do not match');
                        }
                        return Promise.resolve();
                      }
                    })
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CheckBox
                  name="acceptTerms"
                  label={
                    <span>
                      I have read the <Link href="https://termsandconditions">Terms and conditions</Link>
                    </span>
                  }
                  rules={[{ validator: checkboxValidator }]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button loading={registerMutation.isLoading} block htmlType="submit">
                  Sign Up
                </Button>
              </Col>
            </Row>
            <Row justify="center" align={'center'} className="mb-2 align-items-baseline">
              Already have an account? &nbsp;
              <NavLink to={LOGIN_PATH} className="remove-border">
                {' '}
                Login{' '}
              </NavLink>
            </Row>
          </Form>
        </div>
      )}
    </AuthLayout>
  );
};

export default SignUp;
