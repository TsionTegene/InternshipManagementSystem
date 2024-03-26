import { useMutation } from '@tanstack/react-query';
import { createMessage } from '../api/messages/message'; // Import the API function
import { useQuery } from '@tanstack/react-query';
import { getMessages } from '../api/messages/message'; // Import the API function
//@ts-ignore

export const useGetMessages = (sender, receiver) => {
//@ts-ignore

  return useQuery(['messages', sender, receiver], () => getMessages(sender, receiver));
};

export  const useCreateMessage = () => {
  //@ts-ignore
  return useMutation(createMessage(message));
};

