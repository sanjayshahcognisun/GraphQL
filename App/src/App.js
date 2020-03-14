import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MonthList from './assets/components/MonthList';

import {
  Row, Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
} from 'reactstrap';

import {
  AreaChart, Area, Line, XAxis, YAxis,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  LineChart
} from 'recharts';

import {
  faAngleUp,
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import avatar1 from '../src/assets/utils/images/avatars/1.jpg';
import avatar2 from '../src/assets/utils/images/avatars/2.jpg';
import avatar3 from '../src/assets/utils/images/avatars/3.jpg';
import avatar4 from '../src/assets/utils/images/avatars/4.jpg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

/*
const data = [
  { name: 'Page A', monthly: 1000, pv: 2400, amt: 2400 },
  { name: 'Page B', monthly: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', monthly: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', monthly: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', monthly: 3000, pv: 4800, amt: 2181 },
  { name: 'Page F', monthly: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', monthly: 3490, pv: 4300, amt: 2100 },
  { name: 'Page C', monthly: 2000, pv: 6800, amt: 2290 },
  { name: 'Page D', monthly: 4780, pv: 7908, amt: 2000 },
  { name: 'Page E', monthly: 2890, pv: 9800, amt: 2181 },
  { name: 'Page F', monthly: 1390, pv: 3800, amt: 1500 },
  { name: 'Page G', monthly: 3490, pv: 4300, amt: 2100 },
];

const data1 = [
  { name: 'Page A', monthly: 5400, pv: 2400, amt: 2400 },
  { name: 'Page B', monthly: 3700, pv: 1398, amt: 2210 },
  { name: 'Page C', monthly: 2200, pv: 9800, amt: 2290 },
  { name: 'Page D', monthly: 2380, pv: 3908, amt: 2000 },
  { name: 'Page E', monthly: 2000, pv: 4800, amt: 2181 },
  { name: 'Page F', monthly: 3390, pv: 3800, amt: 2500 },
  { name: 'Page G', monthly: 2490, pv: 4300, amt: 2100 },
  { name: 'Page C', monthly: 2670, pv: 6800, amt: 2290 },
  { name: 'Page D', monthly: 3780, pv: 7908, amt: 2000 },
  { name: 'Page E', monthly: 3890, pv: 9800, amt: 2181 },
  { name: 'Page F', monthly: 2390, pv: 3800, amt: 1500 },
  { name: 'Page G', monthly: 2590, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: 'Page A', monthly: 2530, pv: 2400, amt: 2400 },
  { name: 'Page B', monthly: 3582, pv: 1398, amt: 2210 },
  { name: 'Page C', monthly: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', monthly: 3780, pv: 3908, amt: 2000 },
  { name: 'Page E', monthly: 4000, pv: 4800, amt: 2181 },
  { name: 'Page F', monthly: 3390, pv: 3800, amt: 2500 },
  { name: 'Page G', monthly: 1590, pv: 4300, amt: 2100 },
  { name: 'Page C', monthly: 3280, pv: 6800, amt: 2290 },
  { name: 'Page D', monthly: 2510, pv: 7908, amt: 2000 },
  { name: 'Page E', monthly: 4580, pv: 9800, amt: 2181 },
  { name: 'Page F', monthly: 2640, pv: 3800, amt: 1500 },
  { name: 'Page G', monthly: 2490, pv: 4300, amt: 2100 },
];*/

class App extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      activeTab1: '11',
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab
      });
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>

        <Fragment>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}>
            <div>
              <h1 style={{ textAlign: "center"  }}>Sales Report</h1>

              <Row>
                <Col>
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">
                        <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                        Monthly Sales Reports
                      </div>
                      <div className="btn-actions-pane-right">

                      </div>
                    </CardHeader>
                    <TabContent activeTab={this.state.activeTab1}>
                      <TabPane tabId="11">
                        <CardBody className="pt-2">
                          <Row className="mt-3">
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-numbers fsize-3 text-muted">63%</div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">Sales Leads</div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="danger"
                                      value="63" />
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <div className="divider mt-4" />
                          <Row>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        41%
                                                                        </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Generated Leads
                                                                        </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="warning"
                                      value="41" />
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                        <div className="widget-chart p-0">
                          
                          <MonthList/>
                          
                          {/*
                            <h4 style={{ marginTop: 20 }}>Year-2019</h4>
                            <ResponsiveContainer height={187}>
                              <AreaChart data={data} margin={{ top: -45, right: 0, left: 0, bottom: 0 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <defs>
                                  <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7} />
                                    <stop offset="90%" stopColor="var(--warning)" stopOpacity={0} />
                                  </linearGradient>
                                </defs>
                                <Tooltip />
                                <Area type='monotoneX' dataKey='monthly' stroke='var(--warning)' strokeWidth={2} fillOpacity={1}
                                  fill="url(#colorPv2)" />
                              </AreaChart>
                            </ResponsiveContainer>

                            <h4 style={{ marginTop: 40 }}>Year-2018</h4>
                            <ResponsiveContainer height={187}>
                              <AreaChart data={data1} margin={{ top: -45, right: 0, left: 0, bottom: 0 }}>
                                <defs>
                                  <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7} />
                                    <stop offset="90%" stopColor="var(--warning)" stopOpacity={0} />
                                  </linearGradient>
                                </defs>
                                <Tooltip />
                                <Area type='monotoneX' dataKey='monthly' stroke='var(--warning)' strokeWidth={2} fillOpacity={1}
                                  fill="url(#colorPv2)" />
                              </AreaChart>
                            </ResponsiveContainer>

                            <h4 style={{ marginTop: 40 }}>Year-2017</h4>
                            <ResponsiveContainer height={187}>
                              <AreaChart data={data2} margin={{ top: -45, right: 0, left: 0, bottom: 0 }}>
                                <defs>
                                  <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7} />
                                    <stop offset="90%" stopColor="var(--warning)" stopOpacity={0} />
                                  </linearGradient>
                                </defs>
                                <Tooltip />
                                <Area type='monotoneX' dataKey='monthly' stroke='var(--warning)' strokeWidth={2} fillOpacity={1}
                                  fill="url(#colorPv2)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          */}
                        </div>
                      </TabPane>
                    </TabContent>
                  </Card>
                </Col>
              </Row>
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </ApolloProvider>
    );
  }
}

export default App;
