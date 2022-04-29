import React, { useRef, useState } from 'react'
import cssObj from './index.module.css'
import ReactFileReader from "react-file-reader";
import axios from 'axios';
export default function UserRelease() {

    const inputText: any = useRef();
    const selected: any = useRef();
    const [urlBase, setUrlBase] = useState('');
    const [isChoose, setIsChoose] = useState(false);
    function handleFiles(files: any) {
        setUrlBase(urlBase => urlBase = files.base64[0]);
        setIsChoose(isChoose => isChoose = true);
    }

    function release(): void {
        const userInfo: any = localStorage.getItem('userInfo');
        const userInfoJson = JSON.parse(userInfo);
        axios({
            method: 'POST',
            url: '/shot/food-activity/publish',
            headers: {
                "Accept": "*/*"
            },
            data: {
                "ct": 20220410,
                "image": urlBase,
                "text": inputText.current.value,
                "type": parseInt(selected.current.value),
                "userId": userInfoJson['id']
            }
        }).then(value => {
            if (value.status === 200) {
                alert('发布成功');
                setUrlBase(urlBase => urlBase = '');
                inputText.current.value = null;
            }
        }).catch(err => {
            console.log(err);
            alert('发布失败');
        })
    }

    return (
        <div className={cssObj.releaseBody}>
            <select name="city" ref={selected} >
                <option value="0">笔记</option>
                <option value="1">社区</option>
            </select>
            <div>输入内容</div>
            <textarea name="" id="" ref={inputText}>
            </textarea>
            <div>
                选择你的照片：
                <ReactFileReader fileTypes={[".csv", ".zip"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                    <button className={cssObj.btn}>点击选择</button>
                    {
                        isChoose ? '已选择' : ''
                    }
                </ReactFileReader>
            </div>

            <div>
                <div onClick={release}>发布</div>
            </div>
        </div>
    )
}
