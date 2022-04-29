import React, { useEffect, useState } from 'react'
import cssObj from './index.module.css'
import axios from 'axios'
import { nanoid } from 'nanoid';
export default function ManagementCommunity() {

    const [message, setMessage] = useState([]);
    useEffect(() => {
        axios({
            method: 'POST',
            url: '/shot/food-activity/queryShot',
            headers: {
                "Accept": "*/*"
            }, data: {
                "key": "",
                "pageNum": 1,
                "pageSize": 1,
                "type": 1
            }
        }).then(value => {
            console.log(value.data.list);
            setMessage(message => message = value.data.list);
        })
    }, [])

    function deleteMessage(id: string) {
        axios({
            method: 'POST',
            url: `/shot/food-activity/delete?id=${id}`,
            headers: {
                "Accept": "*/*"
            }
        }).then(value => {
            console.log(value);
            if (value.status === 200) {
                alert("成功");
                axios({
                    method: 'POST',
                    url: '/shot/food-activity/queryShot',
                    headers: {
                        "Accept": "*/*"
                    }, data: {
                        "key": "",
                        "pageNum": 1,
                        "pageSize": 1,
                        "type": 1
                    }
                }).then(value => {
                    console.log(value.data.list);
                    setMessage(message => message = value.data.list);
                })
            } else {
                alert('失败')
            }
        })
    }
    return (
        <div className={cssObj.contentBody}>
            {
                message.map((mObj) => {
                    return (
                        <div key={nanoid()}>

                            <div><img src={mObj['head']} alt="" /></div>
                            <div>{mObj['userName']}</div>
                            <div>2022-4-22</div>
                            <div>{mObj['text']}</div>
                            <div><img src={mObj['image']} alt="" /></div>
                            <div onClick={() => deleteMessage(mObj['id'])}>删除</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
