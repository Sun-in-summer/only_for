
import {Navigation as StyledNavigation, NavInfo, NavButtons, NavButton} from "./navigation.styles";

type NavigationProps = {
  totalPeriods: number;
  activePeriod: number;
  isAnimating: boolean;
  handlePeriodChange: (newPeriod: number) => void;
};

const Navigation: React.FC<NavigationProps> = ({
  totalPeriods,
  activePeriod,
  isAnimating,
  handlePeriodChange,
}) => {
  return (
    <StyledNavigation>
      <NavInfo>
        0{activePeriod + 1}/0{totalPeriods}
      </NavInfo>
      <NavButtons>
        <NavButton
          onClick={() =>
            handlePeriodChange((activePeriod - 1 + totalPeriods) % totalPeriods)
          }
          disabled={isAnimating}
        >
          {"<"}
        </NavButton>
        <NavButton
          onClick={() => handlePeriodChange((activePeriod + 1) % totalPeriods)}
          disabled={isAnimating}
        >
          {">"}
        </NavButton>
      </NavButtons>
    </StyledNavigation>
  );
};

export default Navigation;
