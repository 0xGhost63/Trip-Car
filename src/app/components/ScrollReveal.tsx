import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    delay?: number;
}

export function useScrollReveal<T extends HTMLElement>(
    options: UseScrollRevealOptions = {}
) {
    const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", delay = 0 } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, delay]);

    return { ref, isVisible };
}

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "left" | "right" | "fade";
}

export function ScrollReveal({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: ScrollRevealProps) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ delay });

    const directionStyles: Record<string, string> = {
        up: "translate-y-12",
        left: "-translate-x-12",
        right: "translate-x-12",
        fade: "",
    };

    const hiddenTransform = directionStyles[direction] || "translate-y-12";

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? "opacity-100 translate-y-0 translate-x-0"
                    : `opacity-0 ${hiddenTransform}`
                } ${className}`}
        >
            {children}
        </div>
    );
}
