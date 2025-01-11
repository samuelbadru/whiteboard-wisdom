import { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: Image,
    ...components,
  };
}
