import { useState, useEffect } from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../redux/actions';
import { useErrorHandler } from '../hooks/useErrorHandler';
import moment from 'moment';

const { Meta } = Card;

const CountryDetailPage = () => {
    const { countryCode } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const countryData = useSelector((state) => state.countryData.data);
    const error = useSelector((state) => state.countryData.error);
    const { handleError } = useErrorHandler();


    useEffect(() => {
        if (error) {
            handleError(error);
        }
    }, [error, handleError]);

    useEffect(() => {
        setLoading(true);
        dispatch(getCountryData(countryCode));
    }, [dispatch, countryCode]);

    useEffect(() => {
        if (countryData) {
            setLoading(false);
        }
    }, [countryData]);

    return (
        <div className="site-card-border-less-wrapper">
            <Card title={countryData?.location} loading={loading}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic
                            title="Total Cases"
                            value={countryData?.confirmed}
                        />
                    </Col>
                    <Col span={12}>
                        <Statistic
                            title="Total Deaths"
                            value={countryData?.deaths}
                        />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic
                            title="Recovered"
                            value={countryData?.recovered}
                        />
                    </Col>
                    <Col span={12}>
                        <Statistic
                            title="Last Checked"
                            value={
                            moment(countryData?.lastChecked)
                                .format('YYYY-MM-DD HH:mm:ss')}
                        />
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default CountryDetailPage;