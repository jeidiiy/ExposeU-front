import Link from 'next/link';
import 'antd/dist/antd.css';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

export default function Navbar() {
  return (
    <>
      <nav className="menuBar">
        <div className="logo">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div className="menus">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
        </div>
      </nav>
      <style jsx>{`
        .menuBar {
          font-size: 24px;
          display: flex;
          width: 100%;
        }
        .menus {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
