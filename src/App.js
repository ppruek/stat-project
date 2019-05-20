import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import './App.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCat: 0,
      valueGDP: 0, 
      valueRev: 0,
      countryGDP: 0,
      countryRev: 0,
    };
  }

  handleChangeCat = (event, value) => {
    this.setState({ valueCat: value});
  };

  handleChangeGDP = (event, value) => {
    this.setState({ valueGDP: value });
  };

  handleChangeRevenue = (event, value) => {
    this.setState({ valueRev: value });
  };

  handleChangeCountryGDP = (event, value) => {
    this.setState({ countryGDP: value });
  };

  handleChangeCountryRev = (event, value) => {
    this.setState({ countryRev: value });
  };

  render() {
    return (
      <div className="App" id="grad" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{width: '80%', position: 'fixed', top: '90px'}}>
          <div style={{width: '80%', position: 'fixed', top: '5px'}}>
            <b id="myHead">Ministry of Agriculture and Cooperatives</b>
          </div>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.valueCat}
              onChange={this.handleChangeCat}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="GDP Data" style={{width: '25%', margin: 'auto'}}/>
              <Tab label="Revenue Data" style={{width: '25%', margin: 'auto'}}/>
              <Tab label="Tax Data" style={{width: '25%', margin: 'auto'}}/>
              <Tab label="Overall" style={{width: '25%', margin: 'auto'}}/>
            </Tabs>
          </AppBar>
          <div>
              {
                this.state.valueCat === 0 && 
                <TabContainer style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Card style={{width: '48%'}}>
                    <CardHeader
                      title="Gross Domestic Product (GDP, 2018)"
                      subheader="Compare GDP's value in Northen Europe by each type of activities "
                    />
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    {
                      this.state.valueGDP === 0 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 4801.558],	['Norway', 6727.252],	['United Kingdom', 13913.72],	['Denmark', 2791.012],	['Finland', 5778]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 1 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 26095.5],	['Norway', 21366.54],	['United Kingdom', 134257.9],	['Denmark', 14706.36],	['Finland', 14765]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 2 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 71976.03],	['Norway', 45882.9],	['United Kingdom', 394150.5],	['Denmark', 52002],	['Finland', 31312]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 3 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 14740.36],	['Norway', 15917.84],	['United Kingdom', 152727.5],	['Denmark', 15446.54],	['Finland', 5445]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 4 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 77666.01],	['Norway', 93818.68],	['United Kingdom', 312145.8],	['Denmark', 46407.92],	['Finland', 43089]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 5 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 28343.91],	['Norway', 12732.95],	['United Kingdom', 146006.1],	['Denmark', 11445.73],	['Finland', 11592]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 6 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 48249.59],	['Norway', 23030.92],	['United Kingdom', 282987.2],	['Denmark', 23383.58],	['Finland', 17544]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 7 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 87460.97],	['Norway', 74142.18],	['United Kingdom', 385296.5],	['Denmark', 55428.85],	['Finland', 40612]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 8 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 34535.84],	['Norway', 25012.91],	['United Kingdom', 294466],	['Denmark', 27299.73],	['Finland', 25398]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 9 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 55572.19],	['Norway', 41652.72],	['United Kingdom', 284516.4],	['Denmark', 41531.52],	['Finland', 32914]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 10 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'GDP'], ['Sweden', 463985.4],	['Norway', 367590.8],	['United Kingdom', 2506394],	['Denmark', 300993],	['Finland', 235341]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                  </div>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.valueGDP}
                      onChange={this.handleChangeGDP}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                    >
                      <Tab label="Agriculture" />
                      <Tab label="Construction" />
                      <Tab label="Service" />
                      <Tab label="Financial" />
                      <Tab label="Industry" />
                      <Tab label="Communication" />
                      <Tab label="Technology" />
                      <Tab label="Life" />
                      <Tab label="RealEstate" />
                      <Tab label="Taxes" />
                      <Tab label="Total" />
                    </Tabs>
                  </AppBar>
                  </Card>
                  <Card style={{width: '48%'}}>
                  <CardHeader
                    title="GDP's component"
                    subheader="Shows the component of GDP of Northen Europe's Countries"
                  />
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              {
                this.state.countryGDP === 0 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Life',	87460.97, 19459.90321, ''],
                      ['Industry', 77666.01, 36740.44603, ''],
                      ['Service', 71976.03, 52754.97888, ''],
                      ['Taxes',	55572.19, 65119.68782, ''],
                      ['Technology',	48249.59, 75855.13189, ''],
                      ['RealEstate', 34535.84, 83539.29207, ''],
                      ['Communication', 28343.91, 89845.75935, ''],
                      ['Construction', 26095.5, 95651.95958, ''],
                      ['Financial', 14740.36, 98931.66227, ''],
                      ['Agriculture',	4801.558, 100000, ''],
                    ]}
                    options={{
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryGDP === 1 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Industry',	93818.68, 26040.13715, ''],
                      ['Life',	74142.18, 46618.9018, ''],
                      ['Service',	45882.9, 59354.07361, ''],
                      ['Taxes', 41652.72, 70915.12458, ''],
                      ['RealEstate',	25012.91, 77857.66104, ''],
                      ['Technology',	23030.92, 84250.08007, ''],
                      ['Construction',	21366.54, 90180.53691, ''],
                      ['Financial',	15917.84, 94598.66277, ''],
                      ['Communication',	12732.95, 98132.79653, ''],
                      ['Agriculture',	6727.252, 100000, ''],
                    ]}
                    options={{
                      colors: ['#FF99C8', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryGDP === 2 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Service',	394150.5, 65678.953, ''],
                      ['Life',	385296.5, 129882.5268, ''],
                      ['Industry',	312145.8, 181896.69228, ''],
                      ['RealEstate',	294466, 230964.79844, ''],
                      ['Taxes',	284516.4, 278347.96096, ''],
                      ['Technology',	282987.2, 325530.30648, ''],
                      ['Financial',	152727.5, 350979.93116, ''],
                      ['Communication',	146006.1, 375309.54072, ''],
                      ['Construction',	134257.9, 397681.4984, ''],
                      ['Agriculture',	13913.72, 400000, ''],
                    ]}
                    options={{
                      colors: ['#9BC53D', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryGDP === 3 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Life',	55428.85, 11450.536692, ''],
                      ['Service',	52002, 22193.151942, ''],
                      ['Industry',	46407.92, 31780.137612, ''],
                      ['Taxes',	41531.52, 40359.752628, ''],
                      ['RealEstate',	27299.73, 45999.35295, ''],
                      ['Technology',	23383.58, 50829.951828, ''],
                      ['Financial',	15446.54, 54020.910564, ''],
                      ['Construction',	14706.36, 57058.962318, ''],
                      ['Communication',	11445.73, 59423.43048, ''],
                      ['Agriculture',	2791.012, 60000, ''],
                    ]}
                    options={{
                      colors: ['#FDE74C', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryGDP === 4 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Industry',	43089, 9430.770105, ''],
                      ['Life',	40612, 18319.40608, ''],
                      ['Taxes',	32914, 25523.202115, ''],
                      ['Service',	31312, 32376.372845, ''],
                      ['RealEstate',	25398, 37935.16277, ''],
                      ['Technology',	17544, 41774.96947, ''],
                      ['Construction',	14765, 45006.54413, ''],
                      ['Communication',	11592, 47543.65307, ''],
                      ['Agriculture',	5778, 48808.26793, ''],
                      ['Financial',	5445, 50000, ''],
                    ]}
                    options={{
                      colors: ['#424874', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
            </div>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.countryGDP}
                onChange={this.handleChangeCountryGDP}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Sweden" />
                <Tab label="Norway" />
                <Tab label="United Kingdom" />
                <Tab label="Denmark" />
                <Tab label="Finland" />
              </Tabs>
            </AppBar>
                  </Card>
                  
                  </div>
                </TabContainer>
              }
              {
                this.state.valueCat === 1 && 
                <TabContainer style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Card style={{width: '48%'}}>
                    <CardHeader
                      title="Revenue (Income of Government, 2017)"
                      subheader="Compare Revenue's value by each type of revenue's income"
                    />
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    {
                      this.state.valueRev === 0 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'Tax'], ['Sweden', 69521.492737464],	['Norway', 50082.643039],	['United Kingdom', 285526.8943786],	['Denmark', 84132.408262],	['Finland', 34404]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#FCDFA6', '#F4D06F', '#F6AE2D', '#F26419', '#C16200'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueRev === 1 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'Tax'], ['Sweden', 57923.8195341119],	['Norway', 34331.629397],	['United Kingdom', 217915.1883786],	['Denmark', 71067.2924115],	['Finland', 28277]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#FCDFA6', '#F4D06F', '#F6AE2D', '#F26419', '#C16200'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueRev === 2 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'Tax'], ['Sweden', 42549.270754628],	['Norway', 35424.61897],	['United Kingdom', 152598.56584],	['Denmark', 141.9817],	['Finland', 27068]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#FCDFA6', '#F4D06F', '#F6AE2D', '#F26419', '#C16200'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueRev === 3 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'Tax'], ['Sweden', 54214.642415204],	['Norway', 40703.7969],	['United Kingdom', 250873.41088],	['Denmark', 42557.8492535],	['Finland', 31848]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#FCDFA6', '#F4D06F', '#F6AE2D', '#F26419', '#C16200'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueRev === 4 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'Tax'], ['Sweden', 52305.37703422],	['Norway', 38704.208647],	['United Kingdom', 241754.61892],	['Denmark', 39151.5475365],	['Finland', 30538]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#FCDFA6', '#F4D06F', '#F6AE2D', '#F26419', '#C16200'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueRev === 5 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'Tax'], ['Sweden', 40802.3816073839],	['Norway', 29143.6288],	['United Kingdom', 162571.58542],	['Denmark', 27626.9733145],	['Finland', 20404]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#FCDFA6', '#F4D06F', '#F6AE2D', '#F26419', '#C16200'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueRev === 6 && <TabContainer>
                        <Chart
                          width={'475px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Country', 'Tax'], ['Sweden', 9333.162501976],	['Norway', 8408.909743],	['United Kingdom', 57052.79642],	['Denmark', 10899.9485035],	['Finland', 8002]]}
                          options={{
                            region: '154',
                            colorAxis: { colors: ['#FCDFA6', '#F4D06F', '#F6AE2D', '#F26419', '#C16200'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                  </div>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.valueRev}
                      onChange={this.handleChangeRevenue}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                    >
                      <Tab label="Income" />
                      <Tab label="Individual income" />
                      <Tab label="SSC" />
                      <Tab label="Goods&Services" />
                      <Tab label="Production" />
                      <Tab label="VAT" />
                      <Tab label="Excise" />
                    </Tabs>
                  </AppBar>
                  </Card>
                  <Card style={{width: '48%'}}>
                  <CardHeader
                    title="Revenue's Component"
                    subheader="Shows the component of Revenue of Northen Europe's Countries"
                  />
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              {
                this.state.countryRev === 0 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Income',	69521.49274, 17026.532752, ''],
                      ['Individual income',	57923.81953, 31212.67536, ''],
                      ['Goods&Services',	54214.64242, 44490.40212, ''],
                      ['Production',	52305.37703, 57300.53004, ''],
                      ['SSC',	42549.27075, 67721.286608, ''],
                      ['VAT',	40802.38161, 77714.211952, ''],
                      ['Excise',	9333.162502, 80000, ''],
                    ]}
                    options={{
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryRev === 1 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Income',	50082.64304, 12689.889132, ''],
                      ['Goods&Services',	40703.7969, 23003.375766, ''],
                      ['Production',	38704.20865, 32810.208768, ''],
                      ['SSC',	35424.61897, 41786.062674, ''],
                      ['Individual income',	34331.6294, 50484.975996, ''],
                      ['VAT',	29143.6288, 54869.359008, ''],
                      ['Excise',	8408.909743, 60000, ''],
                    ]}
                    options={{
                      colors: ['#FF99C8', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryRev === 2 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Income',	285526.8944, 62602.13604, ''],
                      ['Goods&Services',	250873.4109, 117606.45162, ''],
                      ['Production',	241754.6189, 170611.4604, ''],
                      ['Individual income',	217915.1884, 218389.64361, ''],
                      ['VAT',	162571.5854, 254033.67123, ''],
                      ['SSC',	152598.5658, 287491.10157, ''],
                      ['Excise',	57052.79642, 300000, ''],
                    ]}
                    options={{
                      colors: ['#9BC53D', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryRev === 3 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Income',	84132.40826, 30529.43557, ''],
                      ['Individual income',	71067.29241, 56317.88464, ''],
                      ['Goods&Services',	42557.84925, 71761.00749, ''],
                      ['Production',	39151.54754, 85968.07315, ''],
                      ['VAT',	27626.97331, 95993.17429, ''],
                      ['Excise',	10899.9485, 99948.47858, ''],
                      ['SSC',	141.9817, 100000, ''],
                    ]}
                    options={{
                      colors: ['#FDE74C', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
              {
                this.state.countryRev === 4 && <TabContainer>
                  <Chart
                    width={'600px'}
                    height={'375px'}
                    chartType="ComboChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '', '', { role: "tooltip", type: "string", p: { html: true } }],
                      ['Income',	34404, 7622.423716, ''],
                      ['Goods&Services',	31848, 14678.549472, ''],
                      ['Production',	30538, 21444.436444, ''],
                      ['Individual income',	28277, 27709.384572, ''],
                      ['SSC',	27068, 33706.471108, ''],
                      ['VAT',	20404, 38227.106308, ''],
                      ['Excise',	8002, 40000, ''],
                    ]}
                    options={{
                      colors: ['#424874', 'red'],
                      legend: { position: 'none' },
                      seriesType: 'bars',
                      series: { 1: { type: 'line' } },
                      tooltip: {isHtml: true},
                    }}
                  />
                </TabContainer>
              }
            </div>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.countryRev}
                onChange={this.handleChangeCountryRev}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Sweden" />
                <Tab label="Norway" />
                <Tab label="United Kingdom" />
                <Tab label="Denmark" />
                <Tab label="Finland" />
              </Tabs>
            </AppBar>
                  </Card>
                  
                  </div>
                </TabContainer>
              }  
              {
                this.state.valueCat === 2 && 
                <TabContainer>
                  <div style={{width: '84%', marginLeft: '8%', marginTop: '-25px'}}>
                  <Card>
                    <CardHeader
                      title="Tax Tribution"
                      subheader="Shows Tax's Tribution of each provinces in a selected Northen Europe"
                    />
                  <div style={{display: 'flex', justifyContent: 'space-around', margin: 'auto'}}>
                    {
                      this.state.valueGDP === 0 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'400px'}
                          chartType="GeoChart"
                          data={[
                            ['Country', 'Tax'], 
                            ['Blekinge',39825.918],
                            ['Dalarnas',38963.88],
                            ['Gotland',36550.188],
                            ['Gävleborg',37584.63],
                            ['Halland',38101.842],
                            ['Jämtland',37067.4],
                            ['Jönköping',41894.784],
                            ['Kalmar',34255.8],
                            ['Kronoberg',42239.61],
                            ['Norrbotten',40687.938],
                            ['Skåne',34000],
                            ['Stockholm',66365.63],
                            ['Södermanland',34806.15],
                            ['Uppsala',40320],
                            ['Värmland',37390.77],
                            ['Västerbotten',37563.084],
                            ['Västernorrland',43249.23],
                            ['Västmanland',40147.686],
                            ['Västra Götaland',44237.75],
                            ['Örebro',38596.932],
                            ['Östergötland',40664.61]
                          ]}
                          options={{
                            region: 'SE',
                            resolution: 'provinces',
                            colorAxis: { colors: ['#DBB3B1', '#C89FA3', '#A67F8E', '#6C534E', '#2C1A1D'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 1 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'400px'}
                          chartType="GeoChart"
                          data={[
                            ['Country', 'Tax'], 
                            ['Møre og Romsdal',7393.3859],
                            ['Hordaland',4315.36539938],
                            ['Buskerud',0],
                            ['Vest-Agder',1767.67542],
                            ['Oslo',4036.86470145],
                            ['Rogaland',7632.98150937],
                            ['Vestfold',1608.2962],
                            ['Troms',0],
                            ['Trøndelag',8260.7089865],
                            ['Akershus',6119.7423],
                            ['Aust-Agder',4132.61105],
                            ['Finnmark',1973.769],
                            ['Hedmark',3739.87455],
                            ['Nordland',3530.86155],
                            ['Oppland',2671.18505],
                            ['Sogn og Fjordane',0],
                            ['Telemark',0],
                            ['Østfold',0]
                          ]}
                          options={{
                            region: 'NO',
                            resolution: 'provinces',
                            colorAxis: { colors: ['#DBB3B1', '#C89FA3', '#A67F8E', '#6C534E', '#2C1A1D'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 2 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'400px'}
                          chartType="GeoChart"
                          data={[
                            ['Country', 'Tax'], 
                            ['Scotland', 7346.66381466667],
                            ['Northern Ireland', 3687.868244],
                            ['Wales', 21870.095728],
                            ['England', 9250.23191270588]
                          ]}
                          options={{
                            region: 'GB',
                            resolution: 'provinces',
                            colorAxis: { colors: ['#DBB3B1', '#C89FA3', '#A67F8E', '#6C534E', '#2C1A1D'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 3 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'400px'}
                          chartType="GeoChart"
                          data={[
                            ['Country', 'Tax', { role: "tooltip", type: "string", p: { html: true } }], 
                            ['DK-81', 25240.325852, '<b>Nordjylland</b><br>Tax: <b>25240.325852</b>'],
                            ['DK-82', 20698.11990379, '<b>Midtjylland</b><br>Tax: <b>20698.11990379</b>'],
                            ['DK-84', 22839.76838402, '<b>Hovedstaden</b><br>Tax: <b>22839.76838402</b>'],
                            ['DK-83', 20976.16213112, '<b>Sjælland</b><br>Tax: <b>20976.16213112</b>'],
                            ['DK-85', 20458.81082, '<b>Syddanmark</b><br>Tax: <b>20458.81082</b>'],
                          ]}
                          options={{
                            region: 'DK',
                            resolution: 'provinces',
                            colorAxis: { colors: ['#DBB3B1', '#C89FA3', '#A67F8E', '#6C534E', '#2C1A1D'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                            tooltip: {isHtml: true},
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 4 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'400px'}
                          chartType="GeoChart"
                          data={[
                            ['Country', 'Tax', { role: "tooltip", type: "string", p: { html: true } }], 
                            ['FI-18',3300.9375, '<b>Uusimaa</b><br>Tax: <b>3300.9375</b>'],
                            ['FI-13',836, '<b>Pohjois-Karjala</b><br>Tax: <b>836</b>'],
                            ['FI-08',2181.5, '<b>Keski-Suomi</b><br>Tax: <b>2181.5</b>'],
                            ['FI-09',8270.25, '<b>Kymenlaakso</b><br>Tax: <b>8270.25</b>'],
                            ['FI-15',8, '<b>Pohjois-Savo</b><br>Tax: <b>8</b>'],
                            ['FI-16',1664, '<b>Päijät-Häme</b><br>Tax: <b>1664</b>'],
                            ['FI-02',732.5, '<b>Etelä-Karjala</b><br>Tax: <b>732.5</b>'],
                            ['FI-14',6591.5, '<b>Pohjois-Pohjanmaa</b><br>Tax: <b>6591.5</b>'],
                            ['FI-11',3550.4125, '<b>Pirkanmaa</b><br>Tax: <b>3550.4125</b>'],
                            ['FI-19',2996, '<b>Varsinais-Suomi</b><br>Tax: <b>2996</b>'],
                            ['FI-12',652.6325, '<b>Pohjanmaa</b><br>Tax: <b>652.6325</b>'],
                            ['FI-01',3220.4, '<b>Ahvenanmaan maakunta</b><br>Tax: <b>3220.4</b>'],
                            ['FI-04',8, '<b>Etelä-Savo</b><br>Tax: <b>8</b>'],
                            ['FI-05',8, '<b>Kainuu</b><br>Tax: <b>8</b>'],
                            ['FI-06',2694.624225, '<b>Kanta-Häme</b><br>Tax: <b>2694.624225</b>'],
                            ['FI-07',8, '<b>Keski-Pohjanmaa</b><br>Tax: <b>8</b>'],
                            ['FI-10',8, '<b>Lappi</b><br>Tax: <b>8</b>'],
                            ['FI-17',8, '<b>Satakunta</b><br>Tax: <b>8</b>'],
                            ['FI-03',8, '<b>Etelä-Pohjanmaa</b><br>Tax: <b>8</b>'],
                          ]}
                          options={{
                            region: 'FI',
                            resolution: 'provinces',
                            colorAxis: { colors: ['#DBB3B1', '#C89FA3', '#A67F8E', '#6C534E', '#2C1A1D'] },
                            backgroundColor: '#88d2ff',
                            datalessRegionColor: '#ffffff',
                            defaultColor: '#f5f5f5',
                            tooltip: {isHtml: true},
                          }}
                          mapsApiKey="AIzaSyCXU_3IGQ9ZlHDeJuOoGJXYjsjPCaBbcm8"
                          rootProps={{ 'data-testid': '4' }}
                        />
                      </TabContainer>
                    }
                  </div>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.valueGDP}
                      onChange={this.handleChangeGDP}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      style={{display: 'flex', margin: 'auto'}}
                    >
                      <Tab label="Sweden" />
                      <Tab label="Norway" />
                      <Tab label="United Kingdom" />
                      <Tab label="Denmark" />
                      <Tab label="Finland" />
                    </Tabs>
                  </AppBar>
                  </Card>
                  
                  </div>
                </TabContainer>
              } 
              {
                this.state.valueCat === 3 && 
                <TabContainer style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Card style={{width: '48%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                      {
                        this.state.countryGDP === 0 && <TabContainer>
                          <CardHeader
                            title="GDP Trending (1999 - 2018)"
                            subheader="Shows trending of GDP from 1999 to 2018 of Northern Europe's Countries"
                          />
                          <Chart
                              width={'580px'}
                              height={'380px'}
                              chartType="LineChart"
                              loader={<div>Loading Chart</div>}
                              data={[
                                ['year', 'Sweden',	'Norway'	,'UK'	,'Denmark',	'Finland'],
                                [1999, 216881.1, 132376.1, 1221827, 171412.4, 128937],			
                                [2000, 230874.6, 157502.1, 1290365, 182654.6, 138447],			
                                [2001, 240477.7, 163426.1, 1337452, 188583.8, 146673],		
                                [2002, 249482.7, 162923.1, 1402989, 193867.4, 150561],		
                                [2003, 259962.9, 169227.7, 1485799, 197402.4, 153847],			
                                [2004, 272262.8, 185905.2, 1557209, 206658.5, 160899],		
                                [2005, 281491.8, 207555, 1639764, 215998.9, 166597],			
                                [2006, 300090.9, 230922.5, 1732287, 228421.8, 174010],			
                                [2007, 319241.1, 244027.8, 1820114, 236165.3, 187994],			
                                [2008, 328236.9, 270789.5, 1864489, 244187.6, 195203],			
                                [2009, 318812.4, 252456.3, 1816473, 234080.1, 182335],			
                                [2010, 341037.5, 269215, 1876428, 245737.6, 188492],			
                                [2011, 354350, 290094.3, 1941843, 250714.1, 198285],			
                                [2012, 357050.4, 307916.1, 2002051, 257577.3, 201263],			
                                [2013, 365237.2, 319081.9, 2079777, 262477.3, 204874],			
                                [2014, 381601.8, 326647.4, 2178207, 269726, 207018],			
                                [2015, 406916.1, 323928.1, 2241487, 277524.3, 211630],			
                                [2016, 424715.7, 324149.8, 2329974, 285963.1, 217765],		
                                [2017, 443552.6, 343478.9, 2427315, 296625.9, 225636],			
                                [2018, 463985.4, 367590.8, 2506394, 300993, 235341]		
                              ]}
                              options={{
                                hAxis: {
                                  title: 'Year',
                                },
                                vAxis: {
                                  title: 'GDP',
                                },
                              }}
                            />
                        </TabContainer>
                      }
                      {
                        this.state.countryGDP === 1 && <TabContainer>
                          <CardHeader
                            title="GDP Trending (1999 - 2018, without UK)"
                            subheader="Shows trending of GDP from 1999 to 2018 of Northern Europe's Countries(not include United Kingdom because of too high GDP's value among others country)"
                          />
                          <Chart
                              width={'580px'}
                              height={'380px'}
                              chartType="LineChart"
                              loader={<div>Loading Chart</div>}
                              data={[
                                ['year', 'Sweden',	'Norway','Denmark',	'Finland'],
                                [1999, 216881.1, 132376.1, 171412.4, 128937],
                                [2000, 230874.6, 157502.1, 182654.6, 138447],
                                [2001, 240477.7, 163426.1, 188583.8, 146673],
                                [2002, 249482.7, 162923.1, 193867.4, 150561],
                                [2003, 259962.9, 169227.7, 197402.4, 153847],
                                [2004, 272262.8, 185905.2, 206658.5, 160899],
                                [2005, 281491.8, 207555, 215998.9, 166597],
                                [2006, 300090.9, 230922.5, 228421.8, 174010],
                                [2007, 319241.1, 244027.8, 236165.3, 187994],
                                [2008, 328236.9, 270789.5, 244187.6, 195203],
                                [2009, 318812.4, 252456.3, 234080.1, 182335],
                                [2010, 341037.5, 269215, 245737.6, 188492],
                                [2011, 354350, 290094.3, 250714.1, 198285],
                                [2012, 357050.4, 307916.1, 257577.3, 201263],
                                [2013, 365237.2, 319081.9, 262477.3, 204874],
                                [2014, 381601.8, 326647.4, 269726, 207018],
                                [2015, 406916.1, 323928.1, 277524.3, 211630],
                                [2016, 424715.7, 324149.8, 285963.1, 217765],
                                [2017, 443552.6, 343478.9, 296625.9, 225636],
                                [2018, 463985.4, 367590.8, 300993, 235341]	
                              ]}
                              options={{
                                hAxis: {
                                  title: 'Year',
                                },
                                vAxis: {
                                  title: 'GDP',
                                },
                              }}
                            />
                        </TabContainer>
                      }
                    </div>
                    <AppBar position="static" color="default">
                                <Tabs
                                  value={this.state.countryGDP}
                                  onChange={this.handleChangeCountryGDP}
                                  indicatorColor="primary"
                                  textColor="primary"
                                  variant="scrollable"
                                  scrollButtons="auto"
                                  style={{display:"flex",margin:"auto"}}
                                >
                                  <Tab label="All" />
                                  <Tab label="No United Kingdom" />
                                </Tabs>
                              </AppBar>
                  </Card>
                  <Card style={{width: '48%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                      {
                        this.state.countryGDP === 0 && <TabContainer>
                          <CardHeader
                            title="Revenue Tredning (1999 - 2017)"
                            subheader="Shows trending of Revenue from 1999 to 2017 of Northern Europe's Countries"
                          />
                          <Chart
                              width={'580px'}
                              height={'380px'}
                              chartType="LineChart"
                              loader={<div>Loading Chart</div>}
                              data={[
                                ['year', 'Sweden',	'Norway'	,'UK'	,'Denmark',	'Finland'],
                                [1999, 104659.125168, 54833.178725, 389311.01542, 79885.8829545, 56174.193],
                                [2000, 111736.003706572, 65364.212433, 420263.58412, 83569.6919225, 62435.258],
                                [2001, 111214.516259264, 68158.626926, 431189.26084, 84626.0893485, 62354.316],
                                [2002, 111248.30348716, 68394.590966, 437273.1426, 86030.1946, 64257.43],
                                [2003, 116672.633627928, 69835.420512, 458729.60618, 88006.0039005, 64247],
                                [2004, 122721.0764877, 78209.453114, 496634.34562, 93881.139674, 66278],
                                [2005, 129875.76362498, 87683.719799, 531742.0462, 102336.0561475, 69230],
                                [2006, 136524.264171712, 98197.884148, 565188.16274, 105058.5686395, 72763],
                                [2007, 142084.5325593, 102418.121702, 595437.66344, 108493.896238, 77447],
                                [2008, 142857.402053372, 111709.30927, 597893.71432, 108345.8736185, 79823],
                                [2009, 138942.819628852, 103670.283509, 562441.51042, 104125.494375, 74103],
                                [2010, 145784.261804032, 112462.013859, 601039.94362, 109027.4125675, 76315],
                                [2011, 148940.832578396, 121596.099053, 639912.57334, 111331.2665675, 82750],
                                [2012, 150317.147470884, 127373.181806, 643410.33664, 116034.4237745, 85269],
                                [2013, 155000.041522312, 126897.734964, 664566.82454, 120684.5387615, 88688],
                                [2014, 160654.324652484, 126329.558394, 687763.38142, 131204.512089, 90027],
                                [2015, 173386.754413152, 124008.520883, 714349.2592199, 127846.8458015, 92074],
                                [2016, 185909.637469532, 124929.091118, 755452.82799232, 128911.3602945, 95126],
                                [2017, 193747.969129224, 130735.46239, 795265.2557386, 133283.0304155, 97014]
                              ]}
                              options={{
                                hAxis: {
                                  title: 'Year',
                                },
                                vAxis: {
                                  title: 'GDP',
                                },
                              }}
                            />
                        </TabContainer>
                      }
                      {
                        this.state.countryGDP === 1 && <TabContainer>
                          <CardHeader
                            title="Revenue Trending (1999 - 2017, without UK)"
                            subheader="Shows trending of Revenue from 1999 to 2017 of Northern Europe's Countries(not include United Kingdom because of too high Revenue's value among others country)"
                          />
                          <Chart
                              width={'580px'}
                              height={'380px'}
                              chartType="LineChart"
                              loader={<div>Loading Chart</div>}
                              data={[
                                ['year', 'Sweden',	'Norway','Denmark',	'Finland'],
                                [1999, 104659.125168, 54833.178725, 79885.8829545, 56174.193],
                                [2000, 111736.003706572, 65364.212433, 83569.6919225, 62435.258],
                                [2001, 111214.516259264, 68158.626926, 84626.0893485, 62354.316],
                                [2002, 111248.30348716, 68394.590966, 86030.1946, 64257.43],
                                [2003, 116672.633627928, 69835.420512, 88006.0039005, 64247],
                                [2004, 122721.0764877, 78209.453114, 93881.139674, 66278],
                                [2005, 129875.76362498, 87683.719799, 102336.0561475, 69230],
                                [2006, 136524.264171712, 98197.884148, 105058.5686395, 72763],
                                [2007, 142084.5325593, 102418.121702, 108493.896238, 77447],
                                [2008, 142857.402053372, 111709.30927, 108345.8736185, 79823],
                                [2009, 138942.819628852, 103670.283509, 104125.494375, 74103],
                                [2010, 145784.261804032, 112462.013859, 109027.4125675, 76315],
                                [2011, 148940.832578396, 121596.099053, 111331.2665675, 82750],
                                [2012, 150317.147470884, 127373.181806, 116034.4237745, 85269],
                                [2013, 155000.041522312, 126897.734964, 120684.5387615, 88688],
                                [2014, 160654.324652484, 126329.558394, 131204.512089, 90027],
                                [2015, 173386.754413152, 124008.520883, 127846.8458015, 92074],
                                [2016, 185909.637469532, 124929.091118, 128911.3602945, 95126],
                                [2017, 193747.969129224, 130735.46239, 133283.0304155, 97014]	
                              ]}
                              options={{
                                hAxis: {
                                  title: 'Year',
                                },
                                vAxis: {
                                  title: 'GDP',
                                },
                              }}
                            />
                        </TabContainer>
                      }
                    </div>
                    <AppBar position="static" color="default">
                                <Tabs
                                  value={this.state.countryGDP}
                                  onChange={this.handleChangeCountryGDP}
                                  indicatorColor="primary"
                                  textColor="primary"
                                  variant="scrollable"
                                  scrollButtons="auto"
                                  style={{display:"flex",margin:"auto"}}
                                >
                                  <Tab label="All" />
                                  <Tab label="No United Kingdom" />
                                </Tabs>
                              </AppBar>
                  </Card>
                  </div>
                </TabContainer>
              }  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
