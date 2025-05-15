const ProductHeader = ({ name, shortDescription }) => (
  <section>
    <h1 className="text-3xl font-bold">{name}</h1>
    <p className="text-gray-700 mt-2">{shortDescription}</p>
  </section>
);
export default ProductHeader;
