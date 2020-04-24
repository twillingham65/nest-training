import { SetMetadata } from '@nestjs/common';

export const PlainBody = (...args: string[]) => SetMetadata('plain-body', args);
