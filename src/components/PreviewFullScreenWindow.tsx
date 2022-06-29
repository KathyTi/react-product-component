import React, {ReactNode} from 'react';
import './PreviewFullScreenWindow.scss'
import IconRightChevron from './icons/IconRightChevron.svg';
import IconLeftChevron from './icons/IconLeftChevron.svg';
import IconClose from './icons/IconClose.svg';
import '../types/types';
import {IMedia} from "../types/types";
import ReactPlayer from "react-player";

interface Props{
    isActive: boolean;
    children?: ReactNode;
    onClose: any;
    content: IMedia[];
    currentIndex: number;
    onIndexChanged: any;
}

export default function PreviewFullScreenWindow({isActive, onClose, content, currentIndex, onIndexChanged}: Props){

    let isPlay: boolean = false;

    function changeItem(isRight: boolean){
        console.log("SAD");
        if(!isRight){
            currentIndex !== 0
                ? onIndexChanged(currentIndex-1)
                : onIndexChanged(0);
        }
        else{
            currentIndex !== content.length-1
                ? onIndexChanged(currentIndex+1)
                : onIndexChanged(content.length-1);
        }

    }

    if(!isActive) return null;
    return(
        <div className={'modal'}
             onClick={onClose}>
            <div className={'col-xxl-9 col-xl-10 col-lg-10 col-md-10 col-sm-10'}
                 onClick={(e) => {e.stopPropagation()}}>
                <div className={'switch-button-left'}
                     onClick={() => changeItem(false)}>
                    <img className={'button-with-icon'}
                         alt={''}
                         src={IconLeftChevron}/>
                </div>
                {
                    content[currentIndex].format === 'mp4'
                        ? <ReactPlayer
                            className={'product-video'}
                            id={'mainPlayer'}
                            playing={isPlay}
                            onPlay={() => isPlay = !isPlay}
                            //width={'100%'}
                            //height={'100%'}
                            url={content[currentIndex].path}
                            controls/>
                        : <img className={'image'}
                               alt={''}
                               src={content[currentIndex].path}/>
                }
                <div className={'switch-button-right'}
                     onClick={() => changeItem(true)}>
                    <img className={'button-with-icon'}
                         alt={''}
                         src={IconRightChevron}/>
                </div>
                <div className={'close-button'}
                     onClick={onClose}>
                    <img className={'button-with-icon'}
                         alt={''}
                         src={IconClose}/>
                </div>
            </div>
        </div>
    )
}