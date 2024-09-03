import Layout from "../components/Layout";
import Card from "../elements/card";
import Slideshow from "../elements/slideshow";
const Home = () => {
  const productList = [
    {
      image: "20200824120814.jpg",
      name: "kareenotebook",
    },
    {
      image: "Notebook.webp",
      name: "adfadsf",
    },
    {
      image: "Notebook.webp",
      name: "adfadsf",
    },
    {
      image: "Notebook.webp",
      name: "adfadsf",
    },
  ];
  return (
    <Layout>
      <Slideshow />

      {/* product */}
      <div className="gap-10">
        <div className="flex flex-col gap-28 bg-white mx-20">
          <h1 className="uppercase text-5xl font-bold mt-10 flex justify-center">
            our products
          </h1>
          <div className="flex">
          <div className="grid grid-cols-4 gap-28 text-center">
            {productList.map((p) => (
              <Card key={p.name}{...p} />
            ))}
          </div>
          </div>
        </div>
        <div className="w-full bg-blue-50 h-16"></div>

        {/* rec section */}

        <div className="mx-auto">
          <div className="grid grid-cols-2 px-28 gap-24">
            <img
              src="https://www.woodlandtrust.org.uk/media/50820/house-mouse-wtml-1062551-amy-lewis.jpg"
              alt=""
              className="w-full "
            />
            <div className="flex flex-col justify-center gap-7 w-80">
              <h1 className="text-4xl font-bold">Mouse</h1>
              <p className="text-sm font-bold">
                กำหนดค่าเมาส์ของคุณ รวมถึงออปติคอลเซ็นเซอร์ การตั้งค่า DPI
                การเลื่อนและการเร่งความเร็ว การตั้งโปรแกรมปุ่ม
                และหน่วยความจำออนบอร์ด ตั้งโปรแกรม LIGHTSYNC
              </p>
            </div>
          </div>


          <div className="w-full bg-blue-50 h-16"></div>
          <div className="grid grid-cols-2 px-28 gap-24">
            <div className="flex flex-col justify-center gap-7 w-80">
              <h1 className="text-4xl font-bold">Mouse</h1>
              <p className="text-sm font-bold">
                กำหนดค่าเมาส์ของคุณ รวมถึงออปติคอลเซ็นเซอร์ การตั้งค่า DPI
                การเลื่อนและการเร่งความเร็ว การตั้งโปรแกรมปุ่ม
                และหน่วยความจำออนบอร์ด ตั้งโปรแกรม LIGHTSYNC
              </p>
            </div>
            <img
              src="https://www.woodlandtrust.org.uk/media/50820/house-mouse-wtml-1062551-amy-lewis.jpg"
              alt=""
              className="w-full"
            />
          </div>



          <div className="w-full bg-blue-50 h-16"></div>
          <div className="grid grid-cols-2 px-28 gap-24">
            <img
              src="https://www.woodlandtrust.org.uk/media/50820/house-mouse-wtml-1062551-amy-lewis.jpg"
              alt=""
              className="w-full"
            />
            <div className="flex flex-col justify-center gap-7 w-80">
              <h1 className="text-4xl font-bold">Mouse</h1>
              <p className="text-sm font-bold">
                กำหนดค่าเมาส์ของคุณ รวมถึงออปติคอลเซ็นเซอร์ การตั้งค่า DPI
                การเลื่อนและการเร่งความเร็ว การตั้งโปรแกรมปุ่ม
                และหน่วยความจำออนบอร์ด ตั้งโปรแกรม LIGHTSYNC
              </p>
            </div>
          </div>



          <div className="w-full bg-blue-50 h-16"></div>
          <div className="grid grid-cols-2 px-28 gap-24">
            <div className="flex flex-col justify-center gap-7 w-80">
              <h1 className="text-4xl font-bold">Mouse</h1>
              <p className="text-sm font-bold">
                กำหนดค่าเมาส์ของคุณ รวมถึงออปติคอลเซ็นเซอร์ การตั้งค่า DPI
                การเลื่อนและการเร่งความเร็ว การตั้งโปรแกรมปุ่ม
                และหน่วยความจำออนบอร์ด ตั้งโปรแกรม LIGHTSYNC
              </p>
            </div>
            <img
              src="https://www.woodlandtrust.org.uk/media/50820/house-mouse-wtml-1062551-amy-lewis.jpg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full bg-blue-50 h-40"></div>
      </div>
            
    </Layout>
  );
};

export default Home;
