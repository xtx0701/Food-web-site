import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import { NavLink, useRoutes, useNavigate } from 'react-router-dom';

import cssObj from './App.module.css'
import routes from './routes/index'


export default function App() {
  const element = useRoutes(routes);
  const navigate = useNavigate();

  const [tabbarLeft] = useState([
    { name: '首页', pathName: '/portal' },
    { name: '菜谱', pathName: '/recipe' },
    { name: '笔记', pathName: '/notes' },
    { name: '社区', pathName: '/subject' }
  ]);

  const [windowWidth, setwindowWidth] = useState(0)
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({ id: '', userName: '', head: '', type: '' });
  useEffect(() => {
    const Heigth = document.body.clientWidth;
    setwindowWidth(windowWidth => windowWidth = Heigth);
    const user: any = localStorage.getItem('userInfo');
    const userMessage = JSON.parse(user)
    if (user !== null) {
      setIsLogin(isLogin => isLogin = true);
      setUserInfo(userInfo => userInfo = userMessage);
    }
  }, [isLogin])

  function goLogin() {
    navigate('/login')
  }

  function goRelease() {
    if (isLogin) {
      navigate('/userrelease');
    } else {
      navigate('/login');
    }
  }

  function removeItem() {
    localStorage.removeItem('userInfo');
    alert('退出成功');
    setIsLogin(isLogin => isLogin = false);
  }

  function className({ isActive }: any) {
    return isActive ? cssObj.link_check : cssObj.link
  }

  return (
    <div>
      <div className={cssObj.navigation} style={{ width: windowWidth }}>
        {/* 导航栏左侧 */}
        <div className={cssObj.navigation_left}>
          <ul>
            {
              tabbarLeft.map((tabbarObj) => {
                return <li key={nanoid()}>
                  <NavLink to={`${tabbarObj.pathName}`}
                    className={className} >
                    {tabbarObj.name}
                  </NavLink>
                </li>
              })
            }
          </ul>
        </div>
        {/* 导航栏右侧 */}
        <div className={cssObj.navigation_right}>
          {
            isLogin ? <div className={cssObj.userMessage}><img src={userInfo['head']} alt="" />{userInfo['userName']} <span className={cssObj.out} onClick={removeItem}>退出</span></div> : <div className={cssObj.userLogin} onClick={goLogin}>登陆/注册</div>
          }
          <div className={cssObj.userRelease} onClick={goRelease} style={{ userSelect: 'none' }}>发布</div>
        </div>
      </div>
      <div className={cssObj.mainBody} style={{ width: windowWidth }}>
        <div className={cssObj.Header}>
          <div className={cssObj.logo}>
            粤食粤香
            <span style={{ fontSize: '15px', marginTop: '3.7rem' }}>
              美食网站
            </span>
          </div>

        </div>

      </div>
      {/* 展示内容 */}
      <div>
        {element}
      </div>
    </div >
  )
}
