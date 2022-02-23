import { Menu } from 'antd';
import Link from 'next/link';

export default function LeftMenu() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
