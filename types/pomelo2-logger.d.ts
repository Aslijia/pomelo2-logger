import { Logger } from "log4js";

export function configure(config: string | object, opts: object);

export function getLogger(categoryName: string, ...prefix: string[]): Logger;