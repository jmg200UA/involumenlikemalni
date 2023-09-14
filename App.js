import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Content>
        <Icon name="home" size={40} color="#3F51B5" />
        <Title>Opción 1</Title>
        <Paragraph>Descripción de la opción 1</Paragraph>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content>
        <Icon name="star" size={40} color="#FFC107" />
        <Title>Opción 2</Title>
        <Paragraph>Descripción de la opción 2</Paragraph>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content>
        <Icon name="calendar" size={40} color="#4CAF50" />
        <Title>Opción 3</Title>
        <Paragraph>Descripción de la opción 3</Paragraph>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content>
        <Icon name="settings" size={40} color="#FF5722" />
        <Title>Opción 4</Title>
        <Paragraph>Descripción de la opción 4</Paragraph>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content>
        <Icon name="help-circle" size={40} color="#9E9E9E" />
        <Title>Opción 5</Title>
        <Paragraph>Descripción de la opción 5</Paragraph>
      </Card.Content>
    </Card>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    marginVertical: 10,
    padding: 10,
  },
});
