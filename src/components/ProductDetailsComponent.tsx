import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IProduct} from "../types/types";
import './ProductDetailsComponent.scss';

export interface Props {
    productItem: IProduct;
    imageModule?: React.ReactNode;
    xModule?: React.ReactNode;
    quantitySlot?: React.ReactNode;
    priceSlot?: React.ReactNode;
    characteristicSlot?: React.ReactNode;
    descriptionSlot?: React.ReactNode;
}

export default function ProductDetailsComponent(
    {productItem, imageModule, xModule, quantitySlot, priceSlot, characteristicSlot, descriptionSlot}: Props){

    return(
        <div className={'product-details-component'}>
            <div className={'row'}>
                <div className={'col-xl-4 col-lg-5 col-md-5' }>
                    {imageModule}
                </div>
                <div className={'col-xl-5 col-lg-7 col-md-7' }>
                    <div className={'product-header'}>
                        {productItem.name}
                    </div>
                    <div className={'info-container'}>
                        <div className={'info'}>
                            Просмотры:{productItem.views}
                        </div>
                        <div className={'info'}>
                            Купили:{productItem.bought}
                        </div>
                    </div>
                    <div className={'info-container'}>
                        <div className={'info'}>
                            В наличии:{quantitySlot}
                        </div>
                        <div className={'info'}>
                            Цена:{priceSlot}₽
                        </div>
                    </div>
                    <div className={'product-header'}>
                        Характеристики
                    </div>
                    <div>
                        <div className={'characteristic-list-header'}>
                            <div className={'characteristic-title'}>
                                Наименование
                            </div>
                            <div className={'characteristic-value'}>
                                Значение
                            </div>
                        </div>
                        <div className={'characteristic-list'}>
                            {
                                productItem.characteristics.map(e => {
                                    return <div className={'characteristic-item'}>
                                        <div className={'characteristic-title'}>{e.title}</div>
                                        <div className={'characteristic-value'}>{e.value}</div>
                                        <div className={'divider'}> </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className={'col-xl-3 col-lg-5 col-md-5'}>
                    {xModule}
                </div>
            </div>
            <div className="description-row">
                <div className={'description-area'}>
                    <div className={'description-header'}>
                        Описание товара
                    </div>
                    {descriptionSlot}
                </div>
            </div>
        </div>
    );
}