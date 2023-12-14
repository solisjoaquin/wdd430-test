import WhatsappLink from "../wp-link";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col items-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <img src={product.image} alt={product.title} width={320} height={320} />
      <h2 className="text-2xl font-bold text-center mt-4 mb-2">
        {product.title}
      </h2>
      <p className="text-xl font-bold text-center mb-2">${product.price}</p>

      <div className="flex flex-row space-x-4 pb-3">
        <WhatsappLink title={product.title} />
      </div>
    </div>
  );
};

export default Card;
