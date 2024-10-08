import { experienceType } from "@/app/types/experience";

export const Experience = ({ career, date, description }: experienceType) => {
  return (
    <div>
      <h3 className="text-xl inline">{career}</h3>
      <span className="text-sm text-gray-400"> ({date})</span>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
};
