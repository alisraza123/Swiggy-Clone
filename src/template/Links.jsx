
const Links = ({ name, icon }) => {
  return (
    <li className="flex items-center gap-2 md:text-[15px] text-[12px] ">
      {icon}
      {name}
    </li>
  );
};

export default Links;
