import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


export const ShuffleHero = () => {
  return (
    <div className="w-full">
      
    <section
      className="w-full bg-white   rounded lg:px-8 px-4 pb-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
        
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Who We Are ?
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
         Your Dependable Power Partner
        </h3>
        <p className="text-base lg:text-lg text-muted-foreground my-4 md:my-6">
        Solvolt is an international brand which was founded in Vietnam. We deal with UPS, solar panels, inverters, batteries, and other related power solutions.
        <br />
        <br />

We concentrate on customer values by providing quality of products and services in the most effective and innovative methods.

We prioritize the environment and life with power management technology which is more sustainable and reliable because that is what really matters.
<br />
<br />
We will be your dependable partner and will constantly develop quality for the products to all of our customers all around the world.
        </p>
        {/* <button
          className={cn(
            "border border-primary-primary text-primary-primary  hover:text-primary-foreground font-medium py-2 px-4 rounded-md",
            "transition-all hover:bg-primary-primary/50 hover:border-none active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}>
          Find a class
        </button> */}
      </div>
      <ShuffleGrid />
    </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1679917152411-353fd633e218?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    src: "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    src: "https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    src: "https://plus.unsplash.com/premium_photo-1679953756235-b26cddf1eb1c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    src: "https://plus.unsplash.com/premium_photo-1663091590389-346a970e3b2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    src: "https://plus.unsplash.com/premium_photo-1678766819822-d936a3d6a3ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    src: "https://plus.unsplash.com/premium_photo-1679437976868-f7f3c805b0d4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    src: "https://plus.unsplash.com/premium_photo-1668078530961-32f4a1107791?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    src: "https://plus.unsplash.com/premium_photo-1671808063745-9ab305653b8c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-muted  border-primary-primary/50 "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[460px] gap-1 ">
      {squares.map((sq) => sq)}
    </div>
  );
};
