const ProductActions = ({ price }) => (
  <section className="flex items-center justify-between mt-8">
    <div className="text-2xl font-bold text-green-600">{price} ₴</div>
    <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      Додати в кошик
    </button>
  </section>
);

export default ProductActions;
