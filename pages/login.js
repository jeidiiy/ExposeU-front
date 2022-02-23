import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { loginUser } from "../src/modules/user";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onFinish = async (inputs) => {
    const { email, password } = inputs;
    try {
      dispatch(loginUser({ email, password }));
      await router.push({
        pathname: '/',
      });
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
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요',
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>
        <Button htmlType="submit" type="primary">
          제출
        </Button>
      </Form>
    </>
  );
}
