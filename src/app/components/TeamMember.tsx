import MyCard from "@/@/components/MyCard";
interface TeamMemberProps {
    name: string;
    role: string;
    image: any;
    delay: number;
    skills?: string[];
}

const TeamMember = ({ name, role, image, delay, skills = [] }: TeamMemberProps) => {
    return (
        <div className={`glass-card p-6 animate-fade-up animate-once animate-fill-both`} style={{ animationDelay: `${delay}ms` }}>
            <MyCard
                img={image}
            />
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-muted-foreground text-sm mb-3">{role}</p>

            {skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill, i) => (
                        <span key={i} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TeamMember;