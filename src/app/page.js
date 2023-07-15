import HeroElement from "./components/HeroElement";
import { heroData } from "../../public/data/heroData";

export default function Home() {
    return <HeroElement data={heroData} />;
}
