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
                      title="Perspective of each city"
                      subheader="Year Information 2561 - 2562"
                    />
                  <div class="zoom"  style={{display: 'flex', justifyContent: 'space-around', margin: 'auto'}}>
                    {
                      this.state.valueGDP === 0 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Province', 'Population'], 
                                ['Chon Buri',     1535445],	
                                ['Rayong',         723316],	
                                ['Chanthaburi',    536496],	
                                ['Trat',           229914]]}
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
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Province', 'AllBudget'], 
                                ['Chon Buri',     23970120494],	
                                ['Rayong',         8014286544],	
                                ['Chanthaburi',    6253304134],	
                                ['Trat',           2828784744]]}
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
                      this.state.valueGDP === 2 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="GeoChart"
                          data={[['Province', 'MAC Budget'], 
                                ['Chon Buri',   1348902100],	
                                ['Rayong',       574015000],	
                                ['Chanthaburi', 1734170800],	
                                ['Trat',         543389400]]}
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
                      <Tab label="Population" />
                      <Tab label="City Budget" />
                      <Tab label="MAC Budget" />
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
                      title="Main Department of MAC"
                      subheader="MAC - Ministry of Agriculture and Cooperatives"
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
                            ['Year', 'Chonburi', 'Rayong', 'Chanthaburi','Trat'],
                            ['2558',577458500,230306800,654480500,191292600],
                            ['2559',467390200,442770100,1026334600,125626500],
                            ['2560',582640300,794572800,894507900,203750200],
                            ['2561',1321047600,999376200,1380748800,271496800],
                            ['2562',1305509900,546407200,1665939000,503646400]
                          ]}
                          options={{
                            chart: {
                              title: 'Budget Allocation to Royal Irrigation Department',
                              subtitle: 'Distribution of budget in 2558-2562',
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
                          height={'375px'}
                          chartType="Bar"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'กรมประมง', 'กรมปศุสัตว์', 'กรมพัฒนาที่ดิน','กรมส่งเสริมการเกษตร'],
                            ['2558',29468650,55409920,34571500,150000],
                            ['2559',15007800,2008500,17504900,65193200],
                            ['2560',11089500,9631500,17264400,431000],
                            ['2561',1020600,9735200,6857200,11658000],
                            ['2562',6449800,14973000,17409000,303000]
                          ]}
                          options={{
                            chart: {
                              title: 'Budget Allocation w/o Royal Irrigation Department',
                              subtitle: 'Distribution of budget to Main Department in 2558-2562',
                            },
                          }}
                          rootProps={{ 'data-testid': '2' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 2 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="Bar"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'กรมประมง', 'กรมปศุสัตว์', 'กรมพัฒนาที่ดิน','กรมส่งเสริมการเกษตร'],
                            ['2558',48439745,11305752,17169575,500000],
                            ['2559',17947900,65000,12708900,66221900],
                            ['2560',17379500,1815000,6564000,1707000],
                            ['2561',4670600,2137500,16004000,11816000],
                            ['2562',3551300,1857000,11493000,2318900]
                          ]}
                          options={{
                            chart: {
                              title: 'Budget Allocation w/o Royal Irrigation Department',
                              subtitle: 'Distribution of budget to Main Department in 2558-2562',
                            },
                          }}
                          rootProps={{ 'data-testid': '2' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 3 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="Bar"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'กรมประมง', 'กรมปศุสัตว์', 'กรมพัฒนาที่ดิน','กรมส่งเสริมการเกษตร'],
                            ['2558',41078090,21335000,28256000,0],
                            ['2559',13408300,2577800,22970040,48696900],
                            ['2560',6327000,808100,39331500,3137800],
                            ['2561',3536200,5771400,27177000,4730100],
                            ['2562',2984400,1805900,49488000,2759300]
                          ]}
                          options={{
                            chart: {
                              title: 'Budget Allocation w/o Royal Irrigation Department',
                              subtitle: 'Distribution of budget to Main Department in 2558-2562',
                            },
                          }}
                          rootProps={{ 'data-testid': '2' }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 4 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="Bar"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'กรมประมง', 'กรมปศุสัตว์', 'กรมพัฒนาที่ดิน','กรมส่งเสริมการเกษตร'],
                            ['2558',19388770,7056530,16769100,171200],
                            ['2559',12258100,16505000,20255640,33798700],
                            ['2560',2356000,1928600,17189700,844600],
                            ['2561',13956800,1017000,30331000,1104500],
                            ['2562',210000,1124000,36811400,508800]
                          ]}
                          options={{
                            chart: {
                              title: 'Budget Allocation w/o Royal Irrigation Department',
                              subtitle: 'Distribution of budget to Main Department in 2558-2562',
                            },
                          }}
                          rootProps={{ 'data-testid': '2' }}
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
                      <Tab label="กรมชลประทาน" />
                      <Tab label="Chonburi" />
                      <Tab label="Rayong" />
                      <Tab label="Chanthaburi" />
                      <Tab label="Trat" />
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
                      title="Ratio of Department in Ministry of Agriculture"
                      subheader="Shows distribution of budget in each department w/o Royal Irrigation Department"
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
                            ['Department', 'Budget Ratio'],
                            ['สํานักงานปลัดกระทรวงเกษตรและสหกรณ์', 147200],
                            ['กรมประมง', 6449800],
                            ['กรมปศุสัตว์', 14973000],
                            ['กรมพัฒนาที่ดิน', 17409000],
                            ['กรมส่งเสริมการเกษตร',303000],
                            ['กรมส่งเสริมสหกรณ์',93300],
                            ['สํานักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม',1635800]
                          ]}
                          options={{
                            title: 'Budget Ratio in each deaprtment of Chonburi',
                          }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 1 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="PieChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Department', 'Budget Ratio'],
                            ['สํานักงานปลัดกระทรวงเกษตรและสหกรณ์', 15800],
                            ['กรมประมง', 3551300],
                            ['กรมปศุสัตว์', 1857000],
                            ['กรมพัฒนาที่ดิน', 11493000],
                            ['กรมส่งเสริมการเกษตร',2318900],
                            ['กรมส่งเสริมสหกรณ์',220800],
                            ['สํานักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม',73600]
                          ]}
                          options={{
                            title: 'Budget Ratio in each deaprtment of Rayong',
                          }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 2 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="PieChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Department', 'Budget Ratio'],
                            ['สํานักงานปลัดกระทรวงเกษตรและสหกรณ์', 1526000],
                            ['กรมประมง', 2984400],
                            ['กรมปศุสัตว์', 1805900],
                            ['กรมพัฒนาที่ดิน', 49488000],
                            ['กรมส่งเสริมการเกษตร',2759300],
                            ['กรมส่งเสริมสหกรณ์',2506800],
                            ['สํานักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม',36800]
                          ]}
                          options={{
                            title: 'Budget Ratio in each deaprtment of Chanthaburi',
                          }}
                        />
                      </TabContainer>
                    }
                    {
                      this.state.valueGDP === 3 && <TabContainer>
                        <Chart
                          width={'645px'}
                          height={'375px'}
                          chartType="PieChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Department', 'Budget Ratio'],
                            ['สํานักงานปลัดกระทรวงเกษตรและสหกรณ์', 28600],
                            ['กรมประมง', 210000],
                            ['กรมปศุสัตว์', 1124000],
                            ['กรมพัฒนาที่ดิน', 36811400],
                            ['กรมส่งเสริมการเกษตร',508800],
                            ['กรมส่งเสริมสหกรณ์',70400],
                            ['สํานักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม',36800]
                          ]}
                          options={{
                            title: 'Budget Ratio in each deaprtment of Trat',
                          }}
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
                      <Tab label="Chonburi" />
                      <Tab label="Rayong" />
                      <Tab label="Chanthaburi" />
                      <Tab label="Trat" />
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
