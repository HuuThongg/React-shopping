'use client'

import { Suspense } from 'react';
import OverlayFilter from "../Filter/OverlayFilter";
import GridItem from "./GridItem";
import axios from "axios";
import useSWR from 'swr'
import ContainWrapper from './ContainWrapper';
import ProductSkeleton from './ProductSkeleton';
const fetcher = (url: string) => axios.get(url).then(res => res.data)
const url = "https://api.npoint.io/412448615c4faa493df3"
const ItemsContainer = () => {
  const { data, error, isLoading } = useSWR(url, fetcher)
  // create a skeleton loader for the GidItem component
  if (isLoading) 

    return (
      <>
        <ProductSkeleton count ={40}/>
      </>
    );

  if (error) return <div>Error</div>;

  return (
    <>
      {data.map((item) => (
          <GridItem key={item._id.$oid} data={item} />
        ))}
    </>
  );
};

export default ItemsContainer;