import Image from "next/image";
import OfferStripe from "./OfferStripe";

const SiteNav = () => {
  return (
    <header>
      <div
        className="w-full flex flex-col gap-2 "
      >
        <OfferStripe />
      </div>
    </header>
  );
};

export default SiteNav;
