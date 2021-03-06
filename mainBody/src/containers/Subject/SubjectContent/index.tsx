import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cssObj from './index.module.css'
export default function NoteContent() {

    const navigate = useNavigate();
    function goDetail(rObj: any) {
        navigate('/subject/subjectdetail', {
            state: {
                rObj
            }
        })
    }

    const [disherContent, setDisherContent] = useState([]);
    const [userRelease, setUserRelease] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            headers: {
                "Accept": "*/*"
            },
            url: '/shot/food-type/queryFood'
        }).then(value => {
            setDisherContent(disherContent => disherContent = value.data);
        })

        axios({
            method: 'POST',
            url: '/shot/food-activity/queryShot',
            headers: {
                "Accept": "*/*"
            },
            data: {
                key: '',
                "pageNum": 1,
                "pageSize": 1,
                "type": 1
            }
        }).then(value => {
            console.log(value);
            setUserRelease(userRelease => userRelease = value.data.list);
        });
    }, [])
    const contentArr = disherContent.slice(0, 4);
    function goRecipe(): void {
        navigate('/recipe/recipecontent');
    }
    return (
        <div className={cssObj.notesContent}>
            <div className={cssObj.content_left}>
                {
                    userRelease.reverse().map((rObj) => {
                        return (<div className={cssObj.contentPart} onClick={() => goDetail(rObj)}>
                            <div>
                                <div><img src={rObj['head']} alt="" /></div>
                                <div>
                                    <div>{rObj['userName']}</div>
                                    <div>2022-3-14</div>
                                </div>
                            </div>
                            <div>
                                {rObj['text']}
                            </div>
                            <div>
                                <img src={rObj['image']} alt="" />
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;??????{rObj['favNum']}
                                &nbsp;&nbsp;&nbsp;?????????{rObj['colNum']}
                            </div>
                        </div>)
                    })
                }
            </div>


            <div className={cssObj.contentRight}>
                <div className={cssObj.title}>????????????</div>
                <div className={cssObj.guessLike}>
                    {
                        contentArr.map((dObj) => {
                            return (
                                <div key={dObj['id']} onClick={goRecipe}>
                                    <div><img src={dObj['image']} alt="" /></div>
                                    <div>{dObj['name']} </div>
                                    <div>??????</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
