import { useState, useEffect, useCallback } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageInput,
  ChannelHeader,
  ChannelList,
  VirtualizedMessageList,
} from "stream-chat-react";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./style/forum.css";
import "stream-chat-react/dist/css/index.css";

const apiKey = "mbg3gb7jyg84"; // grab your api key from https://getstream.io/dashboard/
const user = { id: "jim", name: "Jim" };
const user2 = { id: "Brad", name: "Brad" };
// you can generate user token using your app secret via https://getstream.io/chat/docs/token_generator/
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamltIn0.8lfa8s10hRFxK2fxBlV3rw6uVCuBhpNpw3TizZ1qyak";
const token2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQnJhZCJ9.YAmBa6abhGvtPrKtQKzN_0-1VE2uDAJIYw9v3AWaIUg";

function Forum() {
  const [chatClient] = useState(new StreamChat(apiKey)); // important to init chatClient only once, you can replace this with useMemo
  const [loading, setLoading] = useState(true); // used to render a loading UI until client successfully is connected

  useEffect(() => {
    if (loading)
      chatClient.connectUser(user, token).then(() => setLoading(false)); // client connects(async) with provided user token
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const createNewChannel = useCallback(async () => {
    // we need a way to create new channels with current user as the member
    // this func allows us to create random channels
    const channelId = Math.random().toString(36).substring(7);
    await chatClient
      .channel("messaging", channelId, {
        name: channelId.toUpperCase(),
        members: [user.id],
      })
      .create();
  }, [chatClient]);

  if (loading)
    return (
      <div>
        <CircularProgress color='inherit' />
      </div>
    );

  return (
    <div>
      <Container
        sx={{
          margin: "40px 0",
        }}
        maxWidth='xl'
      >
        <Typography
          sx={{
            marginLeft: "15px",
          }}
          variant='h4'
        >
          Fórum
        </Typography>
        <br></br>
        <Divider></Divider>
      </Container>
      <Chat client={chatClient}>
        <ChannelList
          filters={{ members: { $in: [user.id] } }}
          options={{ state: true, watch: true, presence: true }}
        />
        <Channel>
          <ChannelHeader />
          <VirtualizedMessageList />
          <MessageInput />
        </Channel>
      </Chat>
    </div>
  );
}

export default Forum;
