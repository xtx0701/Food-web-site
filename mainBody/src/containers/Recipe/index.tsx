// 菜谱
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
export default function Recipe() {

    // 定义变量保存窗口宽度
    const [windowWidth, setwindowWidth] = useState(0);
    // 每次组件挂载完毕自动获取宽度调整
    useEffect(() => {
        const Heigth: number = document.body.clientWidth;
        setwindowWidth(windowWidth => windowWidth = Heigth);
    }, [])
    return (
        <div style={{ width: windowWidth }}>
            <Outlet />
        </div>
    )
}
