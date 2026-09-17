import s from './Pagination.module.css';
import { Button } from '@/shared/ui/button/Button.tsx';
import Arrow from '@/shared/assets/images/Arrow.svg';

type Props = {
  page: number;
  showAll: boolean;
  startItem: number;
  endItem: number;
  totalItems: number;
  hasNextPage: boolean;
  onPageSizeChange: (pageSize: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
  onShowAll: (show: boolean) => void;
  pageSize: number;
};
export const Pagination = ({
                             page,
                             totalItems,
                             onShowAll,
                             hasNextPage,
                             endItem,
                             startItem,
                             onNextPage,
                             onPrevPage,
                             onPageSizeChange,
                             showAll,
                             pageSize,
                           }: Props) => {
  return (
    <div className={s.paginationContainer}>
      <div className={s.pages}>
        {page > 1 && !showAll && (
          <Button name={'prev button'} variant={'text'} className={s.prevBtn} onClick={onPrevPage}
                  disabled={page === 1 || showAll}>
            <Arrow />
          </Button>
        )}
        <span>
          {startItem} to {endItem} of {totalItems} items{' '}
        </span>
        {hasNextPage && !showAll && (
          <Button name={'next button'} variant={'text'} className={s.nextBtn} onClick={onNextPage}
                  disabled={!hasNextPage || showAll}>
            <Arrow />
          </Button>
        )}
        <label>
          <input
            type={'checkbox'}
            onChange={e => {
              onShowAll(e.target.checked);
            }}
          />
          Show all
        </label>
      </div>

      <div className={s.pageSize}>
        <span>Page size</span>
        <Button size={'sm'} isActive={pageSize === 6} variant={'outline'} onClick={() => onPageSizeChange(10)}>
          6
        </Button>
        <Button size={'sm'} isActive={pageSize === 12} variant={'outline'} onClick={() => onPageSizeChange(20)}>
          12
        </Button>
      </div>
    </div>
  );
};
