import dotenv from 'dotenv';
import { WebClient } from '@slack/web-api';
dotenv.config();

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

export class Slack {
  async postMessage(messageObject: { channel: string; text: string }) {
    return await web.chat.postMessage(messageObject);
  }
}
