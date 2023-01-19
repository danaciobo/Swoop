import React from "react";

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface Item {
    _id: string
    title: string,
    description: string
    category:string
    price: string
    quantity: string
    location: string
    image: string
    date_added: Date
    seller: User
}

export interface ExpandProps {
    expand:boolean,
    onClick: () => void,
    'aria-expanded':boolean,
    'aria-label':string,
    children?: Element

}
