"use client";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducer/ProductSlice";
import React, { useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import ProductDetails from "./ProductDetails";
import BrandDetails from "./BrandDetails";
import ClothsDetails from "./ClothsDetails";

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, []);

  return (
    <Container fluid>
      <div>
        <Row className='product-page-main p-0'>
          <ImageSlider />
          <ProductDetails />
          <BrandDetails />
        </Row>
        <Card>
          <Row className='product-page-main'>
            <ClothsDetails />
          </Row>
        </Card>
      </div>
    </Container>
  );
};

export default ProductPageContainer;
