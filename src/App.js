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
              <Tab label="General" style={{width: '25%', margin: 'auto'}}/>
              <Tab label="Overview Budget" style={{width: '25%', margin: 'auto'}}/> {/* Time series */}
              <Tab label="Budget Distribution" style={{width: '25%', margin: 'auto'}}/> { /* Pie */}
              <Tab label="Budget Allocation" style={{width: '25%', margin: 'auto'}}/> {/* Bar */}
            </Tabs>
          </AppBar>
          
          <div>
          {
                this.state.valueCat === 0 && 
                <TabContainer>
                  <div style={{width: '96%'}}>
                  <Card>
                    <CardHeader
                      title="Overview Eastern Region"
                      subheader="Year Information 2561 - 2562"
                    />
                  <div style={{display: 'flex', justifyContent: 'space-around', margin: 'auto' }}>
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
                      <Tab label="ประชากร" />
                      <Tab label="งบประมาณจังหวัด" />
                      <Tab label="งบประมาณกระทรวงเกษตรและสหกรณ์" />
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
                      title="Budget Variation Rate and Trendline"
                      subheader="Shows all budget of each country in 2547 - 2562"
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
                            ['Year', 'Budget'],
                            [2547,147.880473],
                            [2548,169.898087],
                            [2549,263.863673],
                            [2550,418.245615],
                            [2551,384.96894],
                            [2552,172.82059],
                            [2553,473.3295],
                            [2554,1212.111538],
                            [2555,2373.592334],
                            [2556,10520.593054],
                            [2557,1205.452833],
                            [2558,750.505423],
                            [2559,572.0142],
                            [2560,631.3966],
                            [2561,1417.0282],
                            [2562,1348.9021]
                          ]}
                          options={{
                            hAxis: {
                              title: 'Year',
                              gridlines : {
                                count : 8
                              }
                            },
                            vAxis: {
                              title: 'Budget (Million Baht)',
                            },
                            series: {
                              1: { curveType: 'function' },
                            },
                            explorer: {
                              actions: ['dragToZoom', 'rightClickToReset'] 
                            },
                            trendlines: {
                              0: {
                                type: 'exponential',
                                visibleInLegend: true,
                                color: 'green'
                              }
                            }
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
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'Budget'],
                            [2547,179.746356],
                            [2548,263.620717],
                            [2549,191.971794],
                            [2550,755.304377],
                            [2551,1037.951132],
                            [2552,696.334408],
                            [2553,491.465457],
                            [2554,533.679994],
                            [2555,259.682095],
                            [2556,181.257454],
                            [2557,170.764123],
                            [2558,347.882511],
                            [2559,565.8767],
                            [2560,835.56011],
                            [2561,1075.2048],
                            [2562,574.015]
                          ]}
                          options={{
                            hAxis: {
                              title: 'Year',
                              gridlines : {
                                count : 8
                              }
                            },
                            vAxis: {
                              title: 'Budget (Million Baht)',
                            },
                            series: {
                              1: { curveType: 'function' },
                            },
                            explorer: {
                              actions: ['dragToZoom', 'rightClickToReset'] 
                            },
                            trendlines: {
                              0: {
                                type: 'exponential',
                                visibleInLegend: true,
                                color: 'green'
                              }
                            }
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
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'Budget'],
                            [2547,152.145509],
                            [2548,185.228819],
                            [2549,210.426275],
                            [2550,259.519332],
                            [2551,308.408961],
                            [2552,335.7463],
                            [2553,241.746962],
                            [2554,994.382445],
                            [2555,2787.440897],
                            [2556,1596.719613],
                            [2557,1696.189523],
                            [2558,802.258751],
                            [2559,1132.86044],
                            [2560,956.0565],
                            [2561,1509.4408],
                            [2562,1734.1708]
                          ]}
                          options={{
                            hAxis: {
                              title: 'Year',
                              gridlines : {
                                count : 8
                              }
                            },
                            vAxis: {
                              title: 'Budget (Million Baht)',
                            },
                            series: {
                              1: { curveType: 'function' },
                            },
                            explorer: {
                              actions: ['dragToZoom', 'rightClickToReset'] 
                            },
                            trendlines: {
                              0: {
                                type: 'exponential',
                                visibleInLegend: true,
                                color: 'green'
                              }
                            }
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
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ['Year', 'Budget'],
                            [2547,140.489245],
                            [2548,152.876356],
                            [2549,225.10545],
                            [2550,325.981056],
                            [2551,246.307501],
                            [2552,322.617884],
                            [2553,240.09431],
                            [2554,351.57008],
                            [2555,165.842496],
                            [2556,151.886439],
                            [2557,219.011843],
                            [2558,255.22356],
                            [2559,210.00324],
                            [2560,231.2664],
                            [2561,325.144],
                            [2562,543.3894]
                          ]}
                          options={{
                            hAxis: {
                              title: 'Year',
                              gridlines : {
                                count : 8
                              }
                            },
                            vAxis: {
                              title: 'Budget (Million Baht)',
                            },
                            series: {
                              1: { curveType: 'function' },
                            },
                            explorer: {
                              actions: ['dragToZoom', 'rightClickToReset'] 
                            },
                            trendlines: {
                              0: {
                                type: 'exponential',
                                visibleInLegend: true,
                                color: 'green'
                              }
                            }
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
                      title="Distribution ratio of Department in Ministry of Agriculture"
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
              
          </div>
        </div>
      </div>
    );
  }
}

export default App;
