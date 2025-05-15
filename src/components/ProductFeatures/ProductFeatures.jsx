const ProductFeatures = ({ features }) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Характеристики</h2>
    <ul className="list-disc list-inside space-y-1">
      {features.map((feat, idx) => (
        <li key={idx}>{feat}</li>
      ))}
    </ul>
  </section>
);

export default ProductFeatures;
