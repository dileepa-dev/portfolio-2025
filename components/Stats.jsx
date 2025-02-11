"useClient";

import CountUp from "react-countup";
const stats = [
    { number: 1, title: "Years of Experience" },
    { number: 10, title: "Projects" },
    { number: 7, title: "Technologies" },
    { number: 170, title: "Commits" },
]
const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                                <CountUp 
                                    end={stat.number} 
                                    duration={5} 
                                    delay={2} 
                                    className="text-4xl xl:text-6xl font-extrabold text-accent" 
                                />
                                <p className={`${stat.title.length < 15 ? "max-w-[100px]" :" max-w-[150px]"} leading-snug text-white/60`}>{stat.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;