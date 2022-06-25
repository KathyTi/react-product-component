export interface ICharacteristic{
    id: number;
    title: string;
    type: string;
    value: any;
    meta: any;
}
export interface IPrice{
    retail_price: number;
}
export interface IMedia{
    id: number,
    name: string,
    format: "png" | "jpeg" | "mp4",
    path: string,
}
export interface ICategory{
    id: number;
    name: string;
}
export interface ITag{
    id: number,
    name: string,
}

export interface IProduct{
    id: number;
    name: string;
    quantity: number,
    views: number,
    bought: number,
    price: IPrice;
    characteristics: ICharacteristic[],
    description: string,
    media: IMedia[];
    categories: ICategory[],
    tags: ITag[],
}