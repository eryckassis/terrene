export interface SectionProps {
  className?: string;
  id?: string;
}

export interface AnimatableProps {
  animate?: boolean;
  animateOnScroll?: boolean;
  delay?: number;
}

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContractInfo {
  type: "email" | "phone" | "address";
  label: string;
  value: string;
  href?: string;
}
