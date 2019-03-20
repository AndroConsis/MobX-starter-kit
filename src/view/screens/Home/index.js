import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import styles from "./styles";

class Home extends Component {
  render() {
    const { showError, showLoading, error, loading, list, count } = this.props;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Facts</Title>
          </Body>
          <Right>
            <Title>{count}</Title>
          </Right>
        </Header>
        <Content padder>
          {showLoading && loading}
          {showError && error}
          {list}
        </Content>
      </Container>
    );
  }
}

export default Home;
