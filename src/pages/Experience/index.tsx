import ExperienceCard from "../../components/Experience";
import Title from "../../components/Title";

export default function Experience() {
    return <div className="grid gap-3">
        <Title content={"Experience"} />
        <p className="flex justify-center">Here is a quick summary of my most recent experiences:</p>
        <div className="grid gap-5 place-content-center">
            <div className="flex justify-center">
                <i className="fa-solid fa-arrow-up animate-bounce"></i>
            </div>

            <ExperienceCard
                title={"Frontend developer"}
                description={"Analysis of business requirements. Use of agile scrum methodology. Design and implementation of database for application. Design and implementation of application components."}
                startdate={"Aug, 2024"}
                finishdate={"Present"}
                company={"Tiendas Babenito SAC"}
            />

            <ExperienceCard
                title={"Full stack web developer - Bootcamp"}
                description={"Full stack web programming bootcamp. Creation of applications based on Nodejs. Use of tools for creating servers, frontend applications and deployment in AWS"}
                startdate={"Aug, 2024"}
                finishdate={"Present"}
                company={"Proinnovate - Make it real"}
            />

            <ExperienceCard
                title={"Oracle Next Education G6 - Bootcamp"}
                description={"Backend developer course. Creation of applications based on Java and SpringBoot. Basic web programming teaching."}
                startdate={"Mar, 2024"}
                finishdate={"Jul, 2024"}
                company={"Oracle - Alura"}
            />

            <ExperienceCard
                title={"Computer Science Enginner - University"}
                description={"Computer engineering career. Theoretical and practical knowledge in different areas of computing."}
                startdate={"Jun, 2021"}
                finishdate={"Present"}
                company={"National University of Trujillo, Peru"}
            />
        </div>
    </div>
}