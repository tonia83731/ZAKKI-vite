import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";
import { SubTitle } from "../../styles/Title";


export default function FooterSection({ title, data }) {
  const listItems = data.map((item) => {
    return (
      <FooterItem key={item.id}>
        <a href={item.herf}>
          <FooterLink>{item.name}</FooterLink>
        </a>
      </FooterItem>
    );
  });
  return (
    <FooterGroup>
      <SubTitle color={colorList.white}>{title}</SubTitle>
      <FooterList>{listItems}</FooterList>
    </FooterGroup>
  );
}

export const FooterGroup = styled.section`
  margin-bottom: 2.5em;
`;
const FooterList = styled.ul`
  font-size: 0.75em;
  margin-top: 1.2em;
`
const FooterItem = styled.li`
  margin-bottom: 1em;
`
const FooterLink = styled.a`
  color: ${colorList.white}
`
