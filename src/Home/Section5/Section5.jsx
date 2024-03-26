import { Carousel } from "@material-tailwind/react";
 
export function Section5() {
  return (
    <>
    <section className="container flex flex-col justify-around items-center">
    <Carousel className="rounded-xl">
      <img
        src="https://sts-global.com/uploads/media/image/0001/01/78911-Kenworth-Service-Truck-STS-Global.jpg"
        alt="image 1"
        className="w-full h-[500px] object-cover"
      />
      <img
        src="https://assets.thehansindia.com/h-upload/2023/12/23/1408821-01.webp"
        alt="image 2"
        className="w-full h-[500px] object-cover"
      />
      <img
        src="https://www.varthabharati.in/h-upload/2023/12/23/1225099-whatsapp-image-2023-12-23-at-10729-pm.webp"
        alt="image 3"
        className="w-full h-[500px] object-cover"
      />
    </Carousel>
    </section>
    </>
  );
}