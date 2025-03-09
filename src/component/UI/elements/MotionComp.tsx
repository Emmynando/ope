"use client";
import React from "react";
import {
  motion,
  useReducedMotion,
  Variants,
  HTMLMotionProps,
  SVGMotionProps,
} from "framer-motion";

export interface IMotionComponentProps extends HTMLMotionProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
  variants?: Variants;
  className?: string;
  href?: string;
  src?: string;
}

type MotionComponentKey = keyof typeof motion;

type MotionProps<T extends keyof React.JSX.IntrinsicElements> =
  T extends keyof React.HTMLElementType
    ? HTMLMotionProps<T>
    : T extends keyof React.SVGElementType
    ? SVGMotionProps<T>
    : never;

const MotionComponent = <T extends keyof React.JSX.IntrinsicElements = "div">({
  as,
  variants,
  children,
  className,
  href,
  src,
  ...rest
}: IMotionComponentProps & MotionProps<T> & { as?: T }) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as as MotionComponentKey] as React.ElementType;
  return (
    <Component
      className={className}
      href={href}
      src={src}
      variants={shouldReduceMotion ? { visible: { opacity: 1 } } : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      {...rest}>
      {children}
    </Component>
  );
};

export default MotionComponent;
