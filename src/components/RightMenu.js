import { Menu } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../modules/user';

export default function RightMenu() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logoutUser());

  return (
    <Menu mode="horizontal">
      {!user ? (
        <Menu.Item>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </Menu.Item>
      ) : (
        <Menu.Item onClick={onLogout}>
          <span>로그아웃</span>
        </Menu.Item>
      )}
      <Menu.Item>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
