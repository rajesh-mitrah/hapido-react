import { Link as NavLink, Navigate } from 'react-router-dom';
import { Col, Form, Row } from 'antd';

import Button from 'components/Button';
import Input from 'components/Input';
import Title from 'components/Title';
import AuthLayout from 'components/Auth';

import { SIGNUP_PATH } from 'constants/route';

import { useLoginUser } from 'services/query/auth';

import './index.scss';

const Login = () => {
  const loginMutation = useLoginUser();

  const onFinish = values => {
    loginMutation.mutate({
      email: values.email,
      password: values.password
    });
  };

  return (
    <AuthLayout>
      {loginMutation?.isSuccess && !loginMutation.data?.data?.token ? (
        <Navigate to="/company" />
      ) : (
        <>
          <Row justify="space-between">
            <Title level={3}>Login</Title>
          </Row>
          <Form name="login_form" layout="vertical" onFinish={onFinish}>
            <Row>
              <Col span={24}>
                <Input
                  name="email"
                  autoFocus={true}
                  placeholder="Enter Email address"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your Email!' },
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!'
                    }
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Input name="password" label="Password" type="password" placeholder="Enter Password" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button block htmlType="submit" loading={loginMutation.isLoading}>
                  Login
                </Button>
              </Col>
            </Row>
            <Row justify="center" align={'center'} className="mb-2 align-items-baseline">
              Don't have an account?{' '}
              <NavLink to={SIGNUP_PATH} className="remove-border">
                Sign Up
              </NavLink>
            </Row>
          </Form>
        </>
      )}
    </AuthLayout>
  );
};

export default Login;
