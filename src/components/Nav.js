import React, {useState} from 'react';

function Nav(props) {

  return (
  <div>
<ul>
    <li className="" onClick={()=>props.setCurrentPage(props.pages[0])} >About</li>
    <li onClick={()=>props.setCurrentPage(props.pages[1])}>Contact</li>
    <li onClick={()=>props.setCurrentPage(props.pages[2])}>Portfolio</li>
    </ul>
  </div>
  );
}

export default Nav;