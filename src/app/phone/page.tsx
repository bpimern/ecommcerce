import Product from "../../components/Product";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");

  if (!res.ok) {
    throw new Error("Product failed to fetch");
  }
  return res.json();
};

const PhonePage = async () => {
  const products = await getData();

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Product products={products} />
    </div>
  );
};

export default PhonePage;
