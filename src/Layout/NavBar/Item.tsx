interface NavBarItemProps {}

const Item: React.FC = (props) => {
  const { children } = props;

  return (
    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-gray-500 mr-6 cursor-pointer">
      {children}
    </li>
  );
};

export default Item;
