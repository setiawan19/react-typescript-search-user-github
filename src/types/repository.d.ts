interface RepositoryListProps {
  repos: {
    id: number;
    name: string;
    description: string;
    stargazers_count?: number;
  }[];
}

interface RepositoryCardProps {
  title: string;
  description: string;
  stargazers_count?: number;
}

interface RepoResponse {
  id: number;
  name: string;
  description: string;
  stargazers_count?: number;
}
