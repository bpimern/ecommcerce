import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto py-10 flex flex-col justify-center items-center">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, porro?
      </p>
      <div>
        <h2 className="text-lg font-bold">Explore Categories:</h2>
        <div className="flex flex-col gap-2">
          <a href="https://jsonserver.reactbd.com/phone" target="_blank">
            Phone Data
          </a>
          <a href="https://jsonserver.reactbd.com/phonecase" target="_blank">
            Phone Case Data
          </a>
          <a href="https://jsonserver.reactbd.com/accessories" target="_blank">
            Accessories Data
          </a>
          <a href="https://jsonserver.reactbd.com/watch" target="_blank">
            Watches Data
          </a>
        </div>
      </div>
    </main>
  );
}
