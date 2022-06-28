import React, {useEffect, useState} from "react";
import {IMedia} from "../types/types";
import './PreviewComponent.scss';
import PreviewFullScreenWindow from "./PreviewFullScreenWindow";
import ReactPlayer from 'react-player';


export interface Props {
    media: IMedia[];
}

//function listItemClicked(index){
//
//}

export default function PreviewComponent({media}: Props){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalState, setModalState] = useState(false);
    //const images: any = [media.map(e => {
    //    let path: string = e.path
    //    return {
    //        original: path,
    //        thumbnail: path
    //    }
    //})];

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
                            e.format === 'mp4'
                                ? <ReactPlayer
                                    style={{ pointerEvents: 'none' }}
                                    id={'thumbnailPlayer'}
                                    className={'product-video'}
                                    url={media[currentIndex].path}
                                    width={'100%'} height={'64px'}
                                    onPlay={() => isTHPlay = false}
                                    playing={isTHPlay}
                                    light={true}/>
                                : <img className={'product-mini-image'} alt={''}
                                       key={e.id}
                                       src={e.path}>
                                </img>
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