import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";

const images = [
  { src: "https://picsum.photos/id/1018/600/400", alt: "Photo 1" },
  { src: "https://picsum.photos/id/1015/600/400", alt: "Photo 2" },
  { src: "https://picsum.photos/id/1019/600/400", alt: "Photo 3" },
];
const DashboardPage = () => {
  return (
    <div className="p-6">
      <PhotoGallery images={images} />
    </div>
  );
};

export default DashboardPage;
