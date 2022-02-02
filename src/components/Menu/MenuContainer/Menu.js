import { Avatar } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import './menu.css'
import useData from '../../../hooks/useData';

const Menu = () => {
const{active,setActive} = useData();


   return (
      <div>
         <div className="container">
            <div id='dashboard' className="row">
               <div id='dash-menu' className="col-md-3 col-12">
                  <div className="left-menu text-start">
                     <ul className="deshboard-menu">
                              <li>
                                 <Link  id='profile' to="/">
                                 <Avatar  sx={{ width: 32, height: 32 }}> <img className='img-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkueqf2PfkXtUe_p_kd7j4SBwBEtacRFDmB7O5situL9zj1QSbuV9QWOx8wDqqEDPf5g&usqp=CAU' alt="" /> </Avatar>
                                 <div id='profile-text'>
                                    <h6>Profile</h6>
                                    <p>Here is your News</p>
                                 </div>
                                 </Link>
                              </li>
                              <li>
                                 <Link className='menu-container' to="newsfeed">
                                   <div>
                                   <h4> View Toggle</h4>
                                    <div className='d-flex icon-container'>
                                        <GridViewRoundedIcon onClick={()=>setActive('grid')} className={active==='grid'?'toggle-left':'toggle-item'}/>
                                        <ListIcon onClick={()=>setActive('menu')} className={active==='menu'?'toggle-right':'toggle-item'}/>
                                    </div>
                                   </div>
                                 </Link>
                              </li>
                              <li>
                                 <Link className='menu-feedback' to="feedback">
                                    <h4>Have a Feedback</h4>
                                    <h5>We are listning!</h5>
                                 </Link>
                              </li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-9 col-12 dash-item">
                  <Outlet />
               </div>
            </div>
         </div>
      </div >
   );
};

export default Menu;