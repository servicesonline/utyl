import React from 'react';

const Header = () => {
/* Toggle sidebar  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    
    const openNav = () => { document.getElementById("mySidepanel").style.width = "250px"; }

    return (
        <header>
           <div className="head-top">
              <div className="container-fluid">
                 <div className="row">
                    <div className="col-sm-3">
                       <div className="logo">
                          <a href="index.html"><img src="images/logo_footer.png" width="85px" /></a>
                       </div>
                    </div>
                    <div className="col-sm-9">
                       <ul className="email text_align_right">
                          <li className="d_none"> <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>Location</a></li>
                          <li className="d_none"> <a href="#"><i className="fa fa-phone" aria-hidden="true"></i>+71  1234567890</a></li>
                          <li className="d_none"> <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>demo@gmail.com</a></li>
                          <li className="d_none"> <a href="#">Login <i className="fa fa-user" aria-hidden="true"></i></a> </li>
                          <li className="d_none"><i className="fa fa-search" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                          <li> <button className="openbtn" onClick={() => openNav()}><img src="images/menu_btn.png" /></button></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </header>
    );
};

export default Header;