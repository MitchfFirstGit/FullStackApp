export type Props = {
  setNotification: (msg: string, notificationType: string, timeout?: number) => void;
  register: ({ }: { name: string, email: string, password: string }) => void;
};
