import React, { useState, useEffect } from 'react'

import cssObj from './index.module.css'
export default function Politics() {

    // 定义变量保存窗口宽度
    const [windowWidth, setwindowWidth] = useState(0);
    // 每次组件挂载完毕自动获取宽度调整
    useEffect(() => {
        const Heigth = document.body.clientWidth;
        setwindowWidth(windowWidth => windowWidth = Heigth);
    }, [])
    return (

        <div style={{ width: windowWidth }}>
            <h1>食货资讯</h1>
            <div className={cssObj.contentBody}>
                <div className={cssObj.contentPart}>
                    <div>春天的炒菜，美好到无法用五彩缤纷来形容了</div>
                    <div>小旭的菜单</div>
                    <div>春天到了，各种食材一下子多了起来。爱下厨房的人们，随意搭配，都能让餐桌如春天一版，五彩缤纷，无比美好</div>
                </div>
                <div className={cssObj.contentPart}>
                    <div>买菜时记得带一把，这个当配菜脆嫩、爆香！</div>
                    <div>小旭的菜单</div>
                    <div>蒜苔是大蒜的花茎，现在的蒜苔新鲜、条顺、脆嫩，正是口味甚佳时。 蒜苔的辛辣味比大蒜要轻，加之它所具有的蒜香能增加菜肴的香味，因此更易被人们所接受，特别适合与肉类组CP。</div>
                </div>
                <div className={cssObj.contentPart}>
                    <div>这些食物可以保存很久，大家囤起来</div>
                    <div>小旭的菜单</div>
                    <div>蔬菜中的土豆、红薯、芋头、胡萝卜，底部垫纸常温保存在阴冷干燥处，大概可以保存一个月左右。选了一些能保存时间较长的根茎类菜谱，推荐给大家。</div>
                </div>
                <div className={cssObj.contentPart}>
                    <div>营养好吃的豆腐，最家常的做法来了</div>
                    <div>小旭的菜单</div>
                    <div>来点高质量的植物蛋白！豆腐高蛋白低脂肪，具降血压、降血脂、降胆固醇的功效，生熟皆可，老幼皆宜。</div>
                </div>
            </div>
        </div>
    )
}
