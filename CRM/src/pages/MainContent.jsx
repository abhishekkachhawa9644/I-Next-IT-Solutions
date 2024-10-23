import React from 'react'
// import Chart from 'react-apexcharts';

import Chart from 'react-apexcharts';
import ApexCharts from 'react-apexcharts';


const MainContent = () => {
   const incomeChartOptions = {
      chart: {
        type: 'area',
        height: 120,
        sparkline: { enabled: true },
      },
      stroke: { curve: 'smooth' },
      series: [{ data: [10, 20, 15, 30, 25, 40] }],
      colors: ['#4caf50'],
    };
  
    const profitChartOptions = {
      chart: { type: 'area', height: 120, sparkline: { enabled: true } },
      stroke: { curve: 'smooth' },
      series: [{ data: [40, 30, 20, 25, 15, 10] }],
      colors: ['#f44336'],
    };
  
    const impressionChartOptions = {
      chart: { type: 'area', height: 120, sparkline: { enabled: true } },
      stroke: { curve: 'smooth' },
      series: [{ data: [15, 25, 35, 45, 30, 50] }],
      colors: ['#ff9800'],
    };
  
    const activityChartOptions = {
      chart: { type: 'area', height: 120, sparkline: { enabled: true } },
      stroke: { curve: 'smooth' },
      series: [{ data: [5, 15, 10, 20, 30, 25] }],
      colors: ['#2196f3'],
    };



    const columnChartOptions = {
      chart: { type: 'bar', height: 350 },
      plotOptions: { bar: { horizontal: false } },
      dataLabels: { enabled: false },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    };
  
    const columnChartSeries = [
      { name: 'Revenue', data: [10, 20, 15, 30, 40] },
    ];
  
    const progressBars = [
      { title: 'Registrations', progress: 75, up: '2.6k', down: 568 },
      { title: 'Sales', progress: 35, up: '268k', down: '89k' },
      { title: 'Company Growth', progress: 70, up: 15, down: 3 },
    ];

    const lineChartOptions = {
      chart: { type: 'line', height: 350 },
      stroke: { curve: 'smooth' },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      tooltip: { x: { format: 'dd/MM/yy' } },
    };
  
    const lineChartSeries = [
      { name: 'Visitors', data: [10, 41, 35, 51, 49, 62] },
    ];


    // Line chart data and configuration
  const lineChartOptionsc = {
   chart: {
     type: 'line',
     height: 350,
   },
   stroke: {
     curve: 'smooth',
   },
   xaxis: {
     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
   },
   tooltip: {
     x: {
       format: 'dd/MM/yy',
     },
   },
 };

 const lineChartSeriesc = [
   {
     name: 'Growth Rate',
     data: [10, 20, 15, 30, 25, 35, 40, 50], // Example data
   },
 ];

  
  return (
    <>
               <div className="main-content">
            <div className="container-fluid">
            <div className="row">
      {/* Card 1 */}
      <div className="col-xl-4 col-md-8">
        <div className="card mb-30">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="increase">
                <div className="card-title d-flex align-items-end mb-2">
                  <h2>86<sup>%</sup></h2>
                  <p className="font-14">Increased</p>
                </div>
                <h3 className="card-subtitle mb-2">Congratulation!</h3>
                <p className="font-16">
                  You've finished all of your tasks for this week.
                </p>
              </div>
              <div className="congratulation-img">
                <img src="src/assets/img/media/congratulation-img.png" alt="Congrats" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Income Chart */}
      <div className="col-xl-2 col-md-4 col-sm-6">
        <div className="card area-chart-box mb-30">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-1">Income</h4>
                <p className="font-14 c3">Increase in Average</p>
              </div>
              <h2>50<sup>%</sup></h2>
            </div>
          </div>
          <Chart options={incomeChartOptions} series={incomeChartOptions.series} type="area" height={120} />
        </div>
      </div>

      {/* Card 3: Profit Chart */}
      <div className="col-xl-2 col-md-4 col-sm-6">
        <div className="card area-chart-box mb-30">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-1">Profit Report</h4>
                <p className="font-14 soft-pink">Decrease in Average</p>
              </div>
              <h2>15<sup>%</sup></h2>
            </div>
          </div>
          <Chart options={profitChartOptions} series={profitChartOptions.series} type="area" height={120} />
        </div>
      </div>

      {/* Card 4: Impression Chart */}
      <div className="col-xl-2 col-md-4 col-sm-6">
        <div className="card area-chart-box mb-30">
          <div className="card-body">
            <h4 className="mb-1">Impression</h4>
            <p className="font-14 text_color">Hover to see detail</p>
          </div>
          <Chart options={impressionChartOptions} series={impressionChartOptions.series} type="area" height={120} />
        </div>
      </div>

      {/* Card 5: Activity Chart */}
      <div className="col-xl-2 col-md-4 col-sm-6">
        <div className="card area-chart-box mb-30">
          <div className="card-body">
            <h4 className="mb-1">Activity</h4>
            <p className="font-14 text_color">Hover to see detail</p>
          </div>
          <Chart options={activityChartOptions} series={activityChartOptions.series} type="area" height={120} />
        </div>
      </div>
    </div>

               <div className="row">
               <div className="col-xl-6 col-lg-12">
      <div className="row">
        <div className="col-12">
          <div className="card mb-30">
            <div className="card-body d-flex justify-content-between mb-n72">
              <div className="position-relative index-9">
                <h4 className="mb-1">Website Analytics</h4>
                <p className="font-14">Check out each column for more details</p>
              </div>

              <div className="dropdown-button">
                <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                  <div className="menu-icon style--two mr-0">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#">Daily</a>
                  <a href="#">Sort By</a>
                  <a href="#">Monthly</a>
                </div>
              </div>
            </div>
            <ApexCharts
              options={columnChartOptions}
              series={columnChartSeries}
              type="bar"
              height={350}
            />
          </div>
        </div>

        {progressBars.map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className={`card mb-30 progress_${index + 1}`}>
              <div className="card-body">
                <h4 className="progress-title">{item.title}</h4>

                <div className="ProgressBar-wrap position-relative mb-4">
                  <div className={`ProgressBar ProgressBar_${index + 1}`} data-progress={item.progress}>
                    <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                      <circle
                        transform="rotate(135, 100, 100)"
                        className="ProgressBar-background"
                        cx="100"
                        cy="100"
                        r="85"
                      />
                      <circle
                        transform="rotate(135, 100, 100)"
                        className="ProgressBar-circle"
                        cx="100"
                        cy="100"
                        r="85"
                      />
                    </svg>
                    <span className="ProgressBar-percentage--text">Increase</span>
                    <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                  </div>
                </div>

                <div className="d-flex flex-wrap mb-2 progress-info">
                  <div>Users</div>
                  <div>
                    <img src="assets/img/svg/caret-up.svg" alt="" className="svg" /> {item.up}
                  </div>
                  <div>
                    <img src="assets/img/svg/caret-down.svg" alt="" className="svg" /> {item.down}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                  <div className="col-xl-6 col-lg-12">
                     <div className="row">
                     <div className="col-sm-6">
      <div className="card mb-30">
        <div className="card-body">
          {/* Line Chart */}
          <ApexCharts
            options={lineChartOptions}
            series={lineChartSeries}
            type="line"
            height={350}
          />

          <div className="d-flex align-items-end justify-content-between mt-4">
            <div>
              <h4 className="mb-1">Website Analytics</h4>
              <p className="font-14">Check out each column for more details</p>
            </div>

            <div className="dropdown-button">
              <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                <div className="menu-icon justify-content-end pb-1 style--two mr-0">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#">Daily</a>
                <a href="#">Sort By</a>
                <a href="#">Monthly</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div className="col-sm-6">
      <div className="card mb-30">
        <div className="card-body">
          {/* Line Chart */}
          <ApexCharts
            options={lineChartOptionsc}
            series={lineChartSeriesc}
            type="line"
            height={350}
          />

          <div className="d-flex align-items-end justify-content-between mt-4">
            <div>
              <h4 className="mb-1">Company Growth</h4>
              <p className="font-14">Company is growing 20% on average</p>
            </div>

            <div className="dropdown-button">
              <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                <div className="menu-icon justify-content-end pb-1 style--two mr-0">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#">Daily</a>
                <a href="#">Sort By</a>
                <a href="#">Monthly</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

                        <div className="col-12">
                        
                           <div className="card todo-list mb-30">
                              <div className="card-body p-0">
                                
                                 <div className="single-row border-bottom pt-3 pb-2">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                       <div className="">
                                          <h4 className="card-title">Today To Do List</h4>
                                          <p className="card-text font-14 bold">Saturday, <br />
                                             12 October 2019</p>
                                       </div>
      
                                       <div className="d-flex align-items-center">
                                          <a href="pages/apps/todolist/add-new.html" className="btn-circle">
                                             <img src="assets/img/svg/plus_white.svg" alt="" className="svg"/>
                                          </a>
      
                                          <div className="dropdown-button">
                                             <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                                <div className="menu-icon style--two justify-content-center mr-0">
                                                   <span></span>
                                                   <span></span>
                                                   <span></span>
                                                </div>
                                             </a>
                                             <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#">Daily</a>
                                                <a href="#">Sort By</a>
                                                <a href="#">Monthly</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                
                                 
                                
                                 <div className="single-row border-bottom pt-3 pb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="d-flex position-relative">
                                        
                                          <label className="custom-checkbox">
                                             <input type="checkbox" checked/>
                                             <span className="checkmark"></span>
                                          </label>
                                          
      
                                        
                                          <div className="todo-text line-through">
                                             <p className="card-text mb-1">For detracty charmed add talking age. Shy resolution instrument unreserved man few.</p>
                                             <p className="text-warning font-12 mb-0">Urgent Not Important</p>
                                          </div>
                                         
                                       </div>
         
                                       <div className="d-flex">
                                        
                                          <div className="assign_to">
                                             <img src="assets/img/svg/Info.svg" alt="" className="svg mr-2 mb-1" />
                                             <div className="assign-content">
                                                <div className="font-12 text-warning">Back-End</div>
                                                <img src="assets/img/avatar/info-avatar.png" alt="" className="assign-avatar" />
                                             </div>
                                          </div>
                                        
      
                                        
                                          <img src="assets/img/svg/dragicon.svg" alt="" className="svg" />
                                        
                                          <div className="dropdown-button">
                                             <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                                <div className="menu-icon style--two w-14 mr-0">
                                                   <span></span>
                                                   <span></span>
                                                   <span></span>
                                                </div>
                                             </a>
                                             <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#">Daily</a>
                                                <a href="#">Sort By</a>
                                                <a href="#">Monthly</a>
                                             </div>
                                          </div>
                                        
                                       </div>
                                    </div>
                                 </div>
                                
      
                               
                                 <div className="single-row border-bottom pt-3 pb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="d-flex position-relative">
                                        
                                          <label className="custom-checkbox">
                                             <input type="checkbox" />
                                             <span className="checkmark"></span>
                                          </label>
                                        
                                          <div className="todo-text">
                                             <p className="card-text mb-1">Way sentiments two indulgence uncommonly own.</p>
                                             <p className="text-danger font-12 mb-0">Urgent And Important</p>
                                          </div>
                                        
                                       </div>
         
                                       <div className="d-flex">
                                        
                                          <div className="assign_to">
                                             <img src="assets/img/svg/Info.svg" alt="" className="svg mr-2 mb-1"/>
                                             <div className="assign-content">
                                                <div className="font-12 text-warning">Back-End</div>
                                                <img src="assets/img/avatar/info-avatar.png" alt="" className="assign-avatar"/>
                                             </div>
                                          </div>
                                        
                                          <img src="assets/img/svg/dragicon.svg" alt="" className="svg"/>
                                        
                                          <div className="dropdown-button">
                                             <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                                <div className="menu-icon style--two w-14 mr-0">
                                                   <span></span>
                                                   <span></span>
                                                   <span></span>
                                                </div>
                                             </a>
                                             <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#">Daily</a>
                                                <a href="#">Sort By</a>
                                                <a href="#">Monthly</a>
                                             </div>
                                          </div>
                                        
                                       </div>
                                    </div>
                                 </div>
                                
                                 <div className="single-row border-bottom pt-3 pb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="d-flex position-relative">
                                        
                                          <label className="custom-checkbox">
                                             <input type="checkbox"/>
                                             <span className="checkmark"></span>
                                          </label>
                                        
                                          <div className="todo-text">
                                             <p className="card-text mb-1">Donec dapibus mauris id odio ornare tempus amet.</p>
                                             <p className="text-success font-12 mb-0">Not Urgent Or Important</p>
                                          </div>
                                        
                                       </div>
         
                                       <div className="d-flex">
                                        
                                          <div className="assign_to">
                                             <img src="assets/img/svg/Info.svg" alt="" className="svg mr-2 mb-1"/>
                                             <div className="assign-content">
                                                <div className="font-12 text-warning">Back-End</div>
                                                <img src="assets/img/avatar/info-avatar.png" alt="" className="assign-avatar"/>
                                             </div>
                                          </div>
                                        
                                          <img src="assets/img/svg/dragicon.svg" alt="" className="svg"/>
                                        
                                          <div className="dropdown-button">
                                             <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                                <div className="menu-icon style--two w-14 mr-0">
                                                   <span></span>
                                                   <span></span>
                                                   <span></span>
                                                </div>
                                             </a>
                                             <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#">Daily</a>
                                                <a href="#">Sort By</a>
                                                <a href="#">Monthly</a>
                                             </div>
                                          </div>
                                        
                                       </div>
                                    </div>
                                 </div>
                                
                                 <div className="single-row border-bottom pt-3 pb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="d-flex position-relative">
                                        
                                          <label className="custom-checkbox">
                                             <input type="checkbox"/>
                                             <span className="checkmark"></span>
                                          </label>
                                       
                                          <div className="todo-text">
                                             <p className="card-text mb-1">For detracty charmed add talking age. Shy resolution instrument unreserved man few.</p>
                                             <p className="text-info font-12 mb-0">Urgent Not Important</p>
                                          </div>
                                        
                                       </div>
         
                                       <div className="d-flex">
                                        
                                          <img src="assets/img/svg/dragicon.svg" alt="" className="svg mr-2"/>
                                        
                                          <div className="assign_to">
                                             <img src="assets/img/svg/Info.svg" alt="" className="svg mb-1"/>
                                          </div>
                                        
                                          <div className="dropdown-button">
                                             <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                                <div className="menu-icon style--two w-14 mr-0">
                                                   <span></span>
                                                   <span></span>
                                                   <span></span>
                                                </div>
                                             </a>
                                             <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#">Daily</a>
                                                <a href="#">Sort By</a>
                                                <a href="#">Monthly</a>
                                             </div>
                                          </div>
                                        
                                       </div>
                                    </div>
                                 </div>
                                
                                 <div className="single-row pb-3 pt-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="d-flex position-relative">
                                        
                                          <label className="custom-checkbox">
                                             <input type="checkbox"/>
                                             <span className="checkmark"></span>
                                          </label>
                                        
                                          <div className="todo-text">
                                             <p className="card-text mb-1">Way sentiments two indulgence uncommonly own.</p>
                                             <p className="text-warning font-12 mb-0">Urgent Not Important</p>
                                          </div>
                                         
                                       </div>
         
                                       <div className="d-flex">
                                        
                                          <img src="assets/img/svg/dragicon.svg" alt="" className="svg mr-2"/>
                                        
                                          <div className="assign_to">
                                             <img src="assets/img/svg/Info.svg" alt="" className="svg mb-1"/>
                                          </div>
                                        
                                          <div className="dropdown-button">
                                             <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                                <div className="menu-icon style--two w-14 mr-0">
                                                   <span></span>
                                                   <span></span>
                                                   <span></span>
                                                </div>
                                             </a>
                                             <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#">Daily</a>
                                                <a href="#">Sort By</a>
                                                <a href="#">Monthly</a>
                                             </div>
                                          </div>
                                        
                                       </div>
                                    </div>
                                 </div>
                                
                              </div>
                           </div>
                        
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="row">
                  <div className="col-xl-3 col-md-5">
                    
                     <div className="card mb-30">
                        <div className="card-body">
                           <div className="mb-40 d-none">
                              <h4 className="mb-2">Cloud Storage</h4>
                              <p className="font-14">72% space used</p>
                           </div>
                           <div id="apex_radar-chart"></div>

                           <div className="upgrade_storage-btn mt-2">
                              <a href="#" className="btn d-block">Upgrade Storage</a>
                           </div>
                        </div>
                     </div>
                    
                  </div>
                  <div className="col-xl-4 col-md-7">
                    
                     <div className="card mb-30">
                        <div className="card-body">
                           <div className="row align-items-end">
                              <div className="col-5 col-sm-6 col-lg-5">
                                 <div id="apex_column2-chart"></div>
                              </div>
                              <div className="col-7 col-sm-6 col-lg-7">
                                 <div className="">
                                    <h4 className="mb-2">Registration</h4>
                                    <p>Pellentesque tincidunt tristique neque, eget venenatis enim gravida.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                    
                     <div className="card mb-30">
                        <div className="card-body">
                           <div className="row align-items-end">
                              <div className="col-5 col-sm-6 col-lg-5">
                                 <div id="apex_column3-chart"></div>
                              </div>
                              <div className="col-7 col-sm-6 col-lg-7">
                                 <div className="">
                                    <h4 className="mb-2">Activity</h4>
                                    <p>Pellentesque tincidunt tristique neque, eget venenatis enim gravida.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                    
                     <div className="card mb-30">
                        <div className="card-body">
                           <div className="row align-items-end">
                              <div className="col-5 col-sm-6 col-lg-5">
                                 <div id="apex_column4-chart"></div>
                              </div>
                              <div className="col-7 col-sm-6 col-lg-7">
                                 <div className="">
                                    <h4 className="mb-2">Completed Task</h4>
                                    <p>Pellentesque tincidunt tristique neque, eget venenatis enim gravida.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                    
                     <div className="card mb-30">
                        <div className="card-body">
                           <div className="row align-items-end">
                              <div className="col-6">
                                 <div className="d-flex justify-content-start">
                                    <div className="ProgressBar-wrap2 position-relative">
                                       <div className="ProgressBar ProgressBar_4" data-progress="67">
                                          <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                                            
                                             <circle transform="rotate(-90, 100, 100)" className="ProgressBar-background" cx="100" cy="100" r="85" />
                                             <circle transform="rotate(-90, 100, 100)" className="ProgressBar-circle" cx="100" cy="100" r="85" />
                                          </svg>
                                          <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                                          <span className="ProgressBar-percentage--text">Bounce Rate</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6">
                                 <div className="d-flex justify-content-start progress_5">
                                    <div className="ProgressBar-wrap2 position-relative">
                                       <div className="ProgressBar ProgressBar_5" data-progress="48">
                                          <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                                            
                                             <circle transform="rotate(-90, 100, 100)" className="ProgressBar-background" cx="100" cy="100" r="85" />
                                             <circle transform="rotate(-90, 100, 100)" className="ProgressBar-circle" cx="100" cy="100" r="85" />
                                          </svg>
                                          <span className="ProgressBar-percentage ProgressBar-percentage--count style--two"></span>
                                          <span className="ProgressBar-percentage--text">Conversion</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                    
                  </div>
                  <div className="col-xl-5">
                    
                     <div className="card mb-30">
                        <div className="card-body">
                           <div className="mb-1">
                              <h4 className="mb-2">Analytics</h4>
                              <p className="pt-1">Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. </p>
                           </div>

                           <div id="apex_bar-chart"></div>
                        </div>
                     </div>
                    
                  </div>
                  <div className="col-xl-12">
                    
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex justify-content-start justify-content-sm-between align-items-start align-items-sm-center flex-column flex-sm-row mb-sm-n3">
                              <div className="title-content mb-4 mb-sm-0">
                                 <h4 className="mb-2">Sale Reports</h4>
                                 <p>Solicitude announcing as to sufficient my</p>
                              </div>
                              <div className="">
                                 <ul className="list-inline list-button m-0">
                                    <li>2015</li>
                                    <li>2016</li>
                                    <li>2017</li>
                                    <li>2018</li>
                                    <li className="active">2019</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div id="apex_line3-chart"></div>
                     </div>
                    
                  </div>
               </div>
            </div>
         </div>
    </>
  )
}

export default MainContent
