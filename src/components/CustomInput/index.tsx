import React from 'react';
import { CustomInputContainer } from './styles';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
interface CustomInputProps {
  onChange: { (e: React.ChangeEvent<HTMLInputElement>): void };
  placeholder?: string;
  value: string;
  size?: 'small' | 'medium' | undefined;
  onKeyDown?: { (e: React.KeyboardEvent<HTMLDivElement>): void };
}

const CustomInput = (props: CustomInputProps): JSX.Element => {
  return (
    <CustomInputContainer
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default CustomInput;
