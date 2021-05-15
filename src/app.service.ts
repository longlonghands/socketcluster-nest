import { Injectable } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(private readonly adapterHost: HttpAdapterHost) {}

  getHello(): string {
    return 'Hello World!';
  }
}
