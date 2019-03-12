import { Logger } from "log4js";

export function configure(config: string | object, opts: object): any;

export function getLogger(categoryName: string, ...prefix: string[]): Logger;