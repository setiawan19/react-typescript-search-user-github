import { FC } from "react";
import {
  CardRepository,
  Description,
  Title,
  TitleSpan,
} from "../styled-components/repository-card";
import IconStar from "../assets/star.svg";
const RepoCard: FC<RepositoryCardProps> = ({
  title,
  description,
  stargazers_count,
}) => {
  return (
    <CardRepository>
      <Title>
        {title}
        <TitleSpan className={"float-right"}>
          {stargazers_count}{" "}
          <img src={IconStar} style={{ width: 18 }} alt={"icon"} />
        </TitleSpan>
      </Title>
      <Description>{description}</Description>
    </CardRepository>
  );
};

export default RepoCard;
