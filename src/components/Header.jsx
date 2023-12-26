import React from 'react';
import { images } from '../constants';
import { Link,useLocation  } from 'react-router-dom';
import useAuth from './useAuth';

export const Header = () => {
  const headerH = {
    height: '10vh'
  }
  const {isAuth, handleLogout} = useAuth();

  const directories = ['blogs','pages','pricing','faq']
  const li_prop = "text-sm px-4 py-1  rounded-full bg-white text-black"
  const location = useLocation();
  //const navigate = useNavigate();

  let str = "";
  const display_nav = directories.map((path) => {
    str = path.charAt(0).toUpperCase() + path.slice(1);
    return <li key={path} className={`${location.pathname === `/${path}` ? `${li_prop}` : 'text-white'}`}>

      <Link to = {isAuth ? path : "/signin"} >{str}</Link>
    </li>
    }
  );
  
 
  

  return (
    <div style={headerH}>

      <section className='bg-yellow-500  rounded-full my-4 mx-2'>
        <header className="container mx-auto px-5 flex justify-between py-2 items-center">
          <div>
            <img src={images.Logo} alt='logo' className='object-contain h-8 w-8'/>
          </div>
          <div className='flex gap-5 items-center text-white'>
            <ul className='flex gap-x-5'>
              <li className={`${useLocation().pathname === '/' ? `${li_prop}` : 'text-white'}`}>
                <Link to = '/'>Home</Link>
              </li>
              {display_nav}

            </ul>
            { isAuth ?
              <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1 rounded-full' onClick={handleLogout}>
                Log Out
              </button>
              :
              <Link to = '/signin'>

                <button className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1  rounded-full'>
                  Sign In
                </button>
              
              </Link> 
              
            }
          </div>
        </header>
      </section>

    </div>
  );
}
