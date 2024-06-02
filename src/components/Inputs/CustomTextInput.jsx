import {Input, Text} from '@ui-kitten/components';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomTextInput = ({
  control,
  rules = {},
  label,
  secureTextEntry,
  name,
  errors,
  message,
  my
}) => {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            label={label}
            secureTextEntry={secureTextEntry}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name={name}
      />
      {errors[name] && <Text status="danger" category='label' style={{ marginVertical: my }}>{message}</Text>}
    </>
  );
};

export default CustomTextInput;
