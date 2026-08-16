import { cn } from '@/lib/utils';
import React from 'react';

export function FeatureCard({
    feature,
    className,
    ...props
}) {
	const p = genRandomPattern();

	return (
        <div className={cn('relative overflow-hidden p-6 rounded-2xl bg-black/5 backdrop-blur-xl border border-black/10 ring-1 ring-black/5 shadow-xl', className)} {...props}>
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-black/10 blur-2xl" />
                <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-black/5 blur-3xl" />
            </div>
            
            <div
                className="pointer-events-none absolute top-0 left-1/4 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(black,transparent)]">
				<div
                    className="from-black/10 -skew-x-12 to-black/20 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
                        width={20}
                        height={20}
                        x="-16"
                        y="4"
                        squares={p}
                        className="fill-black/10 stroke-black/20 absolute inset-0 h-full w-full mix-blend-overlay" />
				</div>
                
			</div>
            <feature.icon className="text-black/90 size-6" strokeWidth={1} aria-hidden />
            <h3 className="mt-8 text-sm md:text-base text-b/90">{feature.title}</h3>
            <p className="text-b/80 relative z-20 mt-2 text-xs font-light">{feature.description}</p>
        </div>
    );
}

function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}) {
	const patternId = React.useId();

	return (
        <svg aria-hidden="true" {...props}>
            <defs>
				<pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
				<svg x={x} y={y} className="overflow-visible ">
					{squares.map(([x, y], index) => (
						<rect
                            strokeWidth="0"
                            key={index}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height} />
					))}
				</svg>
			)}
        </svg>
    );
}

function genRandomPattern(length) {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}
