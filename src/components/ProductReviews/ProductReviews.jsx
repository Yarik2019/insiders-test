const ProductReviews = ({ reviews }) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Відгуки</h2>
    {reviews.length === 0 ? (
      <p>Поки немає відгуків.</p>
    ) : (
      reviews.map((review, idx) => (
        <div key={idx} className="mb-4 border-b pb-2">
          <p className="font-semibold">{review.author}</p>
          <p>{review.text}</p>
        </div>
      ))
    )}
  </section>
);
export default ProductReviews;
