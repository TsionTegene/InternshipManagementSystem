
export const createMessage = async (messageData: any) => {
    try {
      const response = await fetch('/api/message/create-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create message: ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Error creating message:', error);
      throw error;
    }
  };
  
  // Define a function to get messages between a sender and receiver
  export const getMessages = async (sender: any, receiver: any) => {
    try {
      const response = await fetch(`/api/message/getmessage?sender=${sender}&receiver=${receiver}`);
  
      if (!response.ok) {
        throw new Error(`Failed to get messages: ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  };
  