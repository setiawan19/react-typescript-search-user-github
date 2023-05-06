import { FC } from "react";
import { List, ListItem } from "../styled-components/repository-list";
import UserCard from "./user-card";

const UserList: FC<UserListProps> = ({ users }) => (
  <List>
    {users.map((item: User) => {
      return (
        <ListItem key={item.id}>
          <UserCard user={item} />
        </ListItem>
      );
    })}
  </List>
);

export default UserList;
