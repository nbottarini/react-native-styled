[![npm](https://img.shields.io/npm/v/@nbottarini/react-native-styled.svg)](https://www.npmjs.com/package/@nbottarini/react-native-styled)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/nbottarini/react-native-styled/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/nbottarini/react-native-styled/actions)

# React Native Styled
React Native lightweight styled components 

## Installation

Npm:
```
$ npm install --save @nbottarini/react-native-styled
```

Yarn:
```
$ yarn add @nbottarini/react-native-styled
```

## Usage

```typescript jsx
import { styledPressable } from './index'

const MyApp = () => (
    <Container>
        <TextField/>
        <PrimaryButton title="Login"/>
    </Container>
)

const Container = styled(View, {
    padding: 10,
    backgroundColor: '#FEFEFE'
})

const TextField = styled(TextInput, (props) => ({
    fontSize: 10,
    backgroundColor: props.editable ? '#FFFFFF' : '#CCCCCC',
}))

const PrimaryButton = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            {({ pressed }) => (
                <ButtonContainer pressed={pressed} disabled={props.isDisabled}>
                    <Text>{props.title}</Text>
                </ButtonContainer>
            )}
        </Pressable>
    );
};

// styledPressable allows to override some styles when the prop pressed is true
const ButtonContainer = styledPressable(View, (props) => ({
    backgroundColor: props.disabled ? '#CCCCCC' : '#FFFFFF',
}), {
    backgroundColor: "#F0F0F0"
})
```
