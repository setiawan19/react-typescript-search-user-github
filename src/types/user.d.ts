interface User {
  id: number;
  login: string;
  repos_url?: string;
  isShowRepos?: boolean;
}

interface UserListProps {
  users: User[];
}

interface UserCardProps {
  user: {
    id: number;
    login: string;
    repos_url?: string;
    isShowRepos?: boolean;
  };
}

interface UserResponse {
  id: number;
  login: string;
  repos_url?: string;
}
