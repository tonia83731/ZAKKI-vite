import { ReactComponent as CheckedIcon } from "../../../assets/svg/Checked.svg";

export default function FilterList({ className, data }) {
  const listItems = data.map((item) => {
    return (
      <li className={`${className}-item`} key={item.id}>
        <a href={item.herf} className={`${className}-link`}>
          {item.isChecked === true ? <CheckedIcon /> : ""}
          {item.name}
        </a>
      </li>
    );
  });

  return <ul className={`${className}-list`}>{listItems}</ul>;
}
