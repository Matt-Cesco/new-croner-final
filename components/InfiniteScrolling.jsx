import Image from "next/image";
import PKlogo from '../public/images/pk-logo-2020.png';

const Marquee = () => (
  <div className="marquee-container">
    <div className="marquee-wrapper">
      <div className="marquee">
        <ul className="flex justify-around">
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
          <li>
            <Image src={PKlogo} alt="kfc logo" width={225} height={75} />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Marquee