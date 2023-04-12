import Interval, { io } from '@interval/sdk';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class IntervalService implements OnApplicationBootstrap {
  private interval: Interval;

  constructor() {
    this.interval = new Interval({
      apiKey: '<Redacted>',
    });

    this.interval.routes.add('api_key', {
      name: 'Manage API keys',
      description: 'Create, update, and delete API keys',
      handler: async () => {
        const apiKeys = [
          {
            id: 1,
            name: 'Key 1',
            createdAt: new Date(),
          },
        ];

        await io.display.table('API keys', { data: apiKeys });
      },
    });
  }

  onApplicationBootstrap() {
    this.interval.listen();
  }
}
