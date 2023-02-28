'use client'

import { Suspense } from 'react';
import OverlayFilter from "../Filter/OverlayFilter";
import { gql, useQuery } from '@apollo/client';
import productsOperation from '@/graphql/operations/products';
import GridItem from "./GridItem";
// import axios from "axios";
// import useSWR from 'swr'
import ProductSkeleton from './ProductSkeleton';


// const fetcher = (url: string) => axios.get(url).then(res => res.data)
// const url = "https://api.npoint.io/412448615c4faa493df3"


const ItemsContainer = () => {


  // const { data, error, isLoading } = useSWR(url, fetcher)
  const { data: products, error: errorProducts, loading } = useQuery(productsOperation.Queries.products);
  if (errorProducts) return <div>Error</div>;

  // create a skeleton loader for the GidItem component
  if (loading) 

    return (
      <>
        <ProductSkeleton count ={40}/>
      </>
    );


  return (
    <>
      {products?.products.map((item) => (
          <GridItem key={item.id} data={item} />
        ))}
    </>
  );
};

export default ItemsContainer;