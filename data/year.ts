type Convention = {
  type: string,
  location: string,
  startDate: Date,
  endDate: Date
}

type Year = {
  name: string,
  conventions: Convention[]
}

const years: Year[] = [
  {name: '2022', conventions: [{type: 'WBC', location: 'Seven Springs, PA', startDate: new Date("2022-07-23"), endDate: new Date("2022-07-31")}]},
  {name: '2021', conventions: []},
  {name: '2020', conventions: []},
  {name: '2019', conventions: [{type: 'WBC', location: 'Seven Springs, PA', startDate: new Date("2019-07-20"), endDate: new Date("2019-07-28")}]},
  {name: '2018', conventions: [{type: 'WBC', location: 'Seven Springs, PA', startDate: new Date("2018-07-21"), endDate: new Date("2018-07-29")}]},
  {name: '2017', conventions: [{type: 'WBC', location: 'Seven Springs, PA', startDate: new Date("2017-07-22"), endDate: new Date("2017-07-30")}]},
  {name: '2016', conventions: [{type: 'WBC', location: 'Seven Springs, PA', startDate: new Date("2016-07-23"), endDate: new Date("2016-07-31")}]},
  {name: '2015', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2015-08-01"), endDate: new Date("2015-08-09")}]},
  {name: '2014', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2014-08-02"), endDate: new Date("2014-08-10")}]},
  {name: '2013', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2013-07-27"), endDate: new Date("2013-08-04")}]},
  {name: '2012', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2012-07-28"), endDate: new Date("2012-08-05")}]},
  {name: '2011', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2011-07-30"), endDate: new Date("2011-08-07")}]},
  {name: '2010', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2010-07-31"), endDate: new Date("2010-08-08")}]},
  {name: '2009', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2009-08-01"), endDate: new Date("2009-08-09")}]},
  {name: '2008', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2008-08-02"), endDate: new Date("2008-08-10")}]},
  {name: '2007', conventions: [{type: 'WBC', location: 'Lancaster, PA',     startDate: new Date("2007-07-29"), endDate: new Date("2007-08-05")}]},
]

export default years;