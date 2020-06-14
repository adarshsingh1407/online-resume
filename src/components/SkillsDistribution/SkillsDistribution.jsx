import React, { PureComponent } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { RESUME_DETAIL } from '../../constants'

const COLORS = [
  '#4caf50',
  '#47bec9',
  '#7e57c2',
  '#ffc107',
  '#f4511e',
  '#90a4ae',
]

export default class SkillsDistribution extends PureComponent {
  render() {
    const data = RESUME_DETAIL.skills.map(skill => ({
      name: skill.name,
      value: skill.value,
    }))
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              label={pieData => {
                return `${pieData.name} ${pieData.value}%`
              }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
