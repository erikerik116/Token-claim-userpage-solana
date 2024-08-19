import { Banner } from "../../components/section/banner";
import { Hello } from "../../components/section/hello";
import { Pixel } from "../../components/section/pixel";
import { Tangible } from "../../components/section/tangible";
import { Team } from "../../components/section/team";
import { Economy } from "../../components/section/economy";
import { Support } from "../../components/section/Support";
import { Connect } from "../../components/section/connect";

import FlowingTitle from "../../components/section/flowing";

const Home = () => {
  return (
    <>
      <Banner />
      <Hello />
      <Pixel />
      <FlowingTitle text="Kiki, do you love me? Are you HUNGRY? Say you’ll never ever EAT ME. " />
      <Tangible />
      <Team />
      <FlowingTitle text="We hungry. We sleepy. Lofty gum tree tops are where your will find use. Either sleeping or eating." />
      <Economy />
      <Support />
      <Connect />
    </>
  );
};

export default Home;
