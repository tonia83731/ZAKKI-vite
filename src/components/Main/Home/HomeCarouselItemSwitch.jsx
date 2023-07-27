import HomeCarouselItem from "./HomeCarouselItem";

const mainPageData = [
  {
    id: 1,
    title: "Donate to us",
    link: "",
  },
  {
    id: 2,
    title: "Become a Volunteer",
    link: "/joinus",
  },
];

const programPageData = [
  {
    id: 1,
    title: "View ZAKKI's Program",
    link: "/programs",
  },
];

const storiesPageData = [
  {
    id: 1,
    title: "View Member Stories",
    link: "/stories",
  },
];


export default function HomeCarouselItemSwitch({ page }) {
  if (page === "main") {
    return (
      <HomeCarouselItem
        page="main"
        title="Helping others through the "
        boldTitle='"REAL ACTION"'
        data={mainPageData}
      />
    );
  }
  if (page === "program") {
    return (
      <HomeCarouselItem
        page="program"
        title="Celebrating! Over 1K people attended "
        boldTitle="ZAKKI’s 2022 event party"
        data={programPageData}
      />
    );
  }
  return (
    <HomeCarouselItem
      page="story"
      title=""
      boldTitle="Listening to Those Who Matter Most"
      data={storiesPageData}
    />
  );
}