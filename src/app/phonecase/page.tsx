import Product from "../../components/Product";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");

  if (!res.ok) {
    throw new Error("Product failed to fetch");
  }
  return res.json();
};

const PhoneCase = async () => {
  const products = await getData();
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Product products={products} />
    </div>
  );
};

export default PhoneCase;
