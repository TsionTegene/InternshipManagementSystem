import { ChatState } from "../Context/ChatProvider";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import {Icon } from "@chakra-ui/icon";

import axios from "axios";
import "./styles.css";
import { SetStateAction, useEffect, useState } from "react";
import ScrollableChat from "./chat-scroll";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import {useCreateMessage, useGetMessages } from "@/hooks/use-chat-query";
const ENDPOINT = "http://localhost:3000";
var socket: Socket<DefaultEventsMap, DefaultEventsMap>, selectedChatCompare: { _id: any; };

//@ts-ignore
const SingleChat = ({ fetchAgain, setFetchAgain }) => {

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        if (!notification.includes(newMessageReceived)) {
          setNotfication([newMessageReceived, ...notification]);

          setFetchAgain(!fetchAgain);
        }
      } else {
        //@ts-ignore
        setNewMessage([...messages, newMessageReceived]);
      }
    });
  });

  const [socketConnected, setSocketConnected] = useState(false);
  const createMessageMutation = useCreateMessage();
  const { data, isLoading, isError } = useGetMessages(sender, receiver);
  const [newMessage,setNewMessage] = useState(); //this is new message text 
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const { user, selectedChat, setSelectedChat, notification, setNotfication } =
    ChatState();
  const toast = useToast();

  

  const sendMessage = async (event: { key: string; }) => {
    if (event.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {

        await createMessageMutation.mutateAsync(newMessage);
        console.log('Message created successfully');

        setNewMessage(undefined);
        //@ts-ignore
        createMessageMutation(newMessage)
        socket.emit("new message", data);
        //@ts-ignore

        setNewMessage([...data, data]);
      } catch (error) {
        toast({
          title: "Error occurred",
        //@ts-ignore
          description: error.error,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  const typingHandler = (e: { target: { value: SetStateAction<string>; }; }) => {
    //@ts-ignore
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };



  //HTML
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "25px" }}
            pb={3}
            px={2}
            w={"100%"}
            fontFamily={"-moz-initial"}
            display={"flex"}
            justifyContent={{ base: "space-between" }}
            alignItems={"center"}
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<Icon />}
              onClick={() => setSelectedChat("")} aria-label={""}            />
            {selectedChat.name} {/* Assuming the name property of selectedChat */}
          </Text>
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"flex-end"}
            p={3}
            bg={"#E8E8E8"}
            w={"100%"}
            h={"100%"}
            borderRadius={"lg"}
            overflowY={"hidden"}
          >
            {isLoading ? (
              <Spinner
                size={"xl"}
                w={20}
                h={20}
                alignSelf={"center"}
                margin={"auto"}
              />
            ) : (
              <div className={"messages"}>
                <ScrollableChat messages={data} />
              </div>
            )}
            <FormControl onKeyDown={sendMessage} isRequired mt={3}>
              {isTyping ? (
                <div>
                  <p
                  //@ts-ignore
                    width={70}
                    style={{
                      marginBottom: 15,
                      marginLeft: 0,
                      color: "blue",
                      fontSize: 15,
                    }}
                  >
                    LOADING...
                  </p>
                </div>
              ) : (
                <></>
              )}
              <Input
                variant={"filled"}
                bg={"#E0E0E0"}
                placeholder={"Write your message here..."}
                onChange={typingHandler}
                value={newMessage}
              />
            </FormControl>
          </Box>
        </>
      ) : (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100%"}
        >
          <Text fontSize={"3xl"} pb={3} fontFamily={"Work sans"}>
            Select a User and start to chat...
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
