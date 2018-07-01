import { css } from 'styled-components';
import appStyles from './app';
import resetStyles from './reset';

const styles = css`
  ${appStyles} ${resetStyles};
`;

export default styles;
