import { FC, useState } from "react";
import SearchForm from "./components/search-form";
import { Container } from "./styled-components/app";
import { getUserAsync } from "./services/user";
import UserList from "./components/user-list";

const App: FC = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);

  const handleSearch = async (input: string) => {
    try {
      const response = await getUserAsync(input);
      const data = response.map((item: UserResponse) => ({
        id: item.id,
        login: item.login,
        repos_url: item.repos_url,
      }));
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch} />
      {users.length > 0 ? (
        <UserList users={users} />
      ) : (
        <p className="text-center">Username not found</p>
      )}
    </Container>
  );
};

export default App;
