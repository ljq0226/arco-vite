import React, { useState, useEffect, ReactNode } from 'react';
import {
  Grid,
  Card,
  Typography,
  Divider,
  Skeleton,
  Link,
} from '@arco-design/web-react';
import { useSelector } from 'react-redux';
import { IconCaretUp } from '@arco-design/web-react/icon';
import OverviewAreaLine from '@/components/Chart/overview-area-line';
import locale from './locale';
import useLocale from '@/utils/useLocale';
import styles from './style/overview.module.less';
import IconCalendar from './assets/calendar.svg';
import IconComments from './assets/comments.svg';
import IconContent from './assets/content.svg';
import IconIncrease from './assets/increase.svg';

const { Row, Col } = Grid;

type StatisticItemType = {
  icon?: ReactNode;
  title?: ReactNode;
  count?: ReactNode;
  loading?: boolean;
  unit?: ReactNode;
};

function StatisticItem(props: StatisticItemType) {
  const { icon, title, count, loading, unit } = props;
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <Skeleton loading={loading} text={{ rows: 2, width: 60 }} animation>
          <div className={styles.title}>{title}</div>
          <div className={styles.count}>
            {count}
            <span className={styles.unit}>{unit}</span>
          </div>
        </Skeleton>
      </div>
    </div>
  );
}

type DataType = {
  allContents?: string;
  liveContents?: string;
  increaseComments?: string;
  growthRate?: string;
  chartData?: { count?: number; date?: string }[];
  down?: boolean;
};

function Overview() {
  const [data, setData] = useState<DataType>({});
  const [loading, setLoading] = useState(true);
  const t = useLocale(locale);
  const chartData = [
    {
      "date": "2022-1",
      "count": 50240
    },
    {
      "date": "2022-2",
      "count": 62543
    },
    {
      "date": "2022-3",
      "count": 29981
    },
    {
      "date": "2022-4",
      "count": 28782
    },
    {
      "date": "2022-5",
      "count": 43264
    },
    {
      "date": "2022-6",
      "count": 61898
    },
    {
      "date": "2022-7",
      "count": 55091
    },
    {
      "date": "2022-8",
      "count": 44140
    },
    {
      "date": "2022-9",
      "count": 52828
    },
    {
      "date": "2022-10",
      "count": 48840
    },
    {
      "date": "2022-11",
      "count": 56683
    },
    {
      "date": "2022-12",
      "count": 67414
    }
  ]
  const userInfo = useSelector((state: any) => state.userInfo || {});

  const fetchData = () => {
    setLoading(true);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      <Typography.Title heading={5}>
        {'欢迎回来 '}
        {'12023020212李俊霖 12023020230陈顶攀 12023020234罗佳庆'}
      </Typography.Title>
      <Divider />
      <Row>
        <Col flex={1}>
          <StatisticItem
            icon={<IconCalendar />}
            title={'点击量'}
            count={'353352'}
            loading={loading}
            unit={'次'}
          />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem
            icon={<IconContent />}
            title={'新闻数量'}
            count={'365'}
            loading={loading}
            unit={'个'}
          />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem
            icon={<IconComments />}
            title={"较昨日新增"}
            count={'15323'}
            loading={loading}
          />
        </Col>
        <Divider type="vertical" className={styles.divider} />
        <Col flex={1}>
          <StatisticItem
            icon={<IconIncrease />}
            title={t['workplace.growth']}
            count={
              <span>
                {'2.88%'}
                <IconCaretUp
                  style={{ fontSize: 18, color: 'rgb(var(--green-6))' }}
                />
              </span>
            }
            loading={loading}
          />
        </Col>
      </Row>
      <Divider />
      <div>
        <div className={styles.ctw}>
          <Typography.Paragraph
            className={styles['chart-title']}
            style={{ marginBottom: 0 }}
          >
            {t['workplace.contentData']}
            <span className={styles['chart-sub-title']}>
              ({t['workplace.1year']})
            </span>
          </Typography.Paragraph>
          <Link>{t['workplace.seeMore']}</Link>
        </div>
        <OverviewAreaLine data={chartData} loading={loading} />
      </div>
    </Card>
  );
}

export default Overview;
