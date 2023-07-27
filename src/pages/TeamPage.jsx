import { styled } from "styled-components";
import { PageTitle } from "../components/RepeatComponent/PageTitle";
import { PageContainer } from "../styles/Container";

import TeamMember from "../components/Main/Team/TeamMember";

export default function TeamPage() {
  return (
    <main>
      <section id="team">
        <div>
          <TeamBgDiv>
            <PageTitleBg>
              <PageTitle
                title="Team"
                subtitle="Thanks to all the amazing team members who commit their time for ZAKKI's project"
              />
            </PageTitleBg>
          </TeamBgDiv>
          <TeamContainer>
            <TeamMember />
          </TeamContainer>
        </div>
      </section>
    </main>
  );
}

const TeamBgDiv = styled.div`
  background: url("https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  min-height: 215px;
  position: relative;
`;

const PageTitleBg = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 20%,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(255, 255, 255, 0.55) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const TeamContainer = styled(PageContainer)`
  width: 100%;
  max-width: 1200px;
`;

