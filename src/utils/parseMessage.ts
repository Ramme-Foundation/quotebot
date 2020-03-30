export function parseMessage(message: string) {
  return message.replace(/(<@\w+\|\w+>)/g, '');
}
