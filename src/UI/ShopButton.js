import React, { Children } from "react";
import classes from './ShopButton.module.css';

const ShopButton = ({children, ...props}) => {
    return (
        <button className={classes.ToShopButton}>
            {children}
        </button>
    );
}
export default ShopButton;
