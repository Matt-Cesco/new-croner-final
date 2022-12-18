import Image from "next/image";
import PKlogo from "../public/images/pk-logo-2020.png";
import KFClogo from "../public/images/kfc-logo.png";

const Marquee = () => (
  <div className="homepage-marquee-container">
    <div className="homepage-marquee-wrapper">
      <div className="homepage-marquee">
        <ul className="flex justify-around">
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={KFClogo} alt="kfc logo" width={225} height={75} />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Marquee;
