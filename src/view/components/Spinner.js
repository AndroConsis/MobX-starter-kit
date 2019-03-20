import React from 'react';
import { ActivityIndicator } from "react-native";

const Spinner = () => (
  <ActivityIndicator size={"small"} style={styles.spinner} />
);

const styles = {
  spinner: {
    margin: 10
  }
};

export default Spinner;
