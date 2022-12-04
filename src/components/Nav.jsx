import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <div
      className={`${
        show &&
        'bg-black fixed top-0 p-5 w-full h-[70px] z-[1] ease-in transition-all duration-[0.5s] sm:h-[80px]'
      }`}
    >
      <div className="flex justify-between">
        <img
          onClick={() => navigate('/')}
          className="fixed left-0 top-[10px] w-[120px] pl-5 cursor-pointer sm:w-[150px]"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix__logo"
        />

        <img
          onClick={() => navigate('/profile')}
          className="fixed right-5 w-[40px] top-[15px] cursor-pointer sm:w-[50px]"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
