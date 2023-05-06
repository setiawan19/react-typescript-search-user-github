import { FC } from "react";
import RepoCard from "./repository-card";
import { List, ListItem } from "../styled-components/repository-list";
import { CardRepository } from "../styled-components/repository-card";
const RepoList: FC<RepositoryListProps> = ({ repos }) => {
  return (
    <List>
      {repos.length > 0 ? (
        repos.map((repo) => (
          <ListItem key={repo.id}>
            <RepoCard
              title={repo.name}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
            />
          </ListItem>
        ))
      ) : (
        <ListItem>
          <CardRepository>
            <p>Empty Repositories</p>
          </CardRepository>
        </ListItem>
      )}
    </List>
  );
};

export default RepoList;
