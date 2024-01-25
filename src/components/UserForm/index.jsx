import { Col, Form, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import Input from 'components/Input';
import Password from 'components/Password';
import Select from 'components/Select';
import { emailRegex } from 'constants';
import { useGetRoles, useGetStatus } from 'services/query/lookup';

const UserForm = ({ form, onFinish, type }) => {
  const { data: roles } = useGetRoles();
  const { data: status } = useGetStatus();
  const { t } = useTranslation();
  return (
    <Form form={form} name="user_form" layout="vertical" onFinish={onFinish}>
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <Input
            name="first_name"
            autoFocus={true}
            label="FirstName"
            placeholder="First Name"
            rules={[
              { required: true, message: t('users.error.firstName') },
              {
                pattern: new RegExp(/^[A-Za-z-' ].+$/),
                message: t('users.error.firstNameAlpha')
              }
            ]}
          />
        </Col>
        <Col span={24}>
          <Input
            name="last_name"
            label={t('users.form.lastName')}
            placeholder={t('users.form.lastName')}
            rules={[{ required: true, message: t('users.error.lastName') }]}
          />
        </Col>
        <Col span={24}>
          <Input
            name="email"
            label={t('users.form.email')}
            placeholder={t('users.form.email')}
            rules={[
              { required: true, message: t('users.error.email') },
              {
                pattern: new RegExp(emailRegex),
                message: t('users.error.email')
              }
            ]}
          />
        </Col>
        {type === 'create' ? (
          <Col span={24}>
            <Password
              name="password"
              label={t('users.form.password')}
              type="password"
              placeholder={t('users.form.password')}
              rules={[{ required: true, message: t('users.error.password') }]}
            />
          </Col>
        ) : null}
        {type !== 'create' ? (
          <Col span={24}>
            <Select
              name="role_id"
              label={t('users.form.role')}
              placeholder={t('users.form.role')}
              options={roles}
              rules={[{ required: true, message: t('users.error.role') }]}
            />
          </Col>
        ) : (
          ''
        )}
        {type !== 'create' ? (
          <Col span={24}>
            <Select
              name="status_id"
              label={t('users.form.status')}
              placeholder={t('users.form.status')}
              options={status}
              rules={[{ required: true, message: t('users.error.status') }]}
            />
          </Col>
        ) : (
          ''
        )}
      </Row>
      {/*
      {profile ? (
        <Button
          block={profile ? block : false}
          htmlType="submit"
          loading={updateEmpProfile.isLoading}
          style={{ marginLeft: !profile && '10px' }}
        >
          {t('buttons.update')}
        </Button>
      ) : null} */}
    </Form>
  );
};

export default UserForm;
