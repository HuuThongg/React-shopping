import BlackFriday from "./hero/BlackFriday";
import SetGift from "./hero/SetGift";
const MainContent = () => {
  return (
    <section className="pt-[105px] md:pt-[120px] relative w-full ">
      <div className="relative w-full">
        <BlackFriday />
        <SetGift/>
      </div>
    </section>
  );
}

export default MainContent