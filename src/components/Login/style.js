import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    width: '100%',
    padding: 20,
    backgroundColor: '#00cec9',
    height: '100%',
    backgroundColor: 'rgb(73,211,224)',
    backgroundColor: 'linear-gradient(180deg, rgba(73,211,224,1) 0%, rgba(105,240,177,1) 100%)',
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 80,
    borderColor: '#fff',
    borderWidth: 5,
  },
  logoText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 45,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  socialAuthContainer: {
    display: "flex",
    justifyContent: "flex-end",
  }
});
