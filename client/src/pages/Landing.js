import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby echo park food truck street art tousled artisan man braid
              actually migas jianbing. Williamsburg semiotics humblebrag,
              skateboard keytar sus direct trade hot chicken blog squid. Brunch
              blog poutine locavore readymade echo park PBR&B. Shaman flannel
              crucifix messenger bag iceland wolf organic.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
