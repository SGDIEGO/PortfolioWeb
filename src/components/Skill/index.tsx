interface SkillProps {
    title: string,
    img: JSX.Element,
}

export default function Skill(props: SkillProps) {
    return <div className="grid place-items-center gap-3">
        <div className="w-[64px] h-[64px]">
            {props.img}
        </div>
        <span>{props.title}</span>
    </div>
}