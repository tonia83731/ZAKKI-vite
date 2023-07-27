
import { PageTitle } from "../components/RepeatComponent/PageTitle";
import { MainContainer, PageContainer } from "../styles/Container";
import { BreakPadding } from "../styles/BreakPadding";
import BeneficiaryStory from "../components/Main/Stories/BeneficiaryStory";
import VolunteerStory from "../components/Main/Stories/VolunteerStory";
import Subscribe from "../components/Main/Subscribe";





export default function StoriesPage() {
  return (
    <main>
      <MainContainer>
        <section id="stories">
          <PageContainer>
            <PageTitle
              title="Our Stories"
              subtitle="Listen to the beneficiary partner and our volunteers about their ZAKKI participate experience"
            />
            <div>
              <BeneficiaryStory />
              <BreakPadding />
              <VolunteerStory />
            </div>
          </PageContainer>
        </section>
        <Subscribe />
      </MainContainer>
    </main>
  );
}

