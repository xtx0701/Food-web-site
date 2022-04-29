import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { NavLink, Outlet } from 'react-router-dom';
import cssObj from './index.module.css'
export default function Main() {

    const [userImage, setUserImage] = useState('');
    const [time, setTime] = useState('');
    const type = [
        { id: nanoid(), name: '管理菜品', path: 'dishes' },
        { id: nanoid(), name: '管理社区', path: 'community' },
        { id: nanoid(), name: '管理笔记', path: 'notes' },
    ]
    useEffect(() => {
        const content: any = localStorage.getItem('userInfo');
        const url: any = JSON.parse(content);
        setUserImage(userImage => userImage = url['head']);
        setInterval(() => {
            const time = new Date();
            //console.log(time);
            const year: number = time.getFullYear();
            const mon: number = time.getMonth() + 1;
            const day: number = time.getDate();
            const h: number = time.getHours();
            const m: number = time.getMinutes();
            const s: number = time.getSeconds();

            // eslint-disable-next-line no-useless-concat
            const times: string = (year + "年" + totwo(mon) + "月" + totwo(day) + "日" + totwo(h) + ":" + totwo(m) + ":" + totwo(s));
            setTime(time => time = times);
        }, 1000)
    }, [])

    function totwo(n: number) {
        if (n <= 9) {
            return n = parseInt("0" + n);
        }
        else {
            return n = parseInt("" + n);
        }
    }

    function className({ isActive }: any) {
        return isActive ? cssObj.choose : cssObj.nochoose
    }

    return (
        <div className={cssObj.mainBody}>
            <div className={cssObj.mainHeader}>
                <div>
                    <div><img src={userImage} alt="" /></div>
                </div>
                <div>
                    <div>{time}</div>
                </div>
            </div>

            <div className={cssObj.mainContent}>
                <div className={cssObj.left}>
                    {
                        type.map((t) => {
                            return (
                                <NavLink to={t.path} className={className}><div key={t.id}>{t.name}</div></NavLink>
                            );
                        })
                    }


                </div>
                <div className={cssObj.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
