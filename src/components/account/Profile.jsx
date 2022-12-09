import { useLocation } from "react-router";
import Tab from "./Tab";

const Profile = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <section
      className={`relative z-[1] ${
        pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
      }   bg-[#f7f7f7] `}
    >
      <div className="">
        <Tab />
      </div>
      <div className=" mx-auto   max-w-[1280px]">
        <div>
          <p>Profile</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
