import { educationType } from "../types";

export const Education = ({ college, years, description }: educationType) => {
  return (
    <div>
      <a href='https://cmns.umd.edu/' className="">
        <h3 className="text-xl inline">{college}</h3>
      </a>
      <span className="text-sm text-gray-400"> ({years})</span>
      <em><p className="text-lg text-gray-400">{description}</p></em>
    </div>
  );
};
