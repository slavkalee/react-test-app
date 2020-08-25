import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";

const SidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #24344B;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 8px grey;
  @media (max-width: 991px) {
    width: 165px;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 185px;
  }
`;

const AvatarContainer = styled.div`
  margin-top: 20px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media (max-width: 991px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  color: rgb(219, 211, 211);
  font-size: 20px;
  &:hover {
    color: #fff;
  }
  @media (max-width: 991px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Footer = styled.footer`
  font-size: 12px;
  margin-bottom: 20px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 17px;
    margin-bottom: 10px;
  }
`;

function Sidebar() {
  const user = useSelector((state) => state.user);

  return (
    <SidebarContainer>
      <AvatarContainer>
        <Avatar src={user && user.avatar_url} />
      </AvatarContainer>
      <List>
        <ListItem>
          <NavLink to="/terminals">терминалы</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/buyers">покупатели</NavLink>
        </ListItem>
      </List>
      <Footer>Copyright © 2020</Footer>
    </SidebarContainer>
  );
}

export default Sidebar;
