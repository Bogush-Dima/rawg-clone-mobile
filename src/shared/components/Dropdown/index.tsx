import { FC, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS } from 'constants';

export const Dropdown: FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  return (
    <DropDownPicker
      theme="DARK"
      containerStyle={{
        width: '45%'
      }}
      textStyle={{
        fontSize: 15,
        color: COLORS.LIGHT.TEXT
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};
