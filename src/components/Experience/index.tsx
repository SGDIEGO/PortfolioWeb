interface ExperienceProps {
    title: string,
    description: string
    startdate: string
    finishdate: string
    company: string
}

export default function ExperienceCard(props: ExperienceProps) {
    return <div className="grid gap-3 shadow-lg p-5 max-w-[890px] rounded-md text-body2 bg-palette dark:bg-palette_800 tablet:flex tablet:gap-20">
        <div className="text-green-500">
            <span className="font-tiny5 text-subtitle">{props.company}</span>
        </div>
        <div className="">
            <span className="font-semibold">{props.title}</span>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="row-start-2">
            <span>{props.startdate} - {props.finishdate}</span>
        </div>
    </div>
}