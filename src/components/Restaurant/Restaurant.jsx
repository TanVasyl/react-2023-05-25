/* eslint-disable react/jsx-key */
import React from "react";

import styles from "./styles.module.scss";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu restaurantId={id} className={styles.menu} />
      <Reviews restaurantId={id} className={styles.reviews} />
      <NewReviewFormContainer restaurantId={id} />
    </div>
  );
};
