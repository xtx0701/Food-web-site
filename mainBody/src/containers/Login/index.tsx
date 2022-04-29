import React from 'react'
import cssObj from './index.module.css'
import { Outlet } from 'react-router-dom'
export default function Login() {

    return (
        <div className={cssObj.body} >
            <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.T3Wdvm5Xww0q7Gqb_xJ_fAHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className={cssObj.logo} />
            <Outlet />
        </div >
    )
}
