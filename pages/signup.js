import { Button, Form, Input, message, Upload } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { signup } from "../src/api/user";

export default function SignUp() {
  const onChange = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadProps = {
    name: 'file',
    accept: 'image/png, image/jpeg',
    maxCount: 1,
    showUploadList: false,
    onChange,
  };

  const onFinish = async (inputs) => {
    const { email, password, name, image } = inputs;
    try {
      const response = await signup(email, password, name, image);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: '이름을 입력해주세요' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item name="avatar">
          <Upload {...uploadProps}>
            <Button>
              <Icon type="upload"/>
              Click to upload
            </Button>
          </Upload>
        </Form.Item>
        <Button htmlType="submit" type="primary">
          제출
        </Button>
      </Form>
    </>
  );
}
