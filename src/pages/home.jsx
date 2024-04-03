/**
 * Profile 组件
 * @author liqiu
 */
import { Button, Form, Input, Space, Flex } from 'antd';
import { useState } from 'react';
import { getDataFromLocalstorage, setDataFromLocalstorage, userKey, mockData} from '../utils';

export default () => {
  const [form] = Form.useForm();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const initValue = getDataFromLocalstorage(userKey) || mockData;

  const change = () => {
    setIsReadOnly(!isReadOnly);
  }

  const save = () => {
    const data = form.getFieldsValue();
    setDataFromLocalstorage(userKey, data);
    change();
  };

  return (
    <div className="main">
      <Form
        form={form}
        name="basic"
        disabled={isReadOnly}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        initialValues={initValue}
      >
        <Form.Item
          label="name"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="phone"
          name="phone"
        >
          <Input />
        </Form.Item>
      </Form>
      
      <Space className="actions">
        <Button
          type="primary"
          onClick={change}
        >
          编辑
        </Button>
        <Button
          disabled={isReadOnly}
          onClick={save}
        >
          保存
        </Button>
      </Space>
      
    </div>
  );
};
