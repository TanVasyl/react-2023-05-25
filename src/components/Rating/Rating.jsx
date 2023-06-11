import React from "react";

export const Rating = ({ value, onChange }) => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <div>
      {rating.map((num) => {
        return num === value ? (
          <button disabled>{num}</button>
        ) : (
          <button onClick={() => onChange(num)}>{num}</button>
        );
      })}
    </div>
  );
};
