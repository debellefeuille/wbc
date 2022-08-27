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
]

export default years;