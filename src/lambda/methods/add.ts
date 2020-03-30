import { Context } from 'aws-lambda';
import querystring from 'querystring';
import { SlackRequest } from '../../types';

import '../database/connection';
import { parseUser } from '../../utils/parseUser';
import { QuoteModel } from '../database/QuoteModel';
import { parseMessage } from '../../utils/parseMessage';
import { Slack } from '../../Slack';

export async function addQuote(event: any, context: Context) {
  const params: SlackRequest = (querystring.parse(
    event.body
  ) as unknown) as SlackRequest;

  const commandSplit = params.text.split(' ');
  const messageWithoutCommand = commandSplit
    .slice(1, commandSplit.length + 1)
    .join(' ');

  const user = parseUser(messageWithoutCommand);
  const message = parseMessage(messageWithoutCommand);
  const quoteDocument = ((await QuoteModel.create({
    quote: message,
    user_id: user
  })) as unknown) as { user_id: string; quote: string };

  try {
    await new Slack().postMessage({
      channel: params.channel_id,
      text: `Saved quote by <@${quoteDocument.user_id}>: ${quoteDocument.quote}`
    });
    return { statusCode: 200 };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
