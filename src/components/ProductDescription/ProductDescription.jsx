import ProductHeader from "../ProductHeader/ProductHeader";
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ProductReviews from "../ProductReviews/ProductReviews";
import ProductActions from "../ProductActions/ProductActions";
const product = {
  name: "Супер ґаджет 3000",
  shortDescription: "Ідеальний пристрій для щоденного використання.",
  features: [
    "Вбудований GPS",
    "Водонепроникний корпус",
    "Тривалість роботи батареї – 24 години",
  ],
  images: [
    { src: "https://picsum.photos/id/1018/600/400", alt: "Photo 1" },
    { src: "https://picsum.photos/id/1015/600/400", alt: "Photo 2" },
    { src: "https://picsum.photos/id/1019/600/400", alt: "Photo 3" },
  ],
  reviews: [
    { author: "Іван", text: "Чудовий продукт, рекомендую!" },
    { author: "Олена", text: "Все працює бездоганно." },
  ],
  price: 7999,
};
const ProductDescription = () => {
  return (
    <div className="product-description max-w-4xl mx-auto p-4 space-y-8">
      <ProductHeader
        name={product.name}
        shortDescription={product.shortDescription}
      />
      <ProductFeatures features={product.features} />
      <PhotoGallery images={product.images} />
      <ProductReviews reviews={product.reviews} />
      <ProductActions price={product.price} />
    </div>
  );
};

export default ProductDescription;
