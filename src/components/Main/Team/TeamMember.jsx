import { dummyTeamData } from "../../../Data/TeamData";

import { ReactComponent as MemberEmailIcon } from "../../../assets/logo/team/member_email.svg";
import { ReactComponent as MemberLinkedInIcon } from "../../../assets/logo/team/member_linkedin.svg";
import { ReactComponent as MemberWebsiteIcon } from "../../../assets/logo/team/member_website.svg";
import { ReactComponent as MemberTwitterIcon } from "../../../assets/logo/team/member_twitter.svg";
import { ReactComponent as MemberInstagramIcon } from "../../../assets/logo/team/member_instagram.svg";

import { styled } from "styled-components";
import { breakpoints } from "../../../styles/Breakpoints";
import { colorList } from "../../../styles/ColorSettings";
import { SubTitle2 } from "../../../styles/Title";
import { CardDiv, CardBody } from "../Program/ProgramCard";

export default function TeamMember() {
  return (
    <MemberCardGroup>
      {dummyTeamData.map((people) => {
        return (
          <CardDiv background={people.url} key={people.id}>
            <MemberCardBody>
              <SubTitle2>{people.name}</SubTitle2>
              <JobTitle>{people.jobTitle}</JobTitle>
              <div class="card-body-social-link">
                {people.email.length !== 0 ? (
                  <MemberSocLink href={`mailto:${people.email}`}>
                    <MemberEmailIcon />
                  </MemberSocLink>
                ) : (
                  ""
                )}
                {people.website.length !== 0 ? (
                  <MemberSocLink href={people.website}>
                    <MemberWebsiteIcon />
                  </MemberSocLink>
                ) : (
                  ""
                )}
                {people.linkedIn.length !== 0 ? (
                  <MemberSocLink href={people.linkedIn}>
                    <MemberLinkedInIcon />
                  </MemberSocLink>
                ) : (
                  ""
                )}
                {people.twitter.length !== 0 ? (
                  <MemberSocLink href={people.twitter}>
                    <MemberTwitterIcon />
                  </MemberSocLink>
                ) : (
                  ""
                )}
                {people.instagram.length !== 0 ? (
                  <MemberSocLink href={people.instagram}>
                    <MemberInstagramIcon />
                  </MemberSocLink>
                ) : (
                  ""
                )}
              </div>
            </MemberCardBody>
          </CardDiv>
        );
      })}
    </MemberCardGroup>
  );
}



const MemberCardBody = styled(CardBody)`
  text-align: center;
`
const JobTitle = styled.div`
  font-size: 0.9em;
  color: ${colorList.neutral_70};
  margin-bottom: 0.5em;
`;
const MemberSocLink = styled.a`
  margin: 0 2px;
  svg {
    width: auto;
    height: 1.5em;
    path{
      fill: ${colorList.black_80}
    }
  }
`;
const MemberCardGroup = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1em;
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;