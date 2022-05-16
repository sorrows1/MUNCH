import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <Link to={'/'}>Root</Link>
      <a href='http://localhost:5000'>Test</a>
    </>
  );
};
