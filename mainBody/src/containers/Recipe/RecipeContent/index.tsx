// 菜谱
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import cssObj from './index.module.css'

export default function Recipe() {

    const navigate = useNavigate();
    const [disherContent, setDisherContent] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            headers: {
                "Accept": "*/*"
            },
            url: '/shot/food-type/queryFood'
        }).then(value => {
            console.log(value);
            setDisherContent(disherContent => disherContent = value.data)
        })
    }, [])

    interface Food {
        [propName: string]: string | number;
    }

    function goDetail(dObj: Food) {
        navigate('/recipe/recipedetail', {
            state: {
                dObj
            }
        })
    }

    return (
        <div className={cssObj.recipeContent}>
            <h1>最新推荐</h1>
            <div className={cssObj.dishesContent}>
                {
                    disherContent.map((dObj) => {
                        return (<div className={cssObj.contentPart} onClick={() => goDetail(dObj)} key={dObj['id']}>
                            <div><img src={dObj['image']} alt="" /></div>
                            <div>{dObj['name']}</div>
                            <div>小旭</div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
