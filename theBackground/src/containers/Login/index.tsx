import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import cssObj from './index.module.css'
import axios from 'axios'
export default function Login() {

    const navigate = useNavigate();
    const userName: any = useRef();
    const userPassWord: any = useRef();
    function userLogin() {
        if (userName.current.value !== 'admin11' || userPassWord.current.value !== 'admin11') {
            alert('此账号非管理者账号');
            return;
        } else {
            axios({
                method: 'POST',
                url: '/shot/food-user/sign',
                data: {
                    userName: userName.current.value,
                    password: userPassWord.current.value,
                }
            }).then(value => {
                if (value.status === 200) {
                    alert('登陆成功');
                    localStorage.setItem('userInfo', JSON.stringify(value.data));
                    navigate('/main');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <div className={cssObj.loginBody}>
            <div className={cssObj.title}>粤食粤香<span>管理后台</span></div>
            <div className={cssObj.loginFrom}>
                <div><label htmlFor="">用户名：<input type="text" ref={userName} /></label></div>
                <div><label htmlFor="">密码：<input type="password" ref={userPassWord} /></label></div>
                <div onClick={userLogin}>登陆</div>
            </div>
        </div>
    )
}
