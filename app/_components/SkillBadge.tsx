// Skill badge component
type SkillBadgeProps = {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    text: string;
    color: string;
    className?: string;
};

export const SkillBadge = ({ icon: Icon, text, color, className = "" }: SkillBadgeProps) => {
    return (
        <div
            className={`bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium 
                      border shadow-lg transition-all flex items-center gap-2 hover:scale-105 ${className}`}
            style={{
                borderColor: `${color}30`
            }}
        >
            {Icon && <Icon className="w-4 h-4" style={{ color }} />}
            <span>{text}</span>
        </div>
    );
};