import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

export const getIcon = (type) => {
  switch (type) {
    case 'error':
    default:
      return <IconTimesCircle width='22' fill='var(--colors-error-icon)' />;
  }
};
