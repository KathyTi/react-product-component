import React, {useEffect, useState} from "react";
import {IMedia} from "../types/types";
import './PreviewComponent.scss';
import PreviewFullScreenWindow from "./PreviewFullScreenWindow";
import ReactPlayer from 'react-player';
import IconPlayFill from './icons/IconPlayFill.svg';


export interface Props {
    media: IMedia[];
}

//function listItemClicked(index){
//
//}

export default function PreviewComponent({media}: Props){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalState, setModalState] = useState(false);

    function getYoutubePreview(r: string){
        console.log("reference", r);
        let result = r.substring(r.length-11, r.length);
        console.log("result", result);
        return `https://i3.ytimg.com/vi/${result}/maxresdefault.jpg`
    }

    let isPlay: boolean = false;
    let isTHPlay: boolean = false;

    
    return(
        <div className={'preview-component'}>
            {
                media[currentIndex].format === 'mp4'
                ? <ReactPlayer
                        className={'product-video'}
                        id={'mainPlayer'}
                        playing={isPlay}
                        onPlay={() => isPlay = !isPlay}
                        url={media[currentIndex].path}
                        width={'100%'}
                        height={'300px'}
                        controls/>
                : <img className={'product-image'} src={media[currentIndex].path} alt={''} onClick={() => setModalState(true)}>

                </img>
            }
            <div className={'product-mini-images-list'}>
                {
                    media.map((e, idx) =>
                        <div className={currentIndex === idx ? 'current-list-item' : 'list-item'} key={idx}
                             onClick={() => setCurrentIndex(idx)}>
                            {
                                <div className={'product-mini-image'}>
                                    <img className={'image'}
                                         alt={''}
                                         key={e.id}
                                         src={e.format === 'mp4' ? getYoutubePreview(e.path) : e.path}>
                                    </img>
                                    {e.format === 'mp4'
                                        ? <img className={'icon-play'}
                                              alt={''}
                                              src={e.format === 'mp4' ? IconPlayFill : ''}>
                                          </img>
                                        : <> </>
                                    }

                                </div>
                            }
                        </div>
                    )
                }
            </div>
            <PreviewFullScreenWindow
                isActive={modalState}
                onClose={() => setModalState(false)}
                content={media}
                currentIndex={currentIndex}
                onIndexChanged={(index: number) => {setCurrentIndex(index)}}
            >

            </PreviewFullScreenWindow>
        </div>
    );
}