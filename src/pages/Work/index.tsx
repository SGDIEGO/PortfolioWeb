import Title from "../../components/Title";
import WorkCard from "../../components/Work";

const projects = {
    halo: "https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bb755690ccd9ae7788bbdf_662919706c1ecb05a7e9ea06_img1.webp",
    nettra: "https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bb755690ccd9ae7788bbe2_6629199853afcdeb0a505757_img2.webp",
    heytutor: "https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bb755690ccd9ae7788bbb0_662919bb5d7adae8f8ef1ea4_img3.webp",
    nettra2: "https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bb755690ccd9ae7788bc55_662919e628f1a30153305e17_img4.webp"
}

export default function Work() {
    return <div className="grid content-center">
        <div className="grid place-items-center">
            <Title content={"Works"}/>
            <p className="">Some of the noteworthy projects I have built:</p>
        </div>
        <div className="grid gap-5">
            <WorkCard img={projects.halo} title={"Fiskill"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."} tag={["wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw","wdw",]} />
            <WorkCard img={projects.halo} title={"Fiskill"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."} tag={["wdw"]} />
            <WorkCard img={projects.halo} title={"Fiskill"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."} tag={["wdw"]} />
            <WorkCard img={projects.halo} title={"Fiskill"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."} tag={["wdw"]} />
        </div>
    </div>
}