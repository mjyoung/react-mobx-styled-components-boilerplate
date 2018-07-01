import { css } from 'styled-components';
import appStyles from './app';
import resetStyles from './reset';

const styles = css`
  ${resetStyles} ${appStyles};
`;

export default styles;
