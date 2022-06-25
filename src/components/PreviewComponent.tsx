import React from "react";
import {Image, ListGroup, ListGroupItem} from "react-bootstrap";
import {IMedia} from "../types/types";
import './PreviewComponent.scss';

export interface Props {
    media: IMedia[];
}

//function listItemClicked(index){
//
//}

export default function PreviewComponent({media}: Props){

    let currentIndex: number = 0;
    
    return(
        <div className={'preview-component'}>
            <Image className={'product-image'} src={media[currentIndex].path}>

            </Image>
            <ListGroup className={'product-mini-images-list'}>
                <ListGroupItem className={'list-item'}>
                    <Image className={'product-mini-image'} src={media[0].path}>

                    </Image>
                </ListGroupItem>
                <ListGroupItem className={'list-item'}>
                    <Image className={'product-mini-image'} src={media[1].path}>

                    </Image>
                </ListGroupItem>
                <ListGroupItem className={'list-item'}>
                    <Image className={'product-mini-image'} src={media[2].path}>

                    </Image>
                </ListGroupItem>
                <ListGroupItem className={'list-item'}>
                    <Image className={'product-mini-image'} src={media[3].path}>

                    </Image>
                </ListGroupItem>
                <ListGroupItem className={'list-item'}>
                    <Image className={'product-mini-image'} src={media[4].path}>

                    </Image>
                </ListGroupItem>
                <ListGroupItem className={'list-item'}>
                    <Image className={'product-mini-image'} src={media[5].path}>

                    </Image>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}