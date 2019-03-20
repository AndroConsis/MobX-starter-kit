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
  Right,
  Body
} from "native-base";

import styles from "./styles";
import ListItem from "../Home/Components/Listitem";

class BlankPage extends Component {
  render() {
    const param = this.props.navigation.state.params;
    const hasValue = param ? true : false;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>Fact</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          {hasValue && <ListItem text={param.item.item.text} />}
          {hasValue && (
            <Button
              rounded
              small
              onPress={() => this.props.deleteFact(param.item.item)}
              style={{ alignSelf: "flex-end", marginTop: 10 }}
            >
              <Text>Delete</Text>
            </Button>
          )}
        </Content>
      </Container>
    );
  }
}

export default BlankPage;
