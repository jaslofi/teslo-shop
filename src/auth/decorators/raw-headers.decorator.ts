import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";


export const RawHeaders = createParamDecorator(
    (data, cxt: ExecutionContext) => {

        const req = cxt.switchToHttp().getRequest();

        return req.rawHeaders;
    }
);