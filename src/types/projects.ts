import { ProjectCategory } from "./projects";
import type { ImageData } from "./common";

export type ProjectCategory = "residential" | "commercial" | "cultural" | "landscape";

export type ProjectStatus = "completed" | "in-progress" | "concept";

export interface Project {
  id: string;
  title: string;
  description: string;
  info: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: number;
  location: string;
  image: ImageData;
  featured?: boolean;
}

export type ProjectCard = Pick<Project, "id" | "title" | "description" | "info" | "image">;
