import { twMerge } from "tailwind-merge";

const DownArrow = () => {
  return (
    <div className="relative mx-auto w-[calc(2/3*50px)] h-[25px] bg-[#7447e1] down-arrow"></div>
  );
};

const SectionFooter = ({ isArrow }) => {
  return (
    <div className="relative h-9 bg-customGreen">
      {isArrow && <DownArrow />}
    </div>
  );
};

const Section = ({
  className,
  containerClassName,
  isSectionFooter,
  isArrow,
  children,
  ...rootProps
}) => {
  return (
    <div
      className={twMerge(
        "relative",
        `${isSectionFooter ? "flex flex-col justify-between" : ""}`,
        className
      )}
      {...rootProps}>
      <div className={twMerge("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
      {isSectionFooter && <SectionFooter isArrow={isArrow} />}
    </div>
  );
};

export default Section;
