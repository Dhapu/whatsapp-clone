import styled from "styled-components";
import { AiOutlineEllipsis } from "react-icons/ai";

import { contactListData, messageList } from "./Data";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex: 0.4;
`;
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ededed;
    padding: 10px;
`;
const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const SearchBox = styled.div`
    background-color: #f6f6f6;
    display: flex;
    padding: 10px;
    `;
    
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    background-color: white;
    border-radius: 16px;
    width: 100%;
    padding: 25px 0px;
    `;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    padding: 0px 10px;
    font-size: 16px;
    margin-left: 10px;
    `;

const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-bottom: 1px solid #f2f2f2;
    
    padding: 15px;
    cursor: pointer;
    `;

const ProfileIcon = styled(ProfileImage)`
    width: 40px;
    height: 40px;
    `

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 10px;
    `;
const ContactName = styled.span`
    font-size: 16px;
    width: 100%;
    color: black;
    `;
const MessageText = styled.span`
    font-size: 14px;
    width: 100%;
    margin-top: 3px;
    color: rgba(0, 0, 0, 0.8);
    `;

const ContactComp = (props) => {
    const {userData } = props;
    return (
        <ContactItem>
             <ProfileIcon src={userData.profilePic}/> 
            <ContactInfo>
                <ContactName>{userData.name}</ContactName>
                <MessageText>Hello from SimpliLearn</MessageText>
                </ContactInfo>
            <MessageText>10:30 PM</MessageText>
        </ContactItem>
    )
}
const ContactList = () => {
    
    return (
        <Container> 
            <ProfileInfo>
                <ProfileImage src="/profile/image.png"/>
                <AiOutlineEllipsis />
                </ProfileInfo>

            <SearchBox>
                <SearchContainer> 
                    <SearchInput placeholder="Search" />
                </SearchContainer>
            </SearchBox>
            {
                contactListData.map((userData) => <ContactComp key={userData.id} userData={userData}/>)
            }
             </Container>
    )
}

export default ContactList;