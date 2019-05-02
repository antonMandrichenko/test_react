import React from 'react';
import PropTypes from "prop-types";
import {compose} from "redux";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import AddShoppingCart from "../../../components/icons/AddShoppingCart";
import {styles} from "./style";
import {mapDispatchToProps} from "./redux";

Minicart.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  handleToOrFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
  getCurrentProduct: PropTypes.func.isRequired,
};

function Minicart({
                    classes,
                    product,
                    handleToOrFromCart,
                    isInCart,
                    getCurrentProduct
                  }) {

  const handleCurrentProduct = () => {
    getCurrentProduct(product);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <NavLink to={{
          pathname: `/products/${product.id}`,
        }} onClick={handleCurrentProduct}>
          <CardMedia
            className={classes.media}
            image={product.img[0]}
            title={product.name}
          />
          <Typography variant="h6" component="p">
            {product.name}
          </Typography>
        </NavLink>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.price}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <AddShoppingCart
          handleToOrFromCart={handleToOrFromCart}
          product={product}
          isInCart={isInCart}
        />
      </CardActions>
    </Card>
  );
}

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(Minicart);