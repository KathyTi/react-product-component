import React, {ReactNode} from 'react';
import './PreviewFullScreenWindow.scss'
import IconRightChevron from './icons/IconRightChevron.svg';
import IconLeftChevron from './icons/IconLeftChevron.svg';
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
        if(!isRight){
            currentIndex !== 0
                ? onIndexChanged(currentIndex-1)
                : onIndexChanged(0)
        }
        else{
            currentIndex !== content.length-1
                ? onIndexChanged(currentIndex+1)
                : onIndexChanged(content.length-1)
        }

    }

    if(!isActive) return null;
    return(
        <div className={'modal'} onClick={onClose}>
            <div className={'window'} onClick={(e) => e.stopPropagation()}>
                <div className={'switch-button-left'} onClick={(e) => {e.stopPropagation(); changeItem(false)}}>
                    <img className={'switch-button-icon'} src={IconLeftChevron}/>
                </div>
                {
                    content[currentIndex].format === 'mp4'
                        ? <ReactPlayer
                            className={'product-video'}
                            id={'mainPlayer'}
                            playing={isPlay}
                            onPlay={() => isPlay = !isPlay}
                            url={content[currentIndex].path}
                            width={'100%'}
                            height={'calc(width/16*9)'}
                            controls/>
                        : <img className={'image'} src={content[currentIndex].path}/>
                }
                <div className={'switch-button-right'} onClick={(e) => {e.stopPropagation(); changeItem(true)}}>
                    <img className={'switch-button-icon'} src={IconRightChevron}/>
                </div>
            </div>
        </div>
    )
}