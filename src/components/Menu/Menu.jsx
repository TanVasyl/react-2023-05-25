import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { useGetDishesQuery } from "@/redux/services/api";

/* eslint-disable react/jsx-key */
export const Menu = ({ restaurantId, className }) => {
  const { data: dishes, isLoading } = useGetDishesQuery(restaurantId);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {dishes.map((dish) => (
          <DishContainer dish={dish} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
