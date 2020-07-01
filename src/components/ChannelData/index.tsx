import React from 'react';

import ChannelMessage from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import { keyframes } from 'styled-components';

const messagesChat = [
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?", isBot: true },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?", isBot: true, hasMention: true },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?", hasMention: true },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?", hasMention: true },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?", isBot: true },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?", isBot: true },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
  { author: "Warley Xavier", date: "01/07/2020", content: "Bora jogar?" },
]


const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>

        {
          messagesChat.map((item, key) => (
            <ChannelMessage
              key={key}
              author={item.author}
              date={item.date}
              content={item.content}
              isBot={item.isBot}
              hasMention={item.hasMention}
            />
          ))
        }

      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Converse bastante #Jogos' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;