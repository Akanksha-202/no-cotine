import React from 'react';
import Select from 'react-select';
import { reasons } from './data';

export default () => (
  <Select
    defaultValue={[]}
    isMulti
    name="Reason"
    options={reasons}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
