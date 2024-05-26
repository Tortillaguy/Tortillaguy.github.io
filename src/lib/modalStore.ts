import { atom } from "nanostores";
import type { Project } from "../types";

export const modalData = atom<Project | undefined>();
