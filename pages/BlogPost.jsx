import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Marquee from "../components/InfiniteScrolling";
import SliderFree from "../components/SliderFree";
import Link from "next/link";
import Image from "next/image";
import banner from '../public/images/banner-container-hero.webp';
import mobilePhone from '../public/images/mobile-phone.jpg';
import maternityImage from '../public/images/maternity-pay.png';
import AccordionResources from '../components/AccordionResources';
import Slider from "../components/Slider";

const ModalBlack = dynamic(() => import("../components/ModalBlack"), {
  ssr: false,
});

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Modal"), {
  ssr: false,
});

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto pt-28">
        <div className="flex flex-col">
          <p className="text-sm">Blog post</p>
          <h2 className="text-5xl font-bold">
            Statutory Maternity Pay & Leave
          </h2>
          <div className="flex pt-6">
            <p className="text-base font-semibold">Share</p>
            <p className="text-base font-semibold px-4">Download</p>
          </div>
          <Image
            src={maternityImage}
            className="py-14"
            width={1024}
            alt="text image"
          />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <p className="text-lg pt-6 font-semibold">
          Maternity Pay is an employee right. When an employee takes leave
          because of pregnancy, she can qualify for Maternity Pay. She can
          qualify for up to 39 weeks, as long as she meets certain criteria.
        </p>
        <p className="text-lg pt-6">
          As an employer, you may ask yourself questions such as “how much is
          maternity pay” or “do you pay tax on maternity pay.” With changes made
          to legislation and minimum payments, you might need a refresher on
          what maternity pay is, and how it all works.
        </p>
        <h5 className="text-4xl font-semibold pt-10">
          The history of UK maternity pay and leave
        </h5>
        <p className="text-lg pt-6">
          In 1933, the government permitted women to take maternity leave in the
          UK. However, until the introduction of the Sex Discrimination Act in
          1975, women had no protection from dismissal. This was because of
          reasons to do with maternity leave.
        </p>
        <p className="text-lg pt-6">
          The Equality Act 2010 introduced legislation directly preventing
          discrimination and unfair dismissal because of pregnancy. This is
          because this is one of the protected characteristics. Therefore,
          protected against all discrimination.
        </p>
        <h5 className="text-4xl font-semibold pt-10">
          What is statutory maternity pay?
        </h5>
        <p className="text-lg pt-6">
          This is the basic maternity pay that all employees are entitled to.
          It's the legal minimum you must pay to any qualifying employee.
          Statutory maternity pay lasts up to 39 weeks, to compliment the
          maternity leave entitlement.
        </p>
        <p className="text-lg pt-6">
          A company may have contractual maternity leave and pay. This will be
          where you can implement your own leave policy but it cannot have less
          leave entitlement or a lower pay entitlement than the statutory one.
        </p>
        <h5 className="text-4xl font-semibold pt-10">
          How does maternity pay work?
        </h5>
        <p className="text-lg pt-6">
          When an employee is having a baby, theyre entitled to a year of
          statutory maternity leave. This is true no matter how long theyve been
          in the job. To be eligible for this, an employee must:
        </p>
        <ul>
          <li className="text-lg pt-6">
            - Have an employment contract (it does not matter for how long.)
          </li>
          <li className="text-lg pt-6">- Given you the correct notice.</li>
        </ul>
        <h5 className="text-4xl font-semibold pt-10">
          How much is statutory maternity pay?
        </h5>
        <p className="text-lg pt-6">
          UK Statutory Maternity Pay (SMP) is paid for up to 39 weeks. On 1
          April 2018, Statutory Maternity Pay in the UK increased to £145.18 or
          90% of the employee s average weekly earnings. Maternity pay
          eligibility requires the staff member to be legally classed as an
          employee.
        </p>
        <p className="text-lg pt-6">
          Maternity pay entitlement is for 39 weeks. This is on the condition
          that the employee has been continuously in your employ for 26 weeks by
          the time they must inform you of the pregnancy.
        </p>
        <p className="text-lg pt-6">
          They must also have average earnings of at least £116 per week (from
          April 2018) in the eight weeks (the qualifying week) before the 15th
          week, before the 'expected week of childbirth' (EWC).
        </p>
        <p className="text-lg pt-6">
          Employees who haven't worked for 26 weeks will have to claim maternity
          allowance.
        </p>
        <h5 className="text-4xl font-extrabold pt-10">How Croner can assist</h5>
        <p className="text-lg pt-6">
          Croner is offering his services placeholder text placeholder text
          Croner is offering his services placeholder text placeholder text
          Croner is offering his services placeholder text placeholder text
        </p>
      </div>
      <div className="w-full bg-red-dark mt-28">
        <div className="max-w-screen-xl mx-auto py-12">
          <div className="flex justify-between items-end">
            <div className="py-3">
              <ModalBlack />
            </div>
            <div className="">
              <h6 className="text-xs uppercase pb-1 text-white">
                &bull; Book a <span className="font-bold">free</span> Call
              </h6>
              <h3 className="text-4xl text-white font-semibold pb-3">
                Speak with an expert
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="pt-28 pb-20">
          <div className="flex justify-between items-end">
            <div className="max-w-xl">
              <h3 className="text-4xl font-bold">
                Related articles:
              </h3>
            </div>
            <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
              View all blog posts &rarr;
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto pb-20">
        <SliderFree />
      </div>
    </>
  );
};

export default BlogPost;