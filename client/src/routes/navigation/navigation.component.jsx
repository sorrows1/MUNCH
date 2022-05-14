import { Link } from 'react-router-dom';

export const Navigation = () => {
  const redirect = () => {
    window.location.href = 'http://localhost:5000/test';
  };
  return (
    <>
      <Link to={'/'}>Root</Link>
      <div onClick={redirect}>Test</div>
    </>
  );
};
