import { User } from "@/components/User/User";
import { selectUser } from "@/redux/features/user/selectors";
import { useGetUsersQuery } from "@/redux/services/api";
import React from "react";
import { useSelector } from "react-redux";

export const UserContainer = ({ userId, ...props }) => {
  const { data: users, isLoading } = useGetUsersQuery();
  // const user = useSelector((state) => selectUser(state, userId));
  // console.log(user);
  if (isLoading) {
    return null;
  }
  const usersRestaurant = users.find(({ id }) => id === userId);
  return <User {...props} user={usersRestaurant} />;
};
