import { Header } from 'antd/lib/layout/layout';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <div>{children}</div>
    </>
  );
}
