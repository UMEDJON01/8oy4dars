type ParamsInterface = {
  params: {
    id: number;
  };
};

const request = async (id: number) => {
  const req = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await req.json();
  return data;
};

async function SingleProduct({ params }: ParamsInterface) {
  const product = await request(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card lg:card-side bg-base-100 shadow-xl p-6">
        <figure className="w-full lg:w-1/3">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl object-cover w-full h-full"
          />
        </figure>
        <div className="card-body lg:w-2/3 p-6">
          <h2 className="card-title text-4xl font-bold mb-4 font-serif">
            {product.title}
          </h2>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-semibold mb-2">
                Price: ${product.price}
              </p>
              <p className="text-lg">
                <h1 className="font-serif">Category:</h1> {product.category}
              </p>
              <p className="text-lg">Discount: {product.discountPercentage}%</p>
              <p className="text-lg">Rating: {product.rating}</p>
              <p className="text-lg">Stock: {product.stock}</p>
            </div>
            <div>
              <p className="text-lg">Tags: {product.tags.join(", ")}</p>
              <p className="text-lg">Brand: {product.brand}</p>
              <p className="text-lg">SKU: {product.sku}</p>
              <p className="text-lg">Weight: {product.weight} grams</p>
              <p className="text-lg">
                Dimensions: {product.dimensions.width} x{" "}
                {product.dimensions.height} x {product.dimensions.depth} cm
              </p>
            </div>
            <div>
              <p className="text-lg">Warranty: {product.warrantyInformation}</p>
              <p className="text-lg">
                Shipping Info: {product.shippingInformation}
              </p>
              <p className="text-lg">
                Availability: {product.availabilityStatus}
              </p>
            </div>
          </div>
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-secondary ml-4">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
