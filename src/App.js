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
              <Tab label="Geo Chart" style={{width: '25%', margin: 'auto'}}/>
              <Tab label="Bar chart" style={{width: '25%', margin: 'auto'}}/>
              <Tab label="Pie Chart" style={{width: '25%', margin: 'auto'}}/>
              <Tab label="Time Series" style={{width: '25%', margin: 'auto'}}/>
            </Tabs>
          </AppBar>
          
          <div>
          {
                this.state.valueCat === 0 && 
                <TabContainer>
                  <div style={{width: '96%'}}>
                  <Card>
                    <CardHeader
                      title="Tax Tribution"
                      subheader="Shows Tax's Tribution of each provinces in a selected Northen Europe"
                    />
                  <div class="zoom"  style={{display: 'flex', justifyContent: 'space-around', margin: 'auto'}}>
                    {
                      this.state.valueGDP === 0 && <TabContainer>
                        <Chart
                          width={'900spx'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Province', 'GDP'], ['Chon Buri', 4801.558],	['Rayong', 6727.252],	
                                  ['Chanthaburi', 13913.72],	['Trat', 2791.012]]}
                          options={{
                            region:'TH',
                            resolution:'provinces',
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
                this.state.valueCat === 1 && 
                <TabContainer>
                  <div style={{width: '96%'}}>
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
                          height={'375px'}
                          chartType="Bar"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'Sales', 'Expenses', 'Profit'],
                            ['2014', 1000, 400, 200],
                            ['2015', 1170, 460, 250],
                            ['2016', 660, 1120, 300],
                            ['2017', 1030, 540, 350],
                          ]}
                          options={{
                            chart: {
                              title: 'Company Performance',
                              subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                            },
                          }}
                          rootProps={{ 'data-testid': '2' }}
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
                this.state.valueCat === 2 && 
                <TabContainer>
                  <div style={{width: '96%'}}>
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
                          height={'375px'}
                          chartType="PieChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Task', 'Hours per Day'],
                            ['Work', 11],
                            ['Eat', 2],
                            ['Commute', 2],
                            ['Watch TV', 2],
                            ['Sleep', 7],
                          ]}
                          options={{
                            title: 'My Daily Activities',
                          }}
                          rootProps={{ 'data-testid': '1' }}
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
                <TabContainer>
                  <div style={{width: '96%'}}>
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
                          height={'375px'}
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['x', 'dogs', 'cats'],
                            [0, 0, 0],
                            [1, 10, 5],
                            [2, 23, 15],
                            [3, 17, 9],
                            [4, 18, 10],
                            [5, 9, 5],
                            [6, 11, 3],
                            [7, 27, 19],
                          ]}
                          options={{
                            hAxis: {
                              title: 'Time',
                            },
                            vAxis: {
                              title: 'Popularity',
                            },
                            series: {
                              1: { curveType: 'function' },
                            },
                          }}
                          rootProps={{ 'data-testid': '2' }}
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
