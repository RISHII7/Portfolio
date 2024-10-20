import StatsItem from "./StatsItem";

const statsData = [
    {
        endCountNum: 300,
        endCountText: "+",
        text: "Commits on GitHub"
    },
    {
        endCountNum: 20,
        endCountText: "+",
        text: "Websites Built"
    },
    {
        endCountNum: 10,
        endCountText: "K+",
        text: "Lines of Code Written"
    },
]

const Stats = () => {
    return (
        <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
            {statsData.map((item,index) => {
                return (
                    <StatsItem 
                        key={index}
                        endCountNum={item.endCountNum}
                        endCountText={item.endCountText}
                        text={item.text}
                    />
                );
            })}
        </section>
    );
};
export default Stats;