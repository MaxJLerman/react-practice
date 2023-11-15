import { User } from "@/types/User.types";
import { Card } from "@/elements/Card/Card";

import styles from "./UsersList.module.scss";

interface UsersListProps {
  users: User[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
