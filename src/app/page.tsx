import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  AwaitedReactNode,
  ReactPortal,
} from "react";

const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

async function Home() {
  const data = await request("https://dummyjson.com/products");

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.products.map(
          (item: {
            id: Key | null | undefined;
            thumbnail: string | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | Promise<AwaitedReactNode>
              | null
              | undefined;
            price:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          }) => (
            <Link key={item.id} href={`./product/${item.id}`} legacyBehavior>
              <a className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300">
                <figure className="px-10 pt-10">
                  <img src={item.thumbnail} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title  font-extrabold  ">{item.title}</h1>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </a>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
