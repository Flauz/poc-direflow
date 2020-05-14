import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AppContainer from '../App';

const reactProps = {
  componentTitle: 'Component Test',
  sampleList: ['Mock', 'Test', 'Data'],
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer {...reactProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<AppContainer {...reactProps} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});
