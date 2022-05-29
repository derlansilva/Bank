
import styled from 'styled-components/native'
import { StyleSheet , Animated } from 'react-native';

export const Container = styled.View`

    background: #06A8B1;
    height: 100%;
    align-items: center;
    
    
`
export const ViewBack = styled.View`

    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px

    margin-top: 45;
`
export const Code = styled.View`
    background: #fff;
    padding: 10px;
    align-self: center;
`;

export const Nav = styled.View`
    flex-direction: collum;
    width:90%;
    margin-top: 30px;
`;
export const NavItems= styled.View`

    flex-direction: row;
    align-items: center;
    width:100%;
    height: 60px;
    margin-top: 20px
    background: rgba(255 , 255 ,255,0.2 );

    padding: 10px;
    border-radius : 10px;
 
`
export const NavIcon = styled.View`
    left: 0;
    
`
export const NavText = styled.Text`
    font-size: 20px;
    color: #fff;
    margin-left: 20px;

`
export const SignOutButton = styled.TouchableOpacity`
    width: 90%;
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255 ,0.8);
    border-radius: 10px;
    justify-content: center;
    align-items:center;
    padding: 10px;
    margin-top: 15px;
    font-size: 35px;
  
`
export const SignOutButtonText = styled.Text`
  color: red
  font-size: 25px;
`
