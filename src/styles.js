import { StyleSheet } from "react-native";

const centered = {
  justifyContent: 'center',
  alignItems: 'center'
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    ...centered,
    flex: 1
  },
  
  arc: {
    backgroundColor: '#607D8B',
    alignItems: 'center'
  },
  
  arc__text: {
    backgroundColor: 'transparent',
    fontWeight: '300',
    color: '#FFF',
    marginTop: 0,
    fontSize: 40,
    opacity: 0
  },
  
  arc__image__box: {
    marginTop: 0,
    ...centered,
    opacity: 0
  },

  arc__image: {
    height: 150,
    width: 150
  }
});

export default styles;