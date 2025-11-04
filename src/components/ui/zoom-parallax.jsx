'use client';;
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function ZoomParallax({
    images
}) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center 
							${index === 1 ? '[&>div]:!-top-[28vh] [&>div]:!left-[11vw] [&>div]:!h-[25vh] [&>div]:!w-[45vw]' : ''} 
							${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[30vw] [&>div]:!h-[35vh] [&>div]:!w-[30vw]' : ''} 
							${index === 3 ? '[&>div]:!left-[29vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''}
							 ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} 
							 ${index === 5 ? '[&>div]:!top-[28.5vh] [&>div]:!-left-[20.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} 
							 ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}>
                            <div className="relative h-[25vh] w-[27.5vw]  px-[1vw]">
								<img
                                    src={src || '/placeholder.svg'}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className=" size-full object-cover bg-cover" />
							</div>
                        </motion.div>
                    );
				})}
			</div>
        </div>
    );
}
