import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cssObj from './index.module.css'
import axios from 'axios'
import { nanoid } from 'nanoid'
export default function DishesContent() {

    const navigate = useNavigate();
    function goRelease() {
        navigate('/main/dishes/releasedishes');
    }

    const [message, setMessage] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/shot/food-type/queryFood',
            headers: {
                "Accept": "*/*"
            }
        }).then(value => {
            console.log(value);
            setMessage(message => message = value.data);
        })
    }, [])

    function deleteMessage(id: string) {
        axios({
            method: 'POST',
            headers: {
                "Accept": "*/*"
            },
            url: `/shot/food-type/delete?id=${id}&userId=11111`
        }).then(value => {
            console.log(value);
            if (value.data) {
                alert('删除成功');
                axios({
                    method: 'GET',
                    url: '/shot/food-type/queryFood',
                    headers: {
                        "Accept": "*/*"
                    }
                }).then(value => {
                    console.log(value);
                    setMessage(message => message = value.data);
                })
            } else if (!value.data) {
                alert('删除失败,请稍后重试');
            }
        })
    }
    return (
        <div>
            <div className={cssObj.contentBody}>
                {
                    message.reverse().map((mObj) => {
                        return (
                            <div key={nanoid()}>
                                <div>{mObj['name']}</div>
                                <div><img src={mObj['image']} alt="" /></div>
                                <div onClick={() => deleteMessage(mObj['id'])}>删除</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={cssObj.button} onClick={goRelease} >发布</div>
        </div>
    )
}
