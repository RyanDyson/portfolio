import { DisplayText } from "../text/DisplayText";
export const TitleComponent = (title: string) => {
  return [
    <div
      key={0}
      className="leading-[11vw] text-[11vw] w-full flex justify-between"
    >
      {title.split("").map((item, index) => (
        <div key={index}>
          <DisplayText key={index}>{item}</DisplayText>
        </div>
      ))}
    </div>,
    <div
      key={1}
      className="leading-[11vw] text-[11vw] w-full flex justify-between"
    >
      {title.split("").map((item, index) => (
        <div key={index}>
          <DisplayText key={index}>{item}</DisplayText>
        </div>
      ))}
    </div>,
    <div
      key={2}
      className="leading-[11vw] text-[11vw] w-full flex justify-between"
    >
      {title.split("").map((item, index) => (
        <div key={index}>
          <DisplayText key={index}>{item}</DisplayText>
        </div>
      ))}
    </div>,
    <div
      key={3}
      className="leading-[11vw] text-[11vw] w-full flex justify-between"
    >
      {title.split("").map((item, index) => (
        <div key={index}>
          <DisplayText key={index}>{item}</DisplayText>
        </div>
      ))}
    </div>,
  ];
};
