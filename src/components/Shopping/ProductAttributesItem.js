import React, { Component } from "react";
import classes from "./ProductAttributesItem.module.css";

class ProductAttributesItem extends Component {
  render() {
    const {
      orderItemId,
      attrName,
      value,
      displValue,
      cartOverlay,
      mainCart,
      isColor,
      changeAtr,
      selected,
    } = this.props;
    console.log("ProductAttributesItem", this.props);
    return (
      <>
        <label
          className={`${classes[`attribute-item`]} ${!isColor &&
            classes[`not-colored`]} ${cartOverlay &&
            classes[`cart-overlay`]} ${mainCart && classes[`main-cart`]}`}
          style={{
            backgroundColor: isColor && value,
            width: !isColor && !cartOverlay && "63px",
            height: !isColor && !cartOverlay && "45px",
          }}
        >
          <input
            type="radio"
            name={`${cartOverlay ? orderItemId + "_" + attrName : attrName} ${
              mainCart ? orderItemId + " main_cart" : ""
            }`}
            value={value}
            checked={
              selected.length > 0 &&
              selected[0].selectedAttrItemId === displValue
            }
            disabled={cartOverlay || mainCart}
            onChange={changeAtr}
          ></input>
          <span
            className={classes.checkmark}
            style={{
              width: !isColor && !cartOverlay && "63px",
              height: !isColor && !cartOverlay && "45px",
            }}
          >
            {!isColor && value}
          </span>
        </label>
      </>
    );
  }
}

export default ProductAttributesItem;
