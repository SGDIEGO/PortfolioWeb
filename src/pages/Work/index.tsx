import Title from "../../components/Title";
import WorkCard from "../../components/Work";

const projects = {
    taskManager: {
        img: "./taskmanager.png",
        link: "https://github.com/SGDIEGO/Task-Manager-App"
    },
    movieUI: {
        img: "./movieui.png",
        link: "https://github.com/SGDIEGO/Movie-UI"
    },
    flowerShopping: {
        img: "./floreria.png",
        link: "https://github.com/SGDIEGO/Floreria"
    },
    library: {
        img: "./library.png",
        link: "https://github.com/SGDIEGO/ProyectoDesarrolloSoftware"
    },
}

export default function Work() {
    return <div className="grid content-center ">
        <div className="grid place-items-center">
            <Title content={"Works"} />
            <p className="">Some of the noteworthy projects I have built:</p>
        </div>
        <div className="grid gap-5">
            <WorkCard img={projects.taskManager.img} title={"Task Manager App"} description={"App that allow manage tasks of users. Allow fillters, categories and localstorage data."} tag={["JS", "CSS", "HTML"]} reverse={false} redirect={projects.taskManager.link} />
            <WorkCard img={projects.movieUI.img} title={"Movie UI App"} description={"App to show movies and series online free (Beta) using themoviedb api."} tag={["TS", "CSS", "HTML", "TAILWIND", "REACT", "REACT-ROUTER", "NODEJS",]} reverse={true} redirect={projects.movieUI.link} />
            <WorkCard img={projects.flowerShopping.img} title={"Flower shopping"} description={"Flower shopp based roles app, with backend, frontend and database."} tag={["TS", "CSS", "HTML", "REACT", "REACT-ROUTER", "NODEJS", "GOLANG", "POSTGRESQL", "SCRUM"]} reverse={false} redirect={projects.flowerShopping.link} />
            <WorkCard img={projects.library.img} title={"Library manager"} description={"Library manager with roles access, use backend, frontend and database."} tag={["TS", "CSS", "HTML", "REACT", "REACT-ROUTER", "GOLANG", "POSTGRESQL", "SCRUM", "WAILS"]} reverse={true} redirect={projects.library.link} />
        </div>
    </div>
}