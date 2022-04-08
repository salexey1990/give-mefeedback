import { Request } from 'express';

export interface IRequestExtended extends Request {
    reqId: string;
}