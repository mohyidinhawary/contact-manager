import {VariantProps} from"class-variance-authority";
import { titleVariants } from "../components/header/header.style";
import { ReactNode } from "react";
export interface IHeaderProps extends VariantProps<typeof titleVariants>{
    children?:ReactNode; 
}