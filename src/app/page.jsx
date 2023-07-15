import HeroElement from "./components/HeroElement";
import { heroData } from "../../public/data/webStaticData";

export default function Home() {
    return <HeroElement data={heroData} />;
}
