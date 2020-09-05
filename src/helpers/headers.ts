import AsyncStorage from '@react-native-community/async-storage';

interface HeadersData {
  [key:string]: string;
}

export default async function headers() {
    const items: HeadersData = { 
      'Content-Type': 'application/json',
    };
    const token = await AsyncStorage.getItem('token');
    if (token) {
      items.Authorization = `Bearer ${token}`;
    }
    return items;
  }
  