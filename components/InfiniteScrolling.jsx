import Image from "next/image";
import KFClogo from '../public/images/kfc-logo.png';

const Marquee = () => (
  <div className="marquee-container">
    <div className="marquee-wrapper">
      <div className="marquee">
        <ul className="flex justify-around">
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
          <li>
          <Image 
            src={KFClogo}
            alt="kfc logo"
            width={104}
            height={29}
          />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Marquee