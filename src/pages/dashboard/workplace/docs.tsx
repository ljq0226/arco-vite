import React from 'react';
import { Link, Card, Typography } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/docs.module.less';

const links = {
};
function QuickOperation() {
  const t = useLocale(locale);

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title heading={6}>{t['workplace.docs']}</Typography.Title>
        <Link>{t['workplace.seeMore']}</Link>
      </div>
      <div className={styles.docs}>
      </div>
    </Card>
  );
}

export default QuickOperation;
