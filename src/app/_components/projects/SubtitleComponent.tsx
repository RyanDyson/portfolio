import { CommonText } from "../text/CommonText";

export const SubtitleComponent = (subtitle: string) => {
  return [
    <div
      key={0}
      className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between"
    >
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
    <div
      key={1}
      className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between"
    >
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
    <div
      key={2}
      className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between"
    >
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
    <div
      key={3}
      className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between"
    >
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
  ];
};
