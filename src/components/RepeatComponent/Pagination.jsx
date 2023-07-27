import { styled } from "styled-components";
import { colorList } from "../../styles/ColorSettings";


// pagination
export function Pagination({ data }) {
  const pageItem = data.map((page) => {
    return (
      <PaginationLink
        href="#"
        key={page.id}
        active={page.isActive}
      >
        {page.id}
      </PaginationLink>
    );
  });
  return (
    <PaginationDIV>
      <PaginationLink href="#"> &laquo;</PaginationLink>
      {pageItem}
      <PaginationLink href="#"> &raquo;</PaginationLink>
    </PaginationDIV>
  );
}

const PaginationDIV = styled.div`
  padding-top: 1em;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1em;
`;

const PaginationLink = styled.a`
  width: 2em;
  height: 2em;
  line-height: 2em;
  color: ${colorList.neutral_90};
  &:hover {
    background-color: ${colorList.green_hover};
    border-radius: 5px;
  }

  ${(props) =>
    props.active &&
    `
      border:1px solid ${colorList.primary};
      border-radius: 5px;
      color: ${colorList.primary};
      font-weight: bold;
    `}
`;