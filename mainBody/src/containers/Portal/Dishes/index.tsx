import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import cssObj from './index.module.css'

export default function Dishes() {
    // 定义变量保存窗口宽度
    const [windowWidth, setwindowWidth] = useState(0);
    const [disherContent, setDisherContent] = useState([]);
    // 每次组件挂载完毕自动获取宽度调整
    const navigate = useNavigate();
    useEffect(() => {
        const width: number = document.body.clientWidth;
        setwindowWidth(windowWidth => windowWidth = width);
        axios({
            method: 'GET',
            headers: {
                "Accept": "*/*"
            },
            url: '/shot/food-type/queryFood'
        }).then(value => {
            setDisherContent(disherContent => disherContent = value.data)
        })
    }, [])

    function goDetail() {
        navigate('/recipe');
    }
    return (
        <div style={{ width: windowWidth }} onClick={goDetail}>
            <h1>美食推荐</h1>
            <div className={cssObj.dishesContent}>
                {
                    disherContent.map((dObj) => {
                        return <div className={cssObj.contentPart} key={dObj['id']}>
                            <div><img src={dObj['image']} alt="" /></div>
                            <div>{dObj['name']}</div>
                            <div>小旭</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
