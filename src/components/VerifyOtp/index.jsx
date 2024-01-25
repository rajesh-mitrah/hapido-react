import { useState } from 'react';
import { Row, Col, Form } from 'antd';

import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';
import useTimer from 'customHooks/useTimer';
import { OTP_RESEND_TIMER_IN_SECS } from 'constants/forgot_password';
import { useGenerateOtp, useVerifyOtp } from 'services/query/auth';
import { handleKeyPress } from 'utils';

const VerifyOtp = ({ otpVerification = () => {}, emailId = '' }) => {
  const [otpValue, setOtpValue] = useState();

  const generateOtpMutation = useGenerateOtp();
  const verifyOtpMutation = useVerifyOtp();
  const { timeInSeconds, countDown, handleResetCounter } = useTimer(OTP_RESEND_TIMER_IN_SECS);

  const handleOtpValue = e => {
    setOtpValue(e.target.value);
  };

  const handleResendOtp = () => {
    generateOtpMutation.mutate({ email: emailId });
    handleResetCounter();
  };

  const onFinish = values => {
    verifyOtpMutation.mutate(
      {
        email: emailId,
        passwordResetCode: Number(values.Otp)
      },
      {
        onSuccess: () => {
          otpVerification(true);
        }
      }
    );
  };
  return (
    <>
      <Row>
        <Title level={3}>OTP Verification</Title>
      </Row>
      <Form name="otpVerification_form" layout="vertical" onFinish={onFinish}>
        <>
          <Col span={24}>
            <Input
              name="Otp"
              label="Enter your OTP value"
              placeholder="Enter OTP value"
              onChange={handleOtpValue}
              onKeyPress={e => handleKeyPress(e)}
              autoFocus={true}
              max={6}
            />
          </Col>
          <Row justify="space-between">
            <Col className="pt-1">
              Time Remaining : <span style={{ color: '#f50206' }}>{countDown}</span>
            </Col>
            <Col>
              <Button type="link" disabled={timeInSeconds > 0} onClick={handleResendOtp}>
                Resend OTP
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="mt-2">
              <Button block htmlType="submit" disabled={!otpValue}>
                Verify OTP
              </Button>
            </Col>
          </Row>
        </>
      </Form>
    </>
  );
};

export default VerifyOtp;
