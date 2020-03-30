export interface SlackRequest {
  token: string;
  team_id: string;
  team_domain: string;
  channel_id: string;
  // example 'vasawatch-test'
  channel_name: string;
  // example 'U542F32231'
  user_id: 'U542F32JU';
  // example 'myusername'
  user_name: string;
  // example '/quote'
  command: '/quote';
  // example 'add something @eller'
  text: string;
  response_url: string;
  trigger_id: string;
}
