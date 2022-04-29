import React, { useState, useRef } from 'react'
import cssObj from './index.module.css'
import ReactFileReader from "react-file-reader";
import axios from 'axios';
export default function ReleaseDishes() {

    const [urlBase, setUrlBase] = useState('');
    const [isChoose, setIsChoose] = useState(false);

    const maininput: any = useRef();
    const makeinput: any = useRef();
    const nameinput: any = useRef();
    const tasteinput: any = useRef();
    const viceinput: any = useRef();
    function handleFiles(files: any) {
        setUrlBase(urlBase => urlBase = files.base64[0]);
        setIsChoose(isChoose => isChoose = true);
    }

    function release() {
        axios({
            method: 'POST',
            url: '/shot/food-type/add?id=11111',
            headers: {
                "Accept": "*/*"
            },
            data: {
                id: '11111',
                image: urlBase,
                main: maininput.current.value,
                make: makeinput.current.value,
                name: nameinput.current.value,
                taste: tasteinput.current.value,
                vice: viceinput.current.value
            }
        }).then(value => {
            if (value.data) {
                alert('发布成功');
                maininput.current.value = null;
                makeinput.current.value = null;
                nameinput.current.value = null;
                tasteinput.current.value = null;
                tasteinput.current.value = null;
                viceinput.current.value = null;
            } else if (!value.data) {
                alert('发布失败');
            }
        }).catch(err => {
            console.log(1, err);
        })
    }

    return (
        <div className={cssObj.releaseBody}>
            <div className={cssObj.releaseFrom}>
                <div>名称:<input type="text" ref={nameinput} /></div>
                <div>主料:<input type="text" ref={maininput} /></div>
                <div>辅料:<input type="text" ref={viceinput} /></div>
                <div>口味:<input type="text" ref={tasteinput} /></div>
                <div>做法:<br /> <textarea name="" id="" style={{ width: '35rem', height: '4rem' }} ref={makeinput} ></textarea> </div>
                <div>
                    选择图片:
                    <ReactFileReader fileTypes={[".csv", ".zip"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                        <button className={cssObj.btn}>点击选择</button>
                        {
                            isChoose ? '已选择' : ''
                        }
                    </ReactFileReader>
                </div>
                <button onClick={release} style={{ width: '15rem', height: '7rem' }}>提交</button>
            </div>

        </div>
    )
}
