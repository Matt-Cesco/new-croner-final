import LandingPageRecord from "./LandingPageRecord";
import SupportBusinessRecord from "./SupportBusinessRecord";
import Event from "./Event";
import SectionFreeRes from "./SectionFreeRes";

const HomeSection = ({details}) => {
  if (details.__typename === "LandingPageRecord") {
    return <LandingPageRecord details={details} />;
  } else if (details.__typename === "SupportBusinessRecord") {
    return <SupportBusinessRecord details={details} />;
  } else if (details.__typename === "EventRecord") {
    return <Event details={details} />;
  } else if (details.__typename === "FreeResourceRecord") {
    return <SectionFreeRes details={details} />;
  }
  return (
    <></>
  )
}

export default HomeSection;