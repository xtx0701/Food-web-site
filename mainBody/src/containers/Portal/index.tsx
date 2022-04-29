// 首页
import React from 'react'

import PhotoWall from '../Portal/PhotoWall'
import Politics from './Politics'
import Dishes from './Dishes'
export default function Portal() {
    return (
        <div>
            <PhotoWall />
            <Politics />
            <Dishes />
        </div>
    )
}
