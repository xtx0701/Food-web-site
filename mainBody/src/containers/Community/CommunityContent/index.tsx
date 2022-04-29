import React from 'react'
import { useNavigate } from 'react-router-dom'

import cssObj from './index.module.css'
export default function index() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    function goDetail() {
        navigate('/community/communitydetail');
    }

    return (
        <div>
            <h1>好物推荐</h1>
            <div className={cssObj.communityContent} onClick={() => goDetail()}>
                <div onClick={goDetail}>
                    <div><img src="https://i3.meishichina.com/attachment/giftshop/2022/03/14/2022031416472217893591.png?x-oss-process=style/c640ms" alt="" /></div>
                    <div>小熊伊万 BEAREWAN 多功能切刨丝器</div>
                    <div>￥74.00</div>
                </div>

            </div>
        </div>
    )
}
