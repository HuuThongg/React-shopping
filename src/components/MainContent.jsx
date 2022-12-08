import BlackFriday from "./hero/BlackFriday";
import SetGift from "./hero/SetGift";
import NewArrivals from "./Hompage/NewArrivals";
const MainContent = () => {
  return (
    <section className="relative w-full pt-[95px] transition-all duration-500 ease-in-out  md:pt-[100px]">
      <div className="relative w-full">
        <BlackFriday />
        <SetGift />
        <NewArrivals />
      </div>
    </section>
  );
}

export default MainContent