import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import cssObj from './index.module.css'
export default function RecipeDetail() {

    const location: any = useLocation();
    // 获取展示信息
    const [foodDetail, setFoodDetail] = useState({ id: '', name: '', image: '', main: '', make: '', taste: '', vice: '' });
    useEffect(() => {
        const { dObj } = location.state;
        setFoodDetail(foodDetail => foodDetail = dObj);
    }, [location])
    const taste: string[] = foodDetail.taste.split(',')
    return (
        <div className={cssObj.contentBody}>
            <div className={cssObj.title}>{foodDetail['name']}</div>
            <div><img src={foodDetail['image']} alt="" /></div>
            <div>
                食材明细
            </div>
            <div>主料：{
                foodDetail['main'].split(',').map((content) => {
                    return <span key={nanoid()}>{content}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                })
            }</div>
            <div>
                辅料：{
                    foodDetail['vice'].split(',').map((content) => {
                        return <span key={nanoid()}>{content}(适量)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    })
                }
            </div>
            <div>
                <span><span style={{ fontSize: '3rem' }}>类型：</span>：{taste[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span><span style={{ fontSize: '3rem' }}>做法：</span>：{taste[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span><span style={{ fontSize: '3rem' }}>耗时：</span>：{taste[2]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span><span style={{ fontSize: '3rem' }}>难度：</span>：{taste[3]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className={cssObj.make}>
                <div> <span style={{ fontSize: '3rem' }}>做法：</span></div>
                <div>
                    {foodDetail['make']}
                </div>
            </div>
        </div >
    )
}
