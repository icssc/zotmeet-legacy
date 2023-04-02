"use client"
import React from 'react';
import * as Label from '@radix-ui/react-label'
import cx from "classnames";
import styles from "./input.module.scss";
import Image from 'next/image';

export interface InputProps {
    color?: "sand" | "red" ;
    icon: React.ComponentType;
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder: string;
  }

const Input = ({color = 'red', icon = <Image style ={{marginRight:'10px'}} src='/favicon.ico' width={16} height= {16} alt = 'icon'/>, value, onChange = (value:string) => {console.log(`${value}`)}, label = 'Label', placeholder = 'Placeholder'}: InputProps) => {
    return (
    <div style={{ display: 'flex', padding:'0 1px', width:'200px', minWidth:'200px', maxWidth:'200px', height:'70px', flexWrap: 'wrap', alignItems: 'left', flexDirection:'row'}}>
      <Label.Root className={cx(styles['LabelRoot'], styles[color])} htmlFor="input">
        {`${label}`}
      </Label.Root>
      <div className = {cx(styles['Input'], styles[color])}>
        { icon && 
            <Image style ={{marginRight:'10px'}} src='/favicon.ico' width={16} height= {16} alt = 'icon'/>
        }
        <input style={icon ? { width: 'calc(100% - 20px)' } : {}} className={cx(styles['input'], styles[color])} onInput={() => {onChange}} type="text" id="input" defaultValue={`${placeholder}`}/> 
      </div>
    </div>
    );
  };
  
export default Input;