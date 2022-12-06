import {ProductDetail,} from "../components";
import OverlayFilter from "../components/shop/OverlayFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";

// ⬇️ define your query
const productDetailQuery = (id) => ({
  queryKey: ["productDetail", id],
  queryFn: async () => {
    const { data } = await axios.get(
      `https://api.npoint.io/412448615c4faa493df3/` + (+id -1).toString()
    );
    return data;
  },
});

const DetailItem = () => {
  const params = useParams();
  // ⬇️ useQuery as per usual
  const { data: product } = useQuery(productDetailQuery(params.productId));
  // console.log(product);

  return (
    <div className="relative">
      <ProductDetail product={product} />
    </div>
  );
};

export default DetailItem;

// export async function loader({ params }) {
//   console.log(params);
//   // const contact = await getContact(params.contactId);
//   // if (!contact) {
//   //   throw new Response("", {
//   //     status: 404,
//   //     statusText: "Not Found !! the contact",
//   //   });
//   // }
//   return "a";
// }
// ⬇️ needs access to queryClient
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = productDetailQuery(params.productId);
    // ⬇️ return data or fetch it
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
