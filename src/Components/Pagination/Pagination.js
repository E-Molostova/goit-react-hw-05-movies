import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import s from './Pagination.module.css';

const Pagination = () => {
  const { push } = useHistory();
  const location = useLocation();
  const { q, page } = queryString.parse(location.search);

  const changeLocation = curPage => {
    const qs = q
      ? queryString.stringify({ q, page: curPage })
      : queryString.stringify({ page: curPage });
    push({ ...location, search: qs });
  };

  const handleChangePage = e => {
    const { active } = e.target.dataset;
    switch (active) {
      case 'prev':
        if (page === '1') return;
        const curPage = Number(page) - 1;
        return changeLocation(curPage);
      case 'next':
        changeLocation(Number(page) + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <button className={s.btn} type="button" data-active="prev" onClick={handleChangePage}>
        Prev
      </button>
      <p className={s.page}>{`${page}`}</p>
      <button className={s.btn} type="button" data-active="next" onClick={handleChangePage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
