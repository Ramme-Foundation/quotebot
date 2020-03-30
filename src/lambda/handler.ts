import { Context } from 'aws-lambda';
import querystring from 'querystring';
import { SlackRequest } from '../types';

import './database/connection';

import { readQuote } from './methods/read';
import { addQuote } from './methods/add';

export async function handler(event: any, context: Context) {
  const params: SlackRequest = (querystring.parse(
    event.body
  ) as unknown) as SlackRequest;
  const command = params.text.split(' ')[0];
  switch (command) {
    case 'add':
      return addQuote(event, context);
    case 'read':
    default:
      return readQuote(event, context);
  }
}
