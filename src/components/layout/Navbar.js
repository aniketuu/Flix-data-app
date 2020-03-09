import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
          <a href='https://aniketuu.github.io/Flix-data-app' >
          <Tilt className="Tilt center" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <img className='Tilt-inner'
                    src='https://static.vecteezy.com/system/resources/previews/000/546/019/non_2x/vector-movie-theater-cinema-film-reel-unspooling.jpg' 
                    alt='Flix data logo'
                    style={{width:'100px',height:'auto'}}>

                    </img>
              </Tilt>
          </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <a href='http://www.omdbapi.com/' target='_blank'  rel="noopener noreferrer" >
              <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 88.4333, width: 200 }} >
                <img className='Tilt-inner '
                    src='https://code.4noobz.net/wp-content/uploads/2018/10/OMDB-API.png' 
                    alt='OMDB logo'
                    style={{width:'200px',height:'auto'}}>

                    </img>
              </Tilt>
              </a>
            </li>
            <li className="nav-item d-inline-block mr-4">
              <a href='https://reactjs.org/' target='_blank'  rel="noopener noreferrer" >
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 141.333, width: 200 }} >
                <img className='Tilt-inner'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' 
                    alt='React Logo'
                    style={{width:'200px',height:'auto'}}
                
                >

                </img>
              </Tilt>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;