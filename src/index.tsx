import React from 'react'
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native'

type Styles = StyleProp<ViewStyle | TextStyle | ImageStyle>
type StylesFunc<P> = (props: P & { [x:string]: any }) => Styles

export function styled<P>(
    Component: React.ComponentType<P>,
    styles: Styles|StylesFunc<P>
): React.ComponentType<P & { [x:string]: any }> {
    return (props: P) => <Component
        {...props}
    style={[
            typeof styles === 'function' ? styles(props) : styles,
        // @ts-ignore
        props.style ?? null,
]}
    />
}

export function styledPressable<P>(
    Component: React.ComponentType<P>,
    styles: Styles|StylesFunc<P>,
    pressedStyles: Styles|StylesFunc<P>,
): React.ComponentType<P & { pressed?: boolean, [x:string]: any }> {
    return (props: P) => <Component
        {...props}
    style={[
            typeof styles === 'function' ? styles(props) : styles,
        // @ts-ignore
        props.pressed ? (
            typeof pressedStyles === 'function' ? pressedStyles(props) : pressedStyles
        ) : null,
        // @ts-ignore
        props.style ?? null,
]}
    />
}
