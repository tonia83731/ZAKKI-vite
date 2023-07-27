// unordered list
export function UnorderedList({ className, data }) {
  const listItems = data.map((item) => {
    return (
      <li className={`${className}-item`} key={item.id}>
        <a href={item.herf} className={`${className}-link`}>
          {item.name}
        </a>
      </li>
    );
  });

  return <ul className={`${className}-list`}>{listItems}</ul>;
}
