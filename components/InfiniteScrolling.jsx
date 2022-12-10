import Image from "next/image";
import KFClogo from '../public/images/kfc-logo.png';

const Marquee = () => (
  <div class="marquee-container">
    <div class="marquee-wrapper">
      <div class="marquee">
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