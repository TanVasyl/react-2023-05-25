import { Menu } from "@/components/Menu/Menu";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} className={className} />;
};
