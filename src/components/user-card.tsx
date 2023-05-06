import { FC, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Title, TitleSpan } from "../styled-components/user-card";
import IconArrowUp from "../assets/arrow-up.svg";
import IconArrowDown from "../assets/arrow-down.svg";
import { getRepositoriesAsync } from "../services/repository";
import RepoList from "./repository-list";
const UserCard: FC<UserCardProps> = ({ user }) => {
  const [dataUser, setDataUser] = useState<User>(user);
  const [userRepositories, setUserRepositories] = useState<RepositoryListProps>(
    {
      repos: [],
    },
  );

  const handleOpen = async () => {
    if (dataUser.repos_url) {
      const response = await getRepositoriesAsync(dataUser.repos_url);
      setUserRepositories((prev) => ({
        ...prev,
        repos: response,
      }));
    }

    setDataUser((prev) => ({
      ...prev,
      isShowRepos: !dataUser.isShowRepos,
    }));
  };

  useEffect(() => {}, [userRepositories]);

  return (
    <>
      <Card>
        <Title>
          {dataUser.login}
          <TitleSpan className={"float-right"}>
            <Button
              onClick={() => handleOpen()}
              aria-controls={`${dataUser.id}-collapse-repo`}
              aria-expanded={dataUser.isShowRepos}>
              {dataUser.isShowRepos ? (
                <img
                  src={IconArrowUp}
                  style={{ width: 10 }}
                  alt={"icon-arrow-up"}
                />
              ) : (
                <img
                  src={IconArrowDown}
                  style={{ width: 10 }}
                  alt={"icon-arrow-down"}
                />
              )}
            </Button>
          </TitleSpan>
        </Title>
      </Card>
      {dataUser.isShowRepos && <RepoList repos={userRepositories?.repos} />}
    </>
  );
};

export default UserCard;
