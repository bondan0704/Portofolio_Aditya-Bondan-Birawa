import Image from "next/image"
import Link from "next/link"
import { featureWork } from "@/data/featureWork";

const FeaturedWork = () => {

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2">
                            {featureWork?.map((value: any, index: number) => {
                                const isRightCol = index % 2 === 1;

                                return (
                                    <div
                                        key={index}
                                        className={`group flex flex-col gap-3.5 sm:gap-5 p-4 sm:p-7 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                    >
                                        <Link href={value?.url || "/"} className="overflow-hidden block aspect-[3/4] rounded-lg border border-primary/5">
                                            <Image
                                                src={value?.image}
                                                alt={value?.title || "Project Image"}
                                                width={490}
                                                height={653}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                                            />
                                        </Link>
                                        <div className="flex flex-col gap-2 sm:gap-3 px-1">
                                            <div className="flex flex-col gap-1">
                                                <Link href={value?.url || "/"}>
                                                    <h4 className="group-hover:text-violet-700 transition-colors duration-300">
                                                        {value?.title}
                                                    </h4>
                                                </Link>
                                                <p className="text-secondary/70 text-sm font-medium">
                                                    {value?.roles?.join(', ')}
                                                </p>
                                            </div>
                                            <p className="text-secondary text-sm sm:text-base leading-relaxed line-clamp-3">
                                                {value?.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork