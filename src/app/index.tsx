import CalendarIcon from '@shared/assets/icons/calendar-icon.svg';
import { Button } from '@shared/components';
import './styles/index.scss';

export const App = (): JSX.Element => {
  return (
    <Button disabled>
      Button
      <CalendarIcon width={32} height={32} fill="red" />
    </Button>
  );
};
