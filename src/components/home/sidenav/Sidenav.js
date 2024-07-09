import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Quick Bite Cafe</li>
        <li className="sidenavLi">LIBAAS</li>
        <li className="sidenavLi">RailFood</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+92 3121043893</li>
        <li className="sidenavLi">syedareeb445@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav