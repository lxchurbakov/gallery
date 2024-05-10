import React from 'react';
import styled from 'styled-components';

import { Base, BaseProps } from './atoms';
import { font, colors } from './theme';

export type StyledInputProps = {
    textSize?: string;
    weight?: string;
    color?: string;
    background?: string;
    border?: string;
    outline?: string;
    radius?: string;
    p?: string;
};

const StyledInput = styled.input<StyledInputProps>`
    font-family: ${font.family};
    font-size: ${props => props.textSize || '18px'};
    font-weight: ${props => props.weight || 400};
    color: ${props => props.color || colors.text};
    box-sizing: border-box;
    width: 100%;
    display: block;

    // border: 1px solid #cccccc;

    border-radius: ${props => props.radius || '4px'};
    border: ${props => props.border || 'none'};
    padding: ${props => props.p || '12px'};
    background: ${props => props.background || 'transparent'};

    // &:focus {
    //     outline: ${props => props.outline || 'none'};;
    // }

    outline: ${props => props.outline || 'none'};;
`;

export type Input<T> = { value: T, onChange: ($: T) => void };

export type TextInputProps = {
    type?: string;
    placeholder?: string;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
};

export const LineInput = React.forwardRef<HTMLInputElement, TextInputProps & StyledInputProps & { size?: string } & Input<string> & BaseProps>(({ 
    type, placeholder, value, onChange, size, weight, color, background, border, outline, p, radius, onFocus, onBlur, ...props 
}, ref) => {
    return (
        <Base w="100%" {...props}>
            <StyledInput 
                ref={ref}
                placeholder={placeholder} type={type} textSize={size}
                value={value || ''} onChange={(e) => onChange(e.target.value || '')} 
                {...{ weight, color, background, border, outline, p, radius, onFocus, onBlur }} 
            />
        </Base>
    );
});

const StyledTextArea = styled.textarea<any>`
    font-family: ${font.family};
    font-size: ${props => props.size || '18px'};
    font-weight: ${props => props.weight || 400};

    color: ${props => props.color || colors.text};
    box-sizing: border-box;
    width: 100%;
    display: block;

    border-radius: 4px;
    border: ${props => props.border || 'none'};
    padding: ${props => props.p || '12px'};
    background: ${props => props.background || 'transparent'};

    outline: ${props => props.outline || 'none'};
    max-width: 100%;
    min-height: 80px;
`;

export const TextInput = ({ p, placeholder, value, onChange, size, weight, color, background, border, outline, ...props }: any) => {
    return (
        <Base w="100%" {...props}>
            <StyledTextArea value={value || ''} placeholder={placeholder} onInput={(e) => onChange(e.target.value || '')} {...{ size, weight, color, background, border, outline, p }}/>
        </Base>
    );  
};

export const Input = (props: any) => {
    if (props.mode === 'text') {
        return <TextInput {...props} />
    }

    return <LineInput {...props} />
};
