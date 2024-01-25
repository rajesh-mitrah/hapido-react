import { useEffect } from 'react';
import { Col, Row, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';
import Title from 'components/Title';
import { useVerifyUser } from 'services/query/auth';
import { LOGIN_PATH } from 'constants/route';

const VerifyUser = ({ email, onBackToRegister, btnTitle = '', login = false }) => {
  const verifyMutation = useVerifyUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (verifyMutation.isSuccess) {
      if (login) {
        onBackToRegister();
      } else {
        navigate(LOGIN_PATH);
      }
    }
  }, [verifyMutation.isSuccess, onBackToRegister, navigate, login]);

  const onFinish = value => {
    verifyMutation.mutate({
      email,
      userVerificationCode: Number(value.verificationCode)
    });
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3}>Verify Your Email</Title>
        </Col>
      </Row>
      <Form name="verifyUser_form" layout="vertical" onFinish={onFinish} requiredMark={true}>
        <Row>
          <Col span={24}>
            <Input
              name="verificationCode"
              label="Verification Code"
              placeholder="Enter the code you received in your email"
              autoFocus={true}
              rules={[{ required: true, message: 'Please enter the verification code!' }]}
              onKeyPress={e => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button loading={verifyMutation.isLoading} block htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="link" onClick={onBackToRegister}>
              {btnTitle}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default VerifyUser;
