import React from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ServerName: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content="Hello Linkedin"
        />

        <ChannelMessage
          author="Guilherme Ulbriki"
          date="20/09/2020"
          content={
            <>
              <Mention>@Guilherme Ulbriki</Mention>, pode me ajudar com um código mais tarde?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ServerName;
