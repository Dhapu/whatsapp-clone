import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactList";
import { messageList } from "./Data";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex: 0.8;
    background-color: #f6f7f8;
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ededed;
    padding: 10px;
    align-items: center;
    gap: 10px;
    `;
const ChatBox = styled.div`
    display: flex;
    padding: 10px;
    background-color: #f0f0f0;
    align-items: center;
    bottom: 0;
    `;

const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

const EmojiImage = styled.img`
    width: 30px;
    height: 24px;
    opacity: 0.5;
    cursor: pointer;
    `;

const MessageContainer = styled.div`
    display: flex;
    background-color: #e5ddd6;
    flex-direction: column;
    height: 100%;
    `;

const MessageDiv = styled.div`
    
    justify-content: ${props => props.isYours ? "flex-end" : "flex-start"};
    display: flex;
    margin: 5px 16px;
    `;

const Message = styled.div`

    max-width: 50%;
    background-color: ${props => props.isYours ? "#dcf8c6" : "white"};
    color: #303030;
    padding: 8px 10px;
    font-size: 14px;
    `;

const Conversation = () => {
    return (
        <Container>
            <Header> 
<ProfileImage src="/profile/image.png" />   
John Doe

            </Header>
             <MessageContainer>
                {
                    messageList.map((message) => (
                        <MessageDiv isYours={message.senderId === 0}>
                            <Message isYours={message.senderId === 0}>{[message.text]}</Message> </MessageDiv>


                    ))
                }
                 
             </MessageContainer>
             <ChatBox>
                 <SearchContainer>
                    <EmojiImage src="/profile/emoji.png" />
                     <SearchInput placeholder="Type a message" />
                 </SearchContainer>
             </ChatBox>
        </Container>
    )
}

export default Conversation;