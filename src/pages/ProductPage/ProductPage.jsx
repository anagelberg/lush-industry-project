// Show Product Card

// Enter quantity --> FUNCTIONAL
// Checkout button --> Go to Checkout Page
// Scan another item (non functional button)
import ProductCard from "../../components/ProductCard/ProductCard";
import exampleImg from "../../assets/images/exampleImage.jpg";

function ProductPage() {
  return (
    <div className="example">
      Example Product Card
      <ProductCard
        img={exampleImg}
        type="Bubble bar"
        name="The comforter"
        description="Sweet blackcurrant bubbles"
        price="$15.00"
        weight="200g"
      />
    </div>
  );
}

export default ProductPage;
