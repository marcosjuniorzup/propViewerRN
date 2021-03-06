import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const SectionListBasics = (props) => {
  const convertToSectionSchema = (key, index) => ({
    title: key,
    data: [propsValues[index]],
  });

  const propsValues = Object.values(props).map((propValue) =>
    JSON.stringify(propValue),
  );
  const propsKeys = Object.keys(props);
  const sections = propsKeys.map(convertToSectionSchema);

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    color: '#07002D',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    color: '#07002D',
    fontSize: 18,
    height: 44,
  },
});

export default SectionListBasics;
