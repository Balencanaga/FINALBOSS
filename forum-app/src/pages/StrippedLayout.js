import { Outlet, Link } from 'react-router-dom';

const StrippedLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default StrippedLayout;
