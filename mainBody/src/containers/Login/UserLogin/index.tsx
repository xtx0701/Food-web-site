import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cssObj from './index.module.css'
export default function UserLogin() {
    const navigate = useNavigate();
    function goRegistered() {
        navigate('/login/userregistered');
    }
    const userName: any = useRef();
    const userPassWord: any = useRef();
    function userLogin() {
        if (userName.current.value.length < 6 || userName.current.value.length > 10) {
            alert('用户名要控制在6到10位置');
            return;
        } else if (userPassWord.current.value.length < 6 || userPassWord.current.value.length > 12) {
            alert('密码要控制在6到12位置');
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
                    navigate('/portal');
                }
            })
        }
    }
    return (
        <div><form action="">
            <div className={cssObj.loginBody}>
                <div>
                    <label htmlFor="">用户名：<input type="text" name='userName' ref={userName} /></label>
                </div>
                <div>
                    <label htmlFor="">密码：<input type="text" name='userPassword' ref={userPassWord} /></label>
                </div>
                <div>
                    <div onClick={userLogin}>登陆</div>
                    <div onClick={goRegistered}>注册</div>
                </div>
            </div>
        </form ></div>
    )
}
