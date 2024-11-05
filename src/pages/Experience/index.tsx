import ExperienceCard from "../../components/Experience";
import Title from "../../components/Title";

export default function Experience() {
    return <div className="">
        <Title content={"Experience"}/>
        <p className="flex justify-center">Here is a quick summary of my most recent experiences:</p>
        <div className="grid gap-5 place-content-center">
            <ExperienceCard title={"Senior Frontend Developer"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus laborum cupiditate distinctio nemo eaque veniam! Magni temporibus sed quasi commodi facere, ex, eum dicta optio sapiente, architecto laborum deserunt?"} startdate={"Nov 2021"} finishdate={"Present"} company={"Universidad Nacional de Trujillo"}/>
            <ExperienceCard title={"Senior Frontend Developer"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus laborum cupiditate distinctio nemo eaque veniam! Magni temporibus sed quasi commodi facere, ex, eum dicta optio sapiente, architecto laborum deserunt?"} startdate={"Nov 2021"} finishdate={"Present"} company={"Universidad Nacional de Trujillo"}/>
            <ExperienceCard title={"Senior Frontend Developer"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus laborum cupiditate distinctio nemo eaque veniam! Magni temporibus sed quasi commodi facere, ex, eum dicta optio sapiente, architecto laborum deserunt?"} startdate={"Nov 2021"} finishdate={"Present"} company={"Universidad Nacional de Trujillo"}/>
            <ExperienceCard title={"Senior Frontend Developer"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus laborum cupiditate distinctio nemo eaque veniam! Magni temporibus sed quasi commodi facere, ex, eum dicta optio sapiente, architecto laborum deserunt?"} startdate={"Nov 2021"} finishdate={"Present"} company={"Universidad Nacional de Trujillo"}/>
        </div>
    </div>
}