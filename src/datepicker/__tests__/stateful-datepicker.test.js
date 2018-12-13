/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import React from 'react';
import {mount} from 'enzyme';
import {StatefulDatepicker, Calendar} from '../index.js';

describe('StatefulDatepicker', () => {
  test('basic render', () => {
    const props = {
      initialState: {
        highlightedDate: new Date(),
      },
      onSelect: jest.fn(),
      stateReducer: jest.fn(),
    };

    const component = mount(<StatefulDatepicker {...props} />);
    const renderedCalendar = component.find(Calendar);
    expect(renderedCalendar).toExist();
  });
});
