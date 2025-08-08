import {  PaginationDot, PaginationWrapper } from './outer-pagination.styles';



type OuterPaginationProps = {
  totalPeriods: number;
  activePeriod: number;
  onPaginationClick: (slideIndex: number) => void;
};

const OuterPagination: React.FC<OuterPaginationProps> = ({
  totalPeriods,
  activePeriod,
  onPaginationClick
}) => {
  return (
    <PaginationWrapper className="swiper-pagination">
      {Array.from({ length: totalPeriods }, (_, index) => (
        <PaginationDot
          key={index}
          $active={index === activePeriod}
          onClick={() => onPaginationClick(index)}
        />
      ))}
    </PaginationWrapper>
  );
};

export default OuterPagination;