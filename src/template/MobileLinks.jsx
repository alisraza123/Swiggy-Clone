
const MobileLinks = ({ name, icon }) => {
  return (
    <li className="flex items-center gap-2 md:text-[15px] text-[12px] bg-gray-300 p-2 rounded-md bg-opacity-25 duration-200 text-black hover:bg-opacity-35 shadow">
      {icon}
      {name}
    </li>
  );
};

export default MobileLinks;
