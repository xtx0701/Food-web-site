import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import cssObj from './index.module.css'
import axios from 'axios';
export default function Detail() {

    const location: any = useLocation();
    const [releaseContent, setReleaseContent] = useState({ id: '', coloNum: '', ct: '', favNum: '', head: '', image: '', text: '', userId: '', userName: '' });
    useEffect(() => {
        const { rObj } = location.state;
        setReleaseContent(releaseContent => releaseContent = rObj);
        setNum(num => num = rObj['favNum']);
    }, [location.state, releaseContent])
    const [num, setNum] = useState(0);
    function good(id: string) {
        axios({
            method: 'POST',
            url: `/shot/food-activity/click?id=${id}`,
            headers: {
                "Accept": "*/*"
            }
        }).then(value => {
            setNum(num => num + 1);
        });
    }
    return (
        <div className={cssObj.contentBody} key={releaseContent['id']}>
            <div >
                <div><img src={releaseContent['head']} alt="" /></div>
                <div>
                    <div>{releaseContent['userName']}</div>
                    <div>2022-4-12</div>
                </div>
            </div>
            <div>
                {releaseContent['text']}
            </div>
            <div>
                <img src={releaseContent['image']} alt="" />
            </div>

            <div onClick={() => good(releaseContent['id'])}>
                点赞：{num}
            </div>
        </div>
    )
}
