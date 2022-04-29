import React, { useRef, useState } from 'react'
import cssObj from './index.module.css'
import axios from 'axios';
import ReactFileReader from "react-file-reader";
import { useNavigate } from 'react-router-dom';
export default function UserRegistered() {
    const navigate = useNavigate();
    const userName: any = useRef();
    const userPassWord: any = useRef();
    const [urlBase, setUrlBase] = useState('');
    const [isChoose, setIsChoose] = useState(false);
    function handleFiles(files: any) {
        setUrlBase(urlBase => urlBase = files.base64[0]);
        setIsChoose(isChoose => isChoose = true);
    }
    function userLogin() {
        if (userName.length < 6 || userName.length > 10) {
            alert('用户名要控制在6到10位置');
            return;
        } else if (userPassWord.length < 6 || userPassWord > 12) {
            alert('密码要控制在6到12位置');
            return;
        } else {
            axios({
                method: 'POST',
                url: '/shot/food-user/register',
                data: {
                    userName: userName.current.value,
                    password: userPassWord.current.value,
                    head: urlBase
                }
            }).then(value => {
                if (value.status === 200) {
                    alert('注册成功');
                    navigate('/login/userlogin')
                }
            })
        }
    }

    return (
        <div>
            <div className={cssObj.loginBody}>
                <div>
                    <label htmlFor="">用户名：<input type="text" name='userName' ref={userName} /></label>
                </div>
                <div>
                    <label htmlFor="">密码：<input type="password" name='userPassword' ref={userPassWord} /></label>
                </div>
                <div>
                    头像：
                    <ReactFileReader fileTypes={[".csv", ".zip"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                        <button className={cssObj.btn}>点击选择</button>
                        {
                            isChoose ? '已选择' : ''
                        }
                    </ReactFileReader>
                </div>
                <div>
                    <div onClick={userLogin}>注册</div>
                </div>
            </div>
        </div>
    )
}
