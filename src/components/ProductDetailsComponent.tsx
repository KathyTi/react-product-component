import React, {useState} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import {IProduct} from "../types/types";
import './ProductDetailsComponent.scss';

export interface Props {
    productItem: IProduct;
}

export default function ProductDetailsComponent({productItem}: Props){

    return(
        <Container className={'product-details-component'}>
            <Row className={'product-details-main-area'}>
                <Col className={'product-details-image-col'}>
                    <Image className={'product-image'} src={productItem.media[0].path}>

                    </Image>
                    
                    <ListGroup className={'product-mini-images-list'}>
                        <ListGroupItem className={'list-item'}>
                            <Image className={'product-mini-image'} src={productItem.media[0].path}>

                            </Image>
                        </ListGroupItem>
                        <ListGroupItem className={'list-item'}>
                            <Image className={'product-mini-image'} src={productItem.media[1].path}>

                            </Image>
                        </ListGroupItem>
                        <ListGroupItem className={'list-item'}>
                            <Image className={'product-mini-image'} src={productItem.media[2].path}>

                            </Image>
                        </ListGroupItem>
                        <ListGroupItem className={'list-item'}>
                            <Image className={'product-mini-image'} src={productItem.media[3].path}>

                            </Image>
                        </ListGroupItem>
                        <ListGroupItem className={'list-item'}>
                            <Image className={'product-mini-image'} src={productItem.media[4].path}>

                            </Image>
                        </ListGroupItem>
                        <ListGroupItem className={'list-item'}>
                            <Image className={'product-mini-image'} src={productItem.media[5].path}>

                            </Image>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col className={'product-details-main-col'}>
                    <div className={'product-header'}>
                        {productItem.name}
                    </div>
                </Col>
                <Col className={'module-col'}>

                </Col>
            </Row>
            <Col style={{display: 'flex', width: '100%', height: '50%', backgroundColor: 'violet'}}>

            </Col>
            {productItem.id}
        </Container>
    );
}